---
title: Establish PostgreSQL DB for DataForge
description: Steps to include dev DB for DataForge
---

# Setting Up a Supabase Project and Migrating a Provided SQL Dump

This guide will help you create a new Supabase Postgres project, set up `psql` on your machine, and migrate a provided SQL dump into your database.

---

## Prerequisites

1. **Supabase account**: [Sign up here](https://supabase.com/).
2. **Basic terminal knowledge** (Command Prompt, PowerShell, or macOS/Linux terminal).
3. **Provided SQL dump**: You should have a file named `supabase_dump.sql` ready for migration.

---

## Step 1: Install `psql` (PostgreSQL CLI)

`psql` is required to interact with your Postgres database.

### macOS

```bash
brew install postgresql
```

### Linux (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install postgresql-client
```

### Windows

1. Download PostgreSQL from [here](https://www.postgresql.org/download/windows/).
2. During installation, make sure to include **Command Line Tools**.
3. After installation, open Command Prompt or PowerShell and verify:

```cmd
psql --version
```

---

## Step 2: Create a New Supabase Project

1. Log in to the [Supabase dashboard](https://app.supabase.com/).
2. Click **New Project**.
3. Fill in the required details:
   - **Project Name**
   - **Organization**
   - **Database Password** (remember this, you’ll need it later)
   - **Region**
4. Click **Create new project**.
5. Wait a few minutes until the project is initialized.

---

## Step 3: Get Your Supabase Database Connection String

1. Go to your project dashboard → **Settings → Database → Connection Info**
2. Copy the connection string. It looks like this:

```text
postgres://USER:PASSWORD@HOST:PORT/DATABASE
```

> Ensure it includes `sslmode=require`. If not, append it manually:\
> `?sslmode=require`

---

## Step 4: Place the SQL Dump File

Save the provided SQL dump (`supabase_dump.sql`) in a folder you can easily access, e.g., `~/Downloads` or `C:\Users\YourName\Downloads`.

---

## Step 5: Migrate the SQL Dump to Your Supabase Database

Open your terminal and run:

```bash
psql "postgres://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require" -f /path/to/supabase_dump.sql
```

### Example

macOS/Linux:

```bash
psql "postgres://postgres:mysecretpassword@db.supabase.co:5432/postgres?sslmode=require" -f ~/Downloads/supabase_dump.sql
```

Windows:

```cmd
psql "postgres://postgres:mysecretpassword@db.supabase.co:5432/postgres?sslmode=require" -f "C:\Users\YourName\Downloads\supabase_dump.sql"
```

- Replace `USER`, `PASSWORD`, `HOST`, `PORT`, `DATABASE` with your Supabase connection info.
- Replace the path with where your SQL dump is saved.

---

## Step 6: Verify the Migration

1. Go to **Supabase Dashboard → Table Editor**
2. Check that all tables and data from the SQL dump are present.

---

## Troubleshooting

- **SSL issues:** Ensure `?sslmode=require` is appended to the connection string.
- **Existing tables:** If the restore fails due to existing tables, drop them first or request a dump created with the `--clean` flag.

---

Congratulations! Your new Supabase Postgres project is now set up and populated with the provided SQL dump.

