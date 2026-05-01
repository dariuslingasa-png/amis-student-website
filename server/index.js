import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();
const PORT = 3002; // School Website API Port

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'School website API is running' });
});

// Get published announcements
app.get('/api/announcements', async (req, res) => {
  try {
    const limit = req.query.limit || 50;
    const type = req.query.type || 'all';

    let categoryFilter = '';
    if (type === 'news') {
      categoryFilter = "AND (category = 'news' OR category IS NULL)";
    } else if (type === 'events') {
      categoryFilter = "AND category = 'event'";
    }

    const result = await pool.query(`
      SELECT 
        id,
        title,
        content,
        category,
        priority,
        image,
        publish_date,
        author,
        created_at,
        synced_at
      FROM announcements
      WHERE 1=1
        ${categoryFilter}
      ORDER BY 
        CASE priority
          WHEN 'urgent' THEN 1
          WHEN 'high' THEN 2
          WHEN 'normal' THEN 3
          WHEN 'low' THEN 4
        END,
        publish_date DESC NULLS LAST,
        created_at DESC
      LIMIT $1
    `, [limit]);

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching announcements:', error);
    res.status(500).json({ error: 'Failed to fetch announcements' });
  }
});

// Get settings
app.get('/api/settings', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT key, value, updated_at
      FROM settings
      WHERE key IN ('maintenance_mode', 'maintenance_message', 'maintenance_signature', 'hero_type', 'hero_video_url', 'hero_image_url', 'hero_title', 'hero_subtitle')
    `);

    const settings = {};
    result.rows.forEach(row => {
      settings[row.key] = row.value;
    });

    res.json(settings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

// Get hero slides
app.get('/api/hero-slides', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, image_url, title, subtitle, display_order
      FROM hero_slides
      WHERE is_active = true
      ORDER BY display_order ASC, created_at DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching hero slides:', error);
    res.status(500).json({ error: 'Failed to fetch hero slides' });
  }
});

// Track visitor
app.post('/api/track-visit', async (req, res) => {
  try {
    const { page_url, referrer } = req.body;
    const ip_address = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const user_agent = req.headers['user-agent'];

    await pool.query(`
      INSERT INTO visitor_logs (ip_address, user_agent, page_url, referrer)
      VALUES ($1, $2, $3, $4)
    `, [ip_address, user_agent, page_url, referrer]);

    // Update daily stats
    const today = new Date().toISOString().split('T')[0];
    await pool.query(`
      INSERT INTO daily_stats (date, total_visits, page_views)
      VALUES ($1, 1, 1)
      ON CONFLICT (date) 
      DO UPDATE SET 
        total_visits = daily_stats.total_visits + 1,
        page_views = daily_stats.page_views + 1
    `, [today]);

    res.json({ success: true });
  } catch (error) {
    console.error('Error tracking visit:', error);
    res.status(500).json({ error: 'Failed to track visit' });
  }
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const result = await pool.query(`
      INSERT INTO contact_submissions (name, email, phone, subject, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
    `, [name, email, phone, subject, message]);

    res.json({ success: true, id: result.rows[0].id });
  } catch (error) {
    console.error('Error submitting contact:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

// Submit feedback
app.post('/api/feedback', async (req, res) => {
  try {
    const { name, email, feedback_type, rating, message } = req.body;

    const result = await pool.query(`
      INSERT INTO feedback (name, email, feedback_type, rating, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
    `, [name, email, feedback_type, rating, message]);

    res.json({ success: true, id: result.rows[0].id });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
});

// Get visitor statistics (for admin)
app.get('/api/stats', async (req, res) => {
  try {
    const stats = await pool.query(`
      SELECT 
        date,
        total_visits,
        unique_visitors,
        page_views
      FROM daily_stats
      ORDER BY date DESC
      LIMIT 30
    `);

    const totalVisitors = await pool.query(`
      SELECT COUNT(*) as total FROM visitor_logs
    `);

    const todayVisitors = await pool.query(`
      SELECT COUNT(*) as today 
      FROM visitor_logs 
      WHERE DATE(visited_at) = CURRENT_DATE
    `);

    res.json({
      daily_stats: stats.rows,
      total_visitors: totalVisitors.rows[0].total,
      today_visitors: todayVisitors.rows[0].today
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

app.listen(PORT, () => {
  console.log('========================================');
  console.log('🚀 School Website API Server Started');
  console.log('========================================');
  console.log(`📡 API URL: http://localhost:${PORT}`);
  console.log(`📊 Database: ${process.env.DB_NAME || 'amis_admin'}`);
  console.log(`🔌 DB Host: ${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || '5432'}`);
  console.log(`👤 DB User: ${process.env.DB_USER || 'postgres'}`);
  console.log('========================================');
  console.log('Testing database connection...');
  
  // Test database connection
  pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('❌ Database connection FAILED:', err.message);
    } else {
      console.log('✅ Database connection successful!');
      console.log(`⏰ Server time: ${res.rows[0].now}`);
    }
  });
});
