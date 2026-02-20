# Infragate Solutions - Corporate Website

Professional corporate website for Infragate Solutions Ltd, a premier UK-based software engineering firm specializing in government systems, enterprise architecture, and smart applications.

**Company Registration:** England & Wales, No. 14805395

## Features

- Modern, responsive design with professional UI/UX
- Integrated AI-powered chat consultant using Google Gemini
- Secure contact form with Supabase database integration
- Full RLS (Row Level Security) implementation
- Optimized build with code splitting for better performance
- Accessible design following best practices

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **AI Integration:** Google Gemini API
- **Icons:** Lucide React
- **Deployment:** Cloudflare Workers (via Wrangler)

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account (for database)
- Google Gemini API key (optional, for AI chat)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env`:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `VITE_API_KEY`: Your Google Gemini API key (optional)

## Database Setup

The database schema is already created with proper RLS policies. The `contact_submissions` table includes:
- Secure storage for contact form submissions
- Row Level Security enabled
- Policies for anonymous insertions and authenticated access
- Automated timestamp tracking

## Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

Create a production build:
```bash
npm run build
```

The optimized build will be generated in the `dist` directory with code-split chunks for better performance.

## Deployment

Deploy to Cloudflare Workers:
```bash
npm run deploy
```

## Project Structure

```
.
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── ChatWidget.tsx
│   ├── DigitalBackground.tsx
│   ├── Layout.tsx
│   └── Logo.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── ServicesPage.tsx
│   ├── AboutPage.tsx
│   └── ContactPage.tsx
├── services/           # API and business logic
│   ├── contactService.ts
│   └── geminiService.ts
├── App.tsx            # Main application component
├── index.tsx          # Application entry point
└── types.ts           # TypeScript type definitions
```

## Security

- All environment variables are properly configured
- Supabase RLS policies ensure data security
- No sensitive credentials in source code
- HTTPS enforced in production
- Input validation on all forms

## License

Copyright © 2024 Infragate Solutions Ltd. All rights reserved.

## Contact

For inquiries, please visit our contact page or email: info@infragatesolutions.com
