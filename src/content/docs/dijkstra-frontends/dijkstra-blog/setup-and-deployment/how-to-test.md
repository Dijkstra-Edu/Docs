---
title: How to Test
description: Guidelines for testing blog content, formatting, and site behavior before publishing.
---

## Overview

Testing ensures that blog posts and site changes are accurate, readable, and function correctly before going live.  
Even though the Dijkstra Blog focuses mainly on content, quality checks are important to maintain a professional and consistent platform.

---

## What Should Be Tested

Contributors should verify:

- Content formatting  
- Markdown rendering  
- Links and navigation  
- Images and media  
- Layout consistency  
- Build success  

---

## 1. Content & Formatting Check

Before publishing a blog post:

- Ensure headings follow a proper hierarchy (`#`, `##`, `###`)
- Check spacing between paragraphs and sections
- Verify code blocks render correctly
- Confirm lists and bullet points display properly
- Avoid overly long paragraphs for readability

---

## 2. Markdown Rendering

Run the project locally:

```bash
npm run dev
```

Then review the blog page to ensure:

- Markdown converts correctly to styled content
- Tables, quotes, and code blocks are displayed properly
- Special characters are not broken

---

## 3. Link Testing

Check that:

- Internal links navigate to the correct pages
- External links open correctly
- No broken or outdated URLs exist

Broken links reduce trust and affect usability.

---

## 4. Image & Media Check

Ensure:

- Images load correctly
- Image paths are correct
- Files are optimized (not unnecessarily large)
- Alt text is provided for accessibility

---

## 5. Layout & Responsiveness

Resize your browser or use dev tools to confirm:

- Content looks good on desktop
- Content remains readable on mobile screens
- No layout breaks occur with long titles or code blocks

---

## 6. Build Test (Very Important)

Before submitting changes, verify that the project builds successfully:

```bash
npm run build
```

If the build fails, there may be:

- Syntax errors in Markdown
- Missing files
- Broken imports

Fix these before pushing changes.

---

## 7. Preview Production Version

To preview the final version:

```bash
npm run preview
```

This simulates how the blog will look after deployment.

---

## Common Mistakes to Avoid

- Missing frontmatter in blog files
- Incorrect file paths for images
- Unclosed Markdown code blocks
- Using unsupported HTML tags
- Large unoptimized images slowing down the page

---

## Key Takeaway

Testing is not just for developers — it ensures readers have a smooth and professional experience.  
A few minutes of testing prevents broken posts and keeps the Dijkstra Blog reliable and high quality.
