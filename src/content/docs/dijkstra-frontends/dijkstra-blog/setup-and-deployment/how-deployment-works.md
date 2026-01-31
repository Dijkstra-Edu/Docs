---
title: How Deployment Works
description: Overview of how the Dijkstra Blog is built, deployed, and made available to users.
---

## Overview

The Dijkstra Blog is deployed as a **static, content-driven website**. The deployment process is designed to be simple, reliable, and optimized for fast content delivery.

The system focuses on:
- Fast load times
- Easy content updates
- Minimal backend complexity
- Stable public access

---

## Deployment Architecture

The deployment flow follows a straightforward pipeline:

**Content → Build → Static Output → Hosting**

1. **Content Creation**  
   Blog posts are written in Markdown and stored within the repository.

2. **Build Process**  
   When changes are pushed to the repository, the project is built using the Astro framework.  
   During the build:
   - Markdown content is converted into static HTML
   - Pages are structured and optimized
   - Assets are bundled and prepared for delivery

3. **Static Output Generation**  
   The build produces a static site, meaning:
   - No server-side rendering is required at runtime
   - Pages are pre-generated
   - Performance is consistent and predictable

4. **Hosting**  
   The generated site is deployed to the hosting platform and made available at:

   👉 **https://blog.dijkstra.org.in**

---

## Why Static Deployment?

The Dijkstra Blog uses static deployment because:

- It improves **performance** (no runtime server processing)
- It increases **security** (no backend logic exposed)
- It simplifies **infrastructure management**
- It makes scaling easier
- It reduces the chances of runtime failures

Since the blog mainly delivers content, a static approach is efficient and reliable.

---

## How Updates Reach the Live Site

Whenever a contributor adds or updates a blog:

1. Changes are pushed to the repository  
2. The deployment pipeline triggers automatically  
3. The site is rebuilt  
4. The updated static version replaces the old one  
5. Changes become visible on the live blog

This ensures the blog stays up to date without manual server management.

---

## Responsibilities During Deployment

| Role | Responsibility |
|------|----------------|
| **Contributors** | Add and update blog content |
| **Maintainers** | Review changes and manage repository structure |
| **Deployment System** | Build and publish the updated site automatically |

---

## Key Takeaway

Deployment for the Dijkstra Blog is designed to stay in the background. Contributors focus on writing and improving content, while the build and hosting process ensures that the blog remains fast, secure, and consistently available.
