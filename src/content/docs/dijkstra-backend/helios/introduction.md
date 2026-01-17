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

---

## Scoring Dimensions & Weights

| Dimension         | Weight | What It Captures                         |
| ----------------- | ------ | ---------------------------------------- |
| Work Experience   | 40%    | Industry relevance and seniority         |
| Projects (GitHub) | 15%    | Open‑source impact and engineering depth |
| DSA (LeetCode)    | 25%    | Algorithmic and problem‑solving strength |
| CGPA              | 20%    | Academic consistency                     |

### 1. Work Experience (40%)

* Salary (20%)
* Company Tier (50%)
* Time Served (Months) (30%)
* Complexity (future: ML‑derived impact score)

### 2. Projects / GitHub (15%)

* Project / Repository Tier (Stars) (40%)
* Complexity Score (20%)
* Lines of Code (per 100, excluding README & dependencies) (40%)

### 3. DSA – LeetCode (25%)

* Contest Rating (70%)
* Global Rank (30%, logarithmic decay)

### 4. CGPA (20%)

* Normalised academic performance

---

## How the Ranking Is Implemented (High Level)

Helios converts raw metrics into a **single XP score between 0 and 10,000**, which is then mapped to tiers.

1. **Each dimension is scored independently (0–1000)**

   * Work Experience → `calculate_professional_xp`
   * Projects → `calculate_xp_for_projects`
   * DSA → `calculate_xp_for_leetcode_stats`
   * CGPA → `calculate_xp_for_cgpa`

2. **Each dimension is weighted and combined**

   ```text
   Final XP = 4.0 × WorkXP
           + 1.5 × ProjectXP
           + 2.5 × DsaXP
           + 2.0 × CgpaXP
   ```

   This yields a final score between **0 and 10,000**.

3. **Scores are normalised using scaling functions**

   * **Linear scaling** for bounded values (CGPA, company tier, complexity)
   * **Rational scaling** for unbounded values (salary, LOC, months served)
   * **Logarithmic decay** for LeetCode global rank (lower rank → higher score)

4. **Multiple entries are consolidated**
   When a user has multiple jobs or projects, Helios:

   * Scores each entry individually
   * Passes them through a sigmoid
   * Averages them into a smooth 0–1000 score (`consolidated_score`)

5. **Tier Assignment**
   The final XP determines the student’s tier (Bronze → Diamond), which is used across Dijkstra for grading, recommendations, and employer visibility.

## Tech Stack

* **Language**: Rust
* **Server**: Axum
* **Database**: PostgreSQL
* **Messaging**: Kafka
