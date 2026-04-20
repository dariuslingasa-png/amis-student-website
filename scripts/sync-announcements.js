import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

// Connection to admin database
const adminPool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: 'amis_admin',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
});

// Connection to school database
const schoolPool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: 'amis_school',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
});

async function syncAnnouncements() {
  try {
    console.log('🔄 Starting announcement sync...\n');

    // Get published announcements from admin database
    const adminResult = await adminPool.query(`
      SELECT 
        a.id,
        a.title,
        a.content,
        a.category,
        a.priority,
        a.image_url as image,
        a.publish_date,
        a.created_at,
        CONCAT(u.first_name, ' ', u.last_name) as author
      FROM announcements a
      LEFT JOIN users u ON a.published_by = u.id
      WHERE a.is_published = true
        AND (a.publish_date IS NULL OR a.publish_date <= CURRENT_TIMESTAMP)
      ORDER BY a.created_at DESC
    `);

    console.log(`📊 Found ${adminResult.rows.length} published announcements in admin database`);

    if (adminResult.rows.length === 0) {
      console.log('⚠️  No announcements to sync');
      await logSync('announcements', 0, 'success', null);
      return;
    }

    let syncedCount = 0;
    let updatedCount = 0;
    let newCount = 0;

    for (const announcement of adminResult.rows) {
      // Check if announcement already exists in school database
      const existingResult = await schoolPool.query(
        'SELECT id FROM announcements WHERE admin_announcement_id = $1',
        [announcement.id]
      );

      if (existingResult.rows.length > 0) {
        // Update existing announcement
        await schoolPool.query(`
          UPDATE announcements 
          SET 
            title = $1,
            content = $2,
            category = $3,
            priority = $4,
            image = $5,
            publish_date = $6,
            author = $7,
            updated_at = CURRENT_TIMESTAMP,
            synced_at = CURRENT_TIMESTAMP
          WHERE admin_announcement_id = $8
        `, [
          announcement.title,
          announcement.content,
          announcement.category,
          announcement.priority,
          announcement.image,
          announcement.publish_date,
          announcement.author,
          announcement.id
        ]);
        updatedCount++;
      } else {
        // Insert new announcement
        await schoolPool.query(`
          INSERT INTO announcements (
            admin_announcement_id,
            title,
            content,
            category,
            priority,
            image,
            publish_date,
            author,
            created_at,
            synced_at
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, CURRENT_TIMESTAMP)
        `, [
          announcement.id,
          announcement.title,
          announcement.content,
          announcement.category,
          announcement.priority,
          announcement.image,
          announcement.publish_date,
          announcement.author,
          announcement.created_at
        ]);
        newCount++;
      }
      syncedCount++;
    }

    // Delete announcements that are no longer published in admin
    const adminIds = adminResult.rows.map(a => a.id);
    if (adminIds.length > 0) {
      const deleteResult = await schoolPool.query(
        'DELETE FROM announcements WHERE admin_announcement_id NOT IN (' + 
        adminIds.map((_, i) => `$${i + 1}`).join(',') + ')',
        adminIds
      );
      if (deleteResult.rowCount > 0) {
        console.log(`🗑️  Removed ${deleteResult.rowCount} unpublished announcements`);
      }
    }

    await logSync('announcements', syncedCount, 'success', null);

    console.log('\n========================================');
    console.log('✅ Sync completed successfully!');
    console.log('========================================');
    console.log(`📝 New announcements: ${newCount}`);
    console.log(`🔄 Updated announcements: ${updatedCount}`);
    console.log(`📊 Total synced: ${syncedCount}`);
    console.log('========================================');

  } catch (error) {
    console.error('❌ Sync failed:', error.message);
    await logSync('announcements', 0, 'failed', error.message);
    process.exit(1);
  } finally {
    await adminPool.end();
    await schoolPool.end();
  }
}

async function logSync(syncType, recordsSynced, status, errorMessage) {
  try {
    await schoolPool.query(`
      INSERT INTO sync_log (sync_type, records_synced, status, error_message)
      VALUES ($1, $2, $3, $4)
    `, [syncType, recordsSynced, status, errorMessage]);
  } catch (error) {
    console.error('Failed to log sync:', error.message);
  }
}

syncAnnouncements();
