---
title: How to Recreate Dijkstra Web
description: Step-by-step guide to recreate the Dijkstra Web platform from scratch for local development
---
This guide provides clear steps to recreate the Dijkstra Web platform from scratch on your local machine. Follow these steps in order for a smooth setup.

## Overview

Dijkstra Web is built with:
- **Next.js 15** - React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - UI component library
- **NextAuth.js** - Authentication
- **Prisma + PostgreSQL** - Database

## Prerequisites

Before starting, make sure you have:
- Node.js (v18.14.2 or higher)
- npm (v9.0.0 or higher)
- PostgreSQL installed
- Git installed
- A code editor (VS Code recommended)
- GitHub account

## Step-by-Step Guide

### Step 1: Create Next.js Project

```bash
npx create-next-app@latest dijkstra-web --typescript --tailwind --app --import-alias="@/*"
cd dijkstra-web
```

When prompted, select:
- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ App Router
- ✅ Import alias (@/*)

### Step 2: Install Required Dependencies

```bash
# Authentication and Database
npm install next-auth@latest @prisma/client @auth/prisma-adapter

# UI Components
npm install lucide-react class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-slot

# Forms and Validation
npm install react-hook-form zod @hookform/resolvers

# Development Dependencies
npm install -D prisma @types/node
```

### Step 3: Setup shadcn/ui

```bash
# Initialize shadcn/ui
npx shadcn-ui@latest init

# Add essential components
npx shadcn-ui@latest add button card input label dropdown-menu avatar dialog toast form
```

Follow prompts and select defaults.

### Step 4: Setup Database

```bash
# Initialize Prisma
npx prisma init

# This creates:
# - prisma/schema.prisma
# - .env file
```

Update `DATABASE_URL` in `.env` file with your PostgreSQL connection string.

### Step 5: Configure Prisma Schema

Open `prisma/schema.prisma` and replace with the complete schema for users, accounts, sessions, and verification tokens (refer to NextAuth.js Prisma adapter documentation for the schema).

### Step 6: Run Database Migrations

```bash
# Generate Prisma Client
npx prisma generate

# Create database tables
npx prisma migrate dev --name init

# Open Prisma Studio to view database
npx prisma studio
```

### Step 7: Setup Environment Variables

Create `.env.local` file in the root:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/dijkstra"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-random-secret-key"

# GitHub OAuth
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

To generate `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

### Step 8: Setup GitHub OAuth App

1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Click "New OAuth App"
3. Fill in:
   - **Application name:** Dijkstra Local
   - **Homepage URL:** http://localhost:3000
   - **Callback URL:** http://localhost:3000/api/auth/callback/github
4. Create app and copy Client ID and Client Secret
5. Add them to `.env.local`

### Step 9: Configure NextAuth

Create `lib/auth.ts` and setup NextAuth configuration with GitHub provider and Prisma adapter.

Create `app/api/auth/[...nextauth]/route.ts` for the NextAuth API handler.

### Step 10: Setup Global Styles

Update `app/globals.css` with Tailwind directives and CSS variables for light/dark themes.

### Step 11: Create Root Layout

Update `app/layout.tsx` with:
- Proper metadata
- Session provider wrapper
- Global styles import

### Step 12: Create Session Provider

Create `components/providers.tsx` to wrap app with SessionProvider for client-side session access.

### Step 13: Create Homepage

Update `app/page.tsx` with:
- Welcome message
- Call-to-action buttons
- Navigation to login

### Step 14: Create Login Page

Create `app/login/page.tsx` with:
- Login card
- GitHub OAuth button
- Proper styling

### Step 15: Create Protected Dashboard

Create `app/dashboard/page.tsx` with:
- Server-side session check
- Redirect if not authenticated
- Welcome message with user info

### Step 16: Create Database Client

Create `lib/db.ts` with Prisma client singleton pattern to prevent multiple instances.

### Step 17: Create Utility Functions

Create `lib/utils.ts` with helper functions like `cn()` for class name merging.

### Step 18: Configure TypeScript

Update `tsconfig.json` with proper compiler options and path aliases.

### Step 19: Configure Next.js

Update `next.config.ts` with:
- Image domains for external images
- Any experimental features needed

### Step 20: Add Package Scripts

Update `package.json` scripts:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "postinstall": "prisma generate"
  }
}
```

### Step 21: Start Development Server

```bash
npm run dev
```

Your app should now be running at `http://localhost:3000`

## Verification Steps

After completing all steps:

1. **Check Homepage**
   - Visit http://localhost:3000
   - Should see welcome page

2. **Test Login**
   - Click login button
   - Should redirect to GitHub
   - Authorize and redirect back
   - Should see dashboard

3. **Check Database**
   - Run `npx prisma studio`
   - Should see your user in database

4. **Test Logout**
   - Click logout
   - Should redirect to homepage

## Project Structure

Your final structure should look like:

```
dijkstra-web/
├── app/
│   ├── api/auth/[...nextauth]/
│   ├── dashboard/
│   ├── login/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/           (shadcn components)
│   └── providers.tsx
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   └── utils.ts
├── prisma/
│   └── schema.prisma
├── .env.local
├── .env
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Common Setup Issues

### Issue: Database Connection Failed
**Solution:** Make sure PostgreSQL is running and `DATABASE_URL` is correct

### Issue: OAuth Redirect Error
**Solution:** Verify callback URL in GitHub OAuth app matches exactly

### Issue: Module Not Found
**Solution:** Run `npm install` again and restart dev server

### Issue: Prisma Client Not Generated
**Solution:** Run `npx prisma generate` manually

### Issue: Port Already in Use
**Solution:** Kill process on port 3000 or use different port: `PORT=3001 npm run dev`

## Next Steps

Now that you have the base setup:

1. **Explore the Code:** Understand the file structure
2. **Add Features:** Implement dashboard widgets, profile pages
3. **Style Components:** Customize the UI to your liking
4. **Connect APIs:** Add GitHub stats, LeetCode integration
5. **Test Everything:** Follow the [How to Test](/setup-and-deployment/how-to-test) guide
6. **Start Contributing:** Pick an issue from GitHub and start coding

## Additional Features to Add

After basic setup works:

- User profile management
- GitHub stats integration
- LeetCode stats integration
- Progress tracking charts
- Community features
- Achievement system
- Notification system

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Guide](https://next-auth.js.org/getting-started/introduction)
- [shadcn/ui Components](https://ui.shadcn.com/)

## Getting Help

If you get stuck:

- Re-read the [How to Run Locally](/setup-and-deployment/how-to-run-locally) guide
- Check [GitHub Issues](https://github.com/Dijkstra-Edu/Dijkstra-Web/issues)
- Ask on [Discord](https://discord.com/invite/Ct82yF3KAU)
- Review the official documentation for each technology

---

*Follow these steps carefully, and you'll have Dijkstra Web running locally! 🚀*