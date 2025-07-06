# Aurix Project Setup Guide

## 🚀 Project Overview
**Project Name:** Aurix  
**Description:** Digital Portfolio Platform  
**Tech Stack:** Next.js 14, TypeScript, TailwindCSS, Supabase

## 📁 GitHub Repository Setup

### Repository Details
- **Repository Name:** `aurix`
- **Visibility:** Public
- **Description:** "Aurix - Digital Portfolio Platform"

### GitHub Connection Steps
1. **Create GitHub Repository:**
   - Go to [GitHub](https://github.com) and create a new repository named `aurix`
   - Make it public with the description "Aurix - Digital Portfolio Platform"
   - Do NOT initialize with README (we already have files)

2. **Connect Local Repository:**
   ```bash
   # Replace YOUR_USERNAME with your actual GitHub username
   git remote set-url origin https://github.com/YOUR_USERNAME/aurix.git
   
   # Push the initial commit
   git push -u origin master
   ```

## 🗄️ Supabase Project Setup

### Project Details
- **Project Name:** AURIX
- **Project ID:** `azdejrutqthkgacaipvw`
- **Region:** ap-southeast-1
- **Status:** ✅ ACTIVE_HEALTHY
- **Cost:** $0/month (Free tier)

### Supabase Connection Details
- **Project URL:** `https://azdejrutqthkgacaipvw.supabase.co`
- **Anon Key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6ZGVqcnV0cXRoa2dhY2FpcHZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4MTA4MTYsImV4cCI6MjA2NzM4NjgxNn0.WMSJ5karNyRqf1W-bRW-U3zi-z_fJSFMIdR_eKTtpoE`
- **Database Host:** `db.azdejrutqthkgacaipvw.supabase.co`

### Environment Variables Setup
Create a `.env.local` file in your project root with:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://azdejrutqthkgacaipvw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6ZGVqcnV0cXRoa2dhY2FpcHZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4MTA4MTYsImV4cCI6MjA2NzM4NjgxNn0.WMSJ5karNyRqf1W-bRW-U3zi-z_fJSFMIdR_eKTtpoE

# You'll need to get these from Supabase Dashboard
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.azdejrutqthkgacaipvw.supabase.co:5432/postgres

# Google OAuth (Optional - configure later)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Database Schema Setup
1. **Access Supabase Dashboard:**
   - Go to [Supabase Dashboard](https://supabase.com/dashboard)
   - Open your AURIX project
   - Navigate to "SQL Editor"

2. **Run the Database Schema:**
   - Copy the contents of `supabase/schema.sql`
   - Paste and execute in the SQL Editor
   - This will create all necessary tables and RLS policies

3. **Enable Authentication:**
   - Go to "Authentication" > "Settings"
   - Enable Email/Password authentication
   - Configure Google OAuth (optional):
     - Go to "Authentication" > "Providers"
     - Enable Google provider
     - Add your Google OAuth credentials

## 🔐 Authentication Setup

### Email/Password Authentication
✅ **Status:** Enabled by default

### Google OAuth Setup (Optional)
1. **Create Google OAuth App:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `https://azdejrutqthkgacaipvw.supabase.co/auth/v1/callback`

2. **Configure in Supabase:**
   - Add Client ID and Client Secret in Supabase Auth settings
   - Update your `.env.local` with the credentials

## 🚀 Development Setup

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Run Development Server
```bash
npm run dev
# or
yarn dev
```

### Access the Application
- **Local Development:** http://localhost:3000
- **Design System:** http://localhost:3000/design-system

## ✅ Setup Checklist

### GitHub Setup
- [ ] Create GitHub repository named `aurix`
- [ ] Connect local repository to GitHub remote
- [ ] Push initial commit to GitHub
- [ ] Verify repository is accessible

### Supabase Setup
- [ ] ✅ Supabase project "AURIX" created and active
- [ ] Get Service Role Key from Supabase Dashboard
- [ ] Create `.env.local` file with credentials
- [ ] Run database schema in Supabase SQL Editor
- [ ] ✅ Enable Email/Password authentication
- [ ] Configure Google OAuth (optional)
- [ ] Test database connection

### Application Setup
- [ ] Install project dependencies
- [ ] Start development server
- [ ] Verify authentication works
- [ ] Test profile creation and management
- [ ] Check design system at `/design-system`

## 🔧 Additional Configuration

### Get Missing Credentials
1. **Service Role Key:**
   - Supabase Dashboard > Settings > API
   - Copy the `service_role` key (keep it secret!)

2. **Database Password:**
   - Supabase Dashboard > Settings > Database
   - Use the password you set during project creation

### Verify Connection
Test the Supabase connection by running:
```bash
npm run dev
```
Then visit the sign-up page and try creating an account.

## 📚 Next Steps
1. Complete the setup checklist above
2. Test user registration and authentication
3. Create your first profile
4. Explore the design system
5. Start building custom features

## 🆘 Troubleshooting
- **Authentication Issues:** Check environment variables and Supabase auth settings
- **Database Errors:** Verify schema was applied correctly and RLS policies are active
- **Build Errors:** Ensure all dependencies are installed and environment variables are set

---
**Note:** Keep your Service Role Key and database credentials secure. Never commit them to version control. 