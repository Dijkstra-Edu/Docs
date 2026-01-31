---
title: How to Run Locally
description: Steps to set up and run the Dijkstra Blog on your local machine for development and testing.
---

## Overview

Running the Dijkstra Blog locally allows contributors to:

- Preview blog posts before publishing  
- Test formatting and layout  
- Make structural or design improvements  
- Ensure content renders correctly  

The blog is built using **Astro**, so the local setup is lightweight and fast.

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or later recommended)
- **npm** (comes with Node.js)  
  or  
- **pnpm / yarn** (optional alternative package managers)

---

## Step 1 — Clone the Repository

```bash
git clone https://github.com/Dijkstra-Edu/Blog.git
cd Blog
```

---

## Step 2 — Install Dependencies

Install all required project packages:

```bash
npm install
```

If using pnpm:

```bash
pnpm install
```

---

## Step 3 — Start the Development Server

Run the local development server:

```bash
npm run dev
```

Astro will start a local server, typically at:

👉 `http://localhost:4321`

Open this URL in your browser to view the blog.

---

## Step 4 — Make Changes

You can now:

- Add or edit Markdown blog files  
- Update layouts or components  
- Modify styles  

The development server supports **hot reload**, meaning changes appear instantly without restarting the server.

---

## Step 5 — Build Locally (Optional)

To verify the production build:

```bash
npm run build
```

To preview the production version locally:

```bash
npm run preview
```

---

## Common Issues

**Port already in use**  
If port 4321 is busy, Astro will suggest another available port.

**Dependencies not installing**  
Try deleting `node_modules` and `package-lock.json`, then run:

```bash
npm install
```

---

## When to Run Locally

You should run the project locally when:

- Writing or editing blog posts  
- Working on layout or UI changes  
- Fixing formatting issues  
- Testing before opening a Pull Request  

---

## Key Takeaway

Local setup ensures contributors can safely test their work before it goes live. It keeps the publishing process smooth while maintaining quality and consistency across the blog.
