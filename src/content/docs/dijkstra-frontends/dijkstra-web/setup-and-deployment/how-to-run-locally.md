---
title: How to Run Locally
description: Complete guide to setting up and running Dijkstra Web on your local machine
---

This guide will walk you through setting up the Dijkstra Web platform on your local development environment.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

- **Node.js** - Version 18.14.2 or higher
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`

- **npm** - Version 9.0.0 or higher (comes with Node.js)
  - Verify installation: `npm --version`
  - Alternatively, you can use **yarn**, **pnpm**, or **bun**

- **Git** - For cloning the repository
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

- **GitHub Account** - Required for OAuth authentication
  - Create one at [github.com](https://github.com/)

### Recommended Software

- **VS Code** - Recommended code editor
  - Download from [code.visualstudio.com](https://code.visualstudio.com/)
  - Recommended extensions: ESLint, Prettier, Tailwind CSS IntelliSense

- **PostgreSQL** (Optional) - If you want to use a local database
  - Otherwise, you can use a cloud database service

## Quick Start

### Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/Dijkstra-Edu/Dijkstra-Web.git
cd Dijkstra-Web
```

### Step 2: Install Dependencies

Choose your preferred package manager and run the appropriate command:

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install

# Or using bun
bun install
```

This will install all required dependencies listed in `package.json`.

### Step 3: Environment Configuration

Create a `.env.local` file in the root directory of the project:

```bash
touch .env.local
```

Add the following environment variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# GitHub OAuth (Required for authentication)
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Database Configuration (if using PostgreSQL)
DATABASE_URL=postgresql://username:password@localhost:5432/dijkstra

# Optional: Other OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Optional: API Keys for external services
LEETCODE_API_KEY=your-leetcode-api-key
CODEFORCES_API_KEY=your-codeforces-api-key
```

**Note:** The environment configuration is currently under review. Some values may change based on the finalized setup.

## GitHub OAuth Setup

To enable authentication, you need to create a GitHub OAuth application:

### Step 1: Create GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **"New OAuth App"**
3. Fill in the application details:
   - **Application name:** `Dijkstra Local Dev`
   - **Homepage URL:** `http://localhost:3000`
   - **Authorization callback URL:** `http://localhost:3000/api/auth/callback/github`
4. Click **"Register application"**

### Step 2: Get Client Credentials

After creating the app:

1. Copy the **Client ID**
2. Click **"Generate a new client secret"**
3. Copy the **Client Secret** immediately (you won't be able to see it again)

### Step 3: Update Environment Variables

Add the credentials to your `.env.local` file:

```env
GITHUB_CLIENT_ID=your-actual-client-id
GITHUB_CLIENT_SECRET=your-actual-client-secret
```

## Database Setup (Optional)

If you're using a local PostgreSQL database:

### Install PostgreSQL

```bash
# On macOS using Homebrew
brew install postgresql

# On Ubuntu/Debian
sudo apt-get install postgresql

# On Windows
# Download installer from postgresql.org
```

### Create Database

```bash
# Start PostgreSQL service
# macOS
brew services start postgresql

# Linux
sudo service postgresql start

# Create database
createdb dijkstra

# Or using psql
psql postgres
CREATE DATABASE dijkstra;
\q
```

### Run Migrations

```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed the database (if seed file exists)
npx prisma db seed
```

## Running the Development Server

Start the development server:

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev

# Or using pnpm
pnpm dev

# Or using bun
bun dev
```

The server will start on **http://localhost:3000**.

You should see output similar to:

```
- Local:        http://localhost:3000
- Network:      http://192.168.1.x:3000
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

## Accessing the Application

Open your web browser and navigate to:

```
http://localhost:3000
```

You should see the Dijkstra Web platform homepage.

## Available Routes

Once running, you can access:

- **Homepage** - `http://localhost:3000/`
- **Login** - `http://localhost:3000/login`
- **Dashboard** - `http://localhost:3000/dashboard` (after login)
- **Profile** - `http://localhost:3000/profile` (after login)
- **API Documentation** - `http://localhost:3000/api/docs` (if available)

## Development Workflow

### File Structure

```
Dijkstra-Web/
├── app/                  # Next.js app directory (routes, layouts)
├── components/           # Reusable React components
├── constants/            # Constants and configuration
├── data/                 # Static data files
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and libraries
├── public/               # Static assets (images, fonts)
├── server/               # Server-side code
├── services/             # API service integrations
├── styles/               # Global styles and CSS
├── types/                # TypeScript type definitions
├── .env.local            # Environment variables (not in git)
├── .gitignore            # Git ignore rules
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── next.config.ts        # Next.js configuration
```

### Making Changes

1. **Edit files** - Make your changes in the appropriate directory
2. **Hot reload** - The server will automatically reload on file changes
3. **Check console** - Monitor terminal for errors and warnings
4. **Test locally** - Verify your changes work as expected

### Linting and Formatting

Run linting to check code quality:

```bash
# Run ESLint
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier (if configured)
npm run format
```

## Common Issues & Troubleshooting

### Issue: Port 3000 Already in Use

**Solution:** Kill the process or use a different port

```bash
# Kill process on port 3000
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
PORT=3001 npm run dev
```

### Issue: Module Not Found Errors

**Solution:** Reinstall dependencies

```bash
# Remove node_modules and package-lock
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Database Connection Errors

**Solution:** Check database configuration

```bash
# Verify PostgreSQL is running
# macOS
brew services list

# Linux
sudo service postgresql status

# Test connection
psql -U username -d dijkstra
```

### Issue: Authentication Not Working

**Solution:** Verify environment variables

```bash
# Check .env.local file exists
ls -la .env.local

# Verify NEXTAUTH_SECRET is set
echo $NEXTAUTH_SECRET

# Regenerate secret if needed
openssl rand -base64 32
```

### Issue: TypeScript Errors

**Solution:** Rebuild TypeScript

```bash
# Remove TypeScript cache
rm -rf .next

# Rebuild
npm run build
```

## Stopping the Server

To stop the development server:

1. Return to the terminal where the server is running
2. Press **Ctrl + C** (or **Cmd + C** on macOS)
3. Confirm if prompted

## Next Steps

Now that you have Dijkstra running locally:

1. **Explore the codebase** - Familiarize yourself with the project structure
2. **Check existing issues** - Look for issues you can work on at [GitHub Issues](https://github.com/Dijkstra-Edu/Dijkstra-Web/issues)
3. **Read contributing guidelines** - Learn how to contribute effectively
4. **Join the community** - Connect on [Discord](https://discord.com/invite/Ct82yF3KAU)
5. **Start coding** - Pick a feature or bug to work on

## Additional Resources

- **Next.js Documentation** - [nextjs.org/docs](https://nextjs.org/docs)
- **TypeScript Documentation** - [typescriptlang.org/docs](https://www.typescriptlang.org/docs/)
- **Tailwind CSS Documentation** - [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Prisma Documentation** - [prisma.io/docs](https://www.prisma.io/docs)

## Need Help?

If you encounter issues not covered in this guide:

- **Check GitHub Issues** - Someone may have already reported it
- **Ask on Discord** - Get help from the community
- **Create an Issue** - Report bugs or request features

---

*Happy coding! 🚀*