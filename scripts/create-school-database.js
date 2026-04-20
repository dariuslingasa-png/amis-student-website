import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Client } = pg;

async function createSchoolDatabase() {
  // Connect to postgres database to create new database
  const client = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    database: 'postgres',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD,
  });

  try {
    await client.connect();
    console.log('✅ Connected to PostgreSQL');

    // Check if database exists
    const checkDb = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = 'amis_school'"
    );

    if (checkDb.rows.length > 0) {
      console.log('⚠️  Database amis_school already exists');
    } else {
      // Create database
      await client.query('CREATE DATABASE amis_school');
      console.log('✅ Created database: amis_school');
    }

    await client.end();

    // Connect to new database to create tables
    const schoolClient = new Client({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      database: 'amis_school',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD,
    });

    await schoolClient.connect();
    console.log('✅ Connected to amis_school database');

    // Create visitor tracking table
    await schoolClient.query(`
      CREATE TABLE IF NOT EXISTS visitor_logs (
        id SERIAL PRIMARY KEY,
        ip_address VARCHAR(50),
        user_agent TEXT,
        page_url VARCHAR(500),
        referrer VARCHAR(500),
        country VARCHAR(100),
        city VARCHAR(100),
        visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Created table: visitor_logs');

    // Create daily visitor stats table
    await schoolClient.query(`
      CREATE TABLE IF NOT EXISTS daily_stats (
        id SERIAL PRIMARY KEY,
        date DATE UNIQUE NOT NULL,
        total_visits INTEGER DEFAULT 0,
        unique_visitors INTEGER DEFAULT 0,
        page_views INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Created table: daily_stats');

    // Create announcements table (synced from admin)
    await schoolClient.query(`
      CREATE TABLE IF NOT EXISTS announcements (
        id SERIAL PRIMARY KEY,
        admin_announcement_id INTEGER NOT NULL,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        category VARCHAR(50),
        priority VARCHAR(20) DEFAULT 'normal',
        image TEXT,
        publish_date TIMESTAMP,
        author VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        synced_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Created table: announcements');

    // Create contact submissions table
    await schoolClient.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        subject VARCHAR(255),
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        responded_at TIMESTAMP
      )
    `);
    console.log('✅ Created table: contact_submissions');

    // Create feedback table
    await schoolClient.query(`
      CREATE TABLE IF NOT EXISTS feedback (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        feedback_type VARCHAR(50),
        rating INTEGER,
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Created table: feedback');

    // Create inquiries table
    await schoolClient.query(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        parent_name VARCHAR(255) NOT NULL,
        student_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        grade_level VARCHAR(50),
        inquiry_type VARCHAR(50),
        message TEXT,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        followed_up_at TIMESTAMP
      )
    `);
    console.log('✅ Created table: inquiries');

    // Create newsletter subscribers table
    await schoolClient.query(`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255),
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT true,
        unsubscribed_at TIMESTAMP
      )
    `);
    console.log('✅ Created table: newsletter_subscribers');

    // Create sync log table
    await schoolClient.query(`
      CREATE TABLE IF NOT EXISTS sync_log (
        id SERIAL PRIMARY KEY,
        sync_type VARCHAR(50) NOT NULL,
        records_synced INTEGER DEFAULT 0,
        status VARCHAR(50) DEFAULT 'success',
        error_message TEXT,
        synced_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('✅ Created table: sync_log');

    await schoolClient.end();

    console.log('\n========================================');
    console.log('✅ School database setup complete!');
    console.log('========================================');
    console.log('Database: amis_school');
    console.log('Tables created:');
    console.log('  - visitor_logs (track website visits)');
    console.log('  - daily_stats (daily visitor statistics)');
    console.log('  - announcements (synced from admin)');
    console.log('  - contact_submissions');
    console.log('  - feedback');
    console.log('  - inquiries');
    console.log('  - newsletter_subscribers');
    console.log('  - sync_log');
    console.log('========================================');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createSchoolDatabase();
