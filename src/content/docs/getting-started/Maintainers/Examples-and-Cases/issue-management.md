---
title: Issue Management
description: How to manage and triage GitHub issues effectively.
---

# Issue Management Deep-dive

Well-managed issues are the roadmap for our project. They help contributors understand what needs to be done and help maintainers track progress.

---

## 1. The Triage Workflow
When a new issue is opened, follow these steps within 24-48 hours:

1.  **Read and Understand**: Is the issue clear?
    - If it's a **bug**, does it have reproduction steps?
    - If it's a **feature request**, is the use case clear?
2.  **Verify**: Try to reproduce bugs locally. If you can't, ask the author for more details (OS, version, logs).
3.  **Label**: Apply the appropriate labels (see below).
4.  **Acknowledge**: Leave a comment thanking the author. If it's a valid issue, mention that it's open for contributions if you aren't planning to fix it immediately.

---

## 2. Our Labeling Strategy

We use labels to categorize work by **Type**, **Priority**, and **Complexity**.

### Type Labels
- `type: bug` – Something is broken.
- `type: feature` – A request for new functionality.
- `type: refactor` – Improving code internal structure without changing behavior.
- `type: docs` – Documentation-only changes.

### Priority Labels
- `priority: high` – Critical bugs or blocked features. Needs immediate attention.
- `priority: medium` – Normal backlog items.
- `priority: low` – "Nice to have" or minor visual tweaks.

### Educational/Complexity Labels (Crucial!)
- `complexity: beginner` – Small tasks, perfect for someone's first contribution.
- `complexity: intermediate` – Requires understanding of multiple files or logic blocks.
- `complexity: advanced` – Significant architectural changes or complex logic.
- `good first issue` – Reserved for `beginner` tasks that are very well-defined.

---

## 3. Managing the Backlog

### Stale Issues
- If an issue has no activity for 30 days, tag the assignee or the original author to ask for an update.
- If there is still no response after another 14 days, close the issue with a polite message: *"Closing due to inactivity. Feel free to reopen if you'd like to continue working on this!"*

### Closing Issues
- **Fixed**: Close only after the PR is merged.
- **Duplicate**: Link to the original issue and close immediately.
- **Won't Fix**: If the request goes against the project's goals, explain *why* clearly and respectfully before closing.

---

## 4. Issue Templates
We use templates to ensure we get the right information from the start.
- **Bug Report Template**: Should include Expected vs. Actual behavior, Reproduction steps, and Environment info.
- **Feature Request Template**: Should focus on the "Why" (problem statement) and the "What" (proposed solution).

---

*“A clear issue is 50% of the work done.”*