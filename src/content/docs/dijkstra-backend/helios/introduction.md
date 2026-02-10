---

title: "Introduction to Helios"
description: "Learn the basics of Helios in the Dijkstra Backend."
------------------------------------------------------------------

# Introduction to Helios

**Helios** is Dijkstra’s student grading and ranking engine. It aggregates verified signals from **DataForge** and **GitRipper** and converts them into a single, interpretable score that places students into tiers:

* Bronze
* Silver
* Gold
* Platinum
* Diamond

Helios is designed to be **objective, explainable, and scalable** — combining deterministic scoring with room for future ML‑driven enrichment.

---

## How Does It Work?

On every update to a user’s profile, **DataForge** and **GitRipper** publish Kafka events containing the full metrics snapshot:

* **From GitRipper**: project and repository statistics (stars, LOC, complexity, activity)
* **From DataForge**: work experience, DSA stats, and CGPA

Helios consumes these events, persists them, and computes a **unified XP score** that drives tiering and ranking.