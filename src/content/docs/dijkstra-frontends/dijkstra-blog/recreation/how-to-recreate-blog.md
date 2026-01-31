---
title: How to Recreate Blog
description: Step-by-step guide to rebuilding the Dijkstra Blog platform from scratch using Astro.
---

## Overview

This guide explains how to recreate the Dijkstra Blog platform from the ground up.  
The blog is built using **Astro**, focusing on performance, readability, and a content-first structure.

This process is useful if you want to:

- Set up a new instance of the blog
- Understand the project architecture
- Contribute at a deeper technical level

---

## 1. Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or later recommended)
- **npm** or **pnpm**
- **Git**

Check versions:

```bash
node -v
npm -v
git --version
```

---

## 2. Create a New Astro Project

Initialize a fresh Astro project:

```bash
npm create astro@latest
```

Select:

- **Template** → Minimal or Blog template  
- **TypeScript** → Yes (recommended)  
- **Install dependencies** → Yes  

Navigate into the project:

```bash
cd your-project-name
```

---

## 3. Install Required Integrations

Install core tools used in the Dijkstra Blog:

```bash
npm install @astrojs/mdx @astrojs/sitemap @astrojs/tailwind
```

Then add them to `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [mdx(), sitemap(), tailwind()]
});
```

---

## 4. Project Structure

Recreate the folder structure:

```
src/
 ├── components/
 ├── layouts/
 ├── pages/
 ├── content/
 │    └── blog/
 └── styles/
```

- **components/** → Reusable UI elements  
- **layouts/** → Blog post layout templates  
- **pages/** → Static pages  
- **content/blog/** → Markdown blog posts  

---

## 5. Configure Content Collections

Inside `src/content/config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().optional(),
  }),
});

export const collections = { blog };
```

This ensures all blog posts follow the same structure.

---

## 6. Create a Blog Layout

Inside `src/layouts/BlogLayout.astro`:

```astro
---
const { title, description } = Astro.props;
---

<html>
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <main>
      <slot />
    </main>
  </body>
</html>
```

---

## 7. Add a Sample Blog Post

Create `src/content/blog/first-post.md`:

```md
---
title: My First Blog
description: Example post
pubDate: 2024-01-01
---

Welcome to the Dijkstra Blog platform built with Astro.
```

---

## 8. Run the Project

```bash
npm run dev
```

Open the local server URL to verify the blog loads correctly.

---

## 9. Build for Production

```bash
npm run build
```

This generates the optimized static site.

---

## 10. Deploy

You can deploy using:

- Vercel  
- Netlify  
- GitHub Pages  
- Any static hosting provider  

Upload the `dist/` folder generated after build.

---

## Key Takeaway

The Dijkstra Blog architecture is designed to be:

- Fast  
- Simple  
- Markdown-driven  
- Easy to scale  

Recreating it requires only Astro, structured content, and clean component design.
