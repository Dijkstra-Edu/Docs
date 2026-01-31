---
title: Projects and Architecture
description: Overview of major projects and the system architecture.
---

Dijkstra is layed out as an intricate system of microservices, built with various languages and frameworks, each handling a specific functionality within the Dijkstra ecosystem, and serving another purpose as an avenue for students to develop their skills within the Dijkstra ecosystem.

![Dijkstra Overview](/public/images/introduction/dijkstra.png)

Here is a brief overview of the services, the languages and their functionality:

## DIjkstra Web

**Type:** Frontend \
**Languages & Technologies:** TypeScript, Next.Js, ShadCN, TanStack Query \
**Repository:** [Dijkstra-Edu/Dijkstra-Web](https://github.com/Dijkstra-Edu/Dijkstra-Web)

Dijkstra Web is Dijkstra's main platform, functioning as the main dashboard for students to track their progress, manage their profiles and to learn and develop their skills. It includes many sub sections that cater to various other needs of students:

- A Dashboard for tracking student progress, resumes, cv's and coding related statistics
- Dijkstra's AI Service - Dijkstra GPT - A context aware gpt that helps students better break down goals, solve problems, and mentor them in the direction they need to go.
- Opportunities - A place for students to browse opportunities that they unlock based on their proven ability.

Dijkstra Web primarily relays data with Dataforge, and also with other services, including Gitripper, Archivist and Dijkstra Blog, as well as with Helios.

## Dataforge

**Type:** Backend Service \
**Languages & Technologies:** Python, FastAPI \
**Repository:** [Dijkstra-Edu/Dataforge](https://github.com/Dijkstra-Edu/Dataforge)

Dataforge is Dijkstra's primary backend service, built to cater towards student profile management, as well as being a simple point of contact for all student management mechanics within Dijkstra. This includes services like the certificate generator, profile storage, resume and cv management. Dataforge also acts as a bridge with Dijkstra's enterprise company and university dashboards, offering prospective companies, and partner univerisites a better glimpse into the abilities of students at Dijkstra.


## Gitripper

**Type:** Backend Service \
**Languages & Technologies:** Python, FastAPI \
**Repository:** [Dijkstra-Edu/Gitripper](https://github.com/Dijkstra-Edu/Gitripper)

GitRipper is a backend service that synchronises and aggregates GitHub commit statistics for users of the Dijkstra platform. It combines real‑time webhook ingestion with scheduled bulk synchronisation to ensure a complete and reliable view of a student’s contribution history.

As a core component of the Dijkstra ecosystem, GitRipper powers two key capabilities:

* **Student progress tracking** – giving learners clear, quantitative feedback on their open‑source engagement.
* **Employer visibility** – enabling recruiters to evaluate a student’s contribution footprint across repositories, organisations, and projects.


## Dijkstra Blog

**Type:** Frontend \
**Languages & Technologies:** JavaScript, Astro \
**Repository:** [Dijkstra-Edu/Dijkstra-Blog](https://github.com/Dijkstra-Edu/Blog)

Dijkstra's Blog site was built to showcase the findings and learnings of students, from solutions to data structures and algorithms problems, to understanding system design principles through built projects: Dijkstra Blog serves as a place for all to learn from each other's experiences during the course of learning how to code.


## Archivist

**Type:** Backend Service \
**Languages & Technologies:** Go, Gin \
**Repository:** [Dijkstra-Edu/Archivist](https://github.com/Dijkstra-Edu/Archivist)

Archivist serves as the backend service for Dijkstra Blog, as well as the service for maintaining the post and feed system for Dijkstra Web.


## Dijkstra Landing Page

**Type:** Frontend \
**Languages & Technologies:** Python, FastAPI \
**Repository:** [Dijkstra-Edu/Dijkstra-Landing-Page](https://github.com/Dijkstra-Edu/Dijkstra-Landing-Page)

This is the landing page for Dijkstra.


## Docs

**Type:** Frontend \
**Languages & Technologies:** Astro, JavaScript \
**Repository:** [Dijkstra-Edu/Docs](https://github.com/Dijkstra-Edu/Docs)

This is the documentation page for Dijkstra. You're using it right now!


> Note: The following projects are flagged to be a part of Dijkstra's enterprise program, and are currently under discussion for it being closed source / source available / or even Open Source.


## Helios

**Type:** Backend Service \
**Languages & Technologies:** Rust, Axum \
**Repository:** Currently Closed Source

Helios is Dijkstra's Ranking Service. Currently closed source.


## Dijkstra Company Dashboard

**Type:** Frontend \
**Languages & Technologies:** TypeScript, Next.Js, ShadCN \
**Repository:** [Dijkstra-Edu/Dijkstra-Company-Dashboard](https://github.com/Dijkstra-Edu/Dijkstra-Company-Dashboard)

Dijkstra's Comapny Dashboard is the portal used by partner companies to monitor and look out for prosepctive students that may suit their requirements, based on their work through Open source mediums.


## Dijkstra University Dashboard

**Type:** Frontend \
**Languages & Technologies:** TypeScript, Next.Js, ShadCN \
**Repository:** [Dijkstra-Edu/Dijkstra-Univeristy-Dashboard](https://github.com/Dijkstra-Edu/Dijkstra-University-Dashboard)

Dijkstra's University Dashboard is the portal used by partner institutions to monitor and track progress of their students, as well as to help with placement related activities.