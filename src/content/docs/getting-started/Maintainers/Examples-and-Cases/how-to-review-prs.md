---
title: How to Review PRs
description: Example workflow for maintainers reviewing pull requests.
---

# How to Review Pull Requests (PRs)

In the Dijkstra-Edu community, PR reviews are more than just a quality check—they are a **teaching tool**. Our goal is to help contributors improve their skills while ensuring the codebase remains healthy.

---

## 1. Initial Triage
Before diving into the code, check the administrative side of the PR:
- **Linked Issue**: Does the PR link to an existing issue? If not, ask the author to create or link one.
- **Scope**: Is the PR focused on one task? If it's too large, suggest breaking it down.
- **CI Status**: Are there failing tests or linting errors? If so, point them out and wait for the author to fix them before doing a deep dive.

---

## 2. Review Checklist

### Code Quality & Standards
- **Readability**: Can someone else understand this code without a comment?
- **Naming**: Are variables and functions named descriptively?
- **DRY (Don't Repeat Yourself)**: Is there duplicated logic that should be abstracted?
- **Style**: Does it follow the project's formatting rules (e.g., Prettier/ESLint configs)?

### Functionality & Tests
- **The "Does it work?" Test**: Try to run the changes locally if possible.
- **Edge Cases**: What happens with empty inputs, null values, or unexpected data?
- **Test Coverage**: Are new features accompanied by tests? Do they test both success and failure states?

### Documentation
- **Updates**: Does this change require updates to other documentation files?
- **Comments**: Are complex logic blocks explained clearly? (Avoid over-commenting obvious code).

---

## 3. Communication Strategy

### Use "Suggest Changes"
GitHub's **Suggested Changes** feature is your best friend. For minor fixes (typos, formatting, small logic tweaks), provide the fix directly in the comment. This saves the contributor time and shows exactly what you mean.

### Be Constructive & Kind
- **Good**: "I suggest renaming this variable to `isActive` for better clarity. What do you think?"
- **Bad**: "Rename this variable."
- **Why?**: "Consider using a `map()` here instead of a `forEach()` because it allows you to return a new array more cleanly."

---

## 4. The Decision

### Request Changes
If there are significant issues or the code doesn't meet project standards, use the **Request Changes** option. Be clear about what needs to happen to get an approval.

### Approve
Once you're satisfied, leave a positive comment (e.g., "Great work!", "LGTM!") and approve.

### Merge
- **Squash and Merge**: Our default for keeping history clean. Ensure the commit message is descriptive.
- **Delete Branch**: Always delete the branch after merging to keep the repository tidy.

---
