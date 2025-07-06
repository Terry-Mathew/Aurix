# DebutHub

A digital portfolio editor and networking tool that allows users to create unified digital identities showcasing personal and professional information through customizable, shareable profiles.

## Features

- **No-code profile builder** - Create profiles without technical knowledge
- **Privacy-first** - Profiles are private by default, you control visibility
- **Easy sharing** - Share via unique slug URLs and QR codes
- **Analytics tracking** - Track profile views and visitor engagement
- **Multiple content types** - Support for work, projects, writing, media, and more
- **Responsive design** - Works on all devices

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, TailwindCSS
- **Backend**: Supabase (Auth, Database, Storage)
- **UI Components**: shadcn/ui, Radix UI
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (via Supabase)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd debuthub
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Configure your Supabase credentials in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Set up your Supabase database:
   - Create tables for profiles, profile_sections, media_files, and analytics_views
   - Set up Row Level Security (RLS) policies
   - Configure authentication providers

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses the following main tables:

- `profiles` - User profile information
- `profile_sections` - Individual sections within profiles
- `media_files` - Uploaded images and media
- `analytics_views` - Profile view tracking

## Project Structure

```
debuthub/
├── app/                    # Next.js app router
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Protected dashboard
│   ├── [slug]/           # Dynamic profile pages
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── auth/             # Authentication components
│   ├── layout/           # Layout components
│   └── landing/          # Landing page components
├── lib/                  # Utilities and configuration
│   ├── supabase.ts       # Supabase client
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License. 