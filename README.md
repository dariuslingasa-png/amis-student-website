# AMIS School Website

Public-facing website for Al-Munawwar Islamic School.

## Features
- Live announcements from database
- Facebook feed integration
- Responsive design
- Direct database connection (no dependency on admin portal)

## Tech Stack
- **Frontend**: Vue 3 + Vite
- **Backend API**: Express.js
- **Database**: PostgreSQL (shared with admin portal)

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env` and update with your database credentials:
```env
VITE_DB_HOST=localhost
VITE_DB_PORT=5432
VITE_DB_NAME=amis_admin
VITE_DB_USER=postgres
VITE_DB_PASSWORD=your_password
```

### 3. Run the Application

**Option A: Start Everything (Recommended)**
```bash
npm run dev:all
```
This starts both the API server (port 3002) and frontend (port 5173).

**Option B: Start Separately**
```bash
# Terminal 1 - API Server
npm run server

# Terminal 2 - Frontend
npm run dev
```

**Option C: Use Batch Files (Windows)**
- Double-click `START_SCHOOL_WEBSITE.bat` (starts both)
- Or use `START_SCHOOL_WEBSITE_API.bat` (API only)

## How It Works

```
School Website Frontend (port 5173)
    ↓ Fetch announcements
School Website API (port 3001)
    ↓ Query database
PostgreSQL Database (port 5432)
```

The school website has its own API server that connects directly to the database. This means:
- ✅ Announcements display even if admin portal is offline
- ✅ No dependency on admin portal for public content
- ✅ Admin can login/logout without affecting website
- ✅ Faster response times

## URLs
- **Frontend**: http://localhost:5173
- **API**: http://localhost:3001
- **API Health**: http://localhost:3001/api/health
- **Announcements API**: http://localhost:3001/api/announcements

## Notes
- The website shares the same database as the admin portal
- Only published announcements are displayed
- Falls back to sample data if database is unavailable
