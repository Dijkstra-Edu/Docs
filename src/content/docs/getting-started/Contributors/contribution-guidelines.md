---
title: Contribution Guidelines
description: How to contribute effectively to Dijkstra projects.
---

Welcome 👋  
We’re genuinely glad you’re interested in contributing to **Dijkstra**.

Dijkstra is built and maintained by a community of students, educators, and developers. Whether this is your **first open-source contribution** or you’re an experienced engineer, your help is valued.

This document exists to:
- set clear expectations for contributors
- ensure high-quality, maintainable contributions
- reduce review friction and iteration cycles
- help you become an effective long-term contributor

Please read this document carefully before opening an issue or pull request.

---

## Table of Contents
- [What You Can Contribute](#what-you-can-contribute)
- [Before You Start](#before-you-start)
- [Finding & Working on Issues](#finding--working-on-issues)
- [Proposing Changes](#proposing-changes)
- [Development Workflow](#development-workflow)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Commit Message Convention](#commit-message-convention)
- [Testing & Quality Standards](#testing--quality-standards)
- [Documentation Standards](#documentation-standards)
- [Use of AI Tools](#use-of-ai-tools)
- [Code of Conduct & Collaboration](#code-of-conduct--collaboration)
- [Getting Help](#getting-help)

---

## What You Can Contribute

We welcome contributions in many forms:

- 🐛 Bug fixes
- ✨ Feature additions (via issues first)
- 🧹 Refactoring (with justification)
- 🧪 Test additions and improvements
- 📚 Documentation improvements
- 🎨 UI/UX improvements (where applicable)
- ⚙️ Tooling and developer experience improvements

If you’re unsure whether your idea fits—**open an issue and ask**.

---

## Before You Start

Before contributing, please ensure you:

1. Have read this document fully
2. Are familiar with basic Git workflows (fork, branch, PR)
3. Have set up the project locally and verified it runs
4. Understand the purpose of the repository you’re contributing to

If you’re new to open source, we strongly recommend starting with:
- documentation fixes
- small bug fixes
- issues tagged `good first issue` or `help wanted`

---

## Finding & Working on Issues

### Choosing an Issue
- Browse open issues across Dijkstra repositories
- Look for labels like:
  - good first issue
  - help wanted
  - bug
  - documentation
- If an issue is unassigned, comment to claim it before starting work

### Claiming an Issue
Comment something like:
"I’d like to work on this. Please assign it to me."

Avoid working on issues already assigned unless you’ve coordinated with the assignee.

---

## Proposing Changes

### Bug Fixes
If you’ve found a bug:
- Open an issue describing:
  - expected behavior
  - actual behavior
  - steps to reproduce
  - screenshots/logs if applicable

### New Features
For new features or major changes:
- **Always open an issue first**
- Describe:
  - the problem being solved
  - why existing solutions are insufficient
  - a high-level implementation idea

### Mandatory Issue Before:
You **must** open an issue before:
- introducing new dependencies
- modifying core architecture
- changing coding conventions
- making large refactors
- adding major features

This avoids wasted effort and misalignment.

---

### Contribution Guidelines:
---
1. **Fork the repository**.

2. **Clone your fork**:
   ```bash
   git clone https://github.com/<YOUR_USERNAME>/<repository>.git

   cd <repository>
   ```
3. **Create a new branch** for your feature/fix:
   ```bash
   git checkout -b feat/your-feature-name
   ```
4. **Make your changes** locally.

5. **Test everything** before committing:
   - Lint your code.
   - Ensure your feature works as expected.

6. **Commit with a meaningful message**:
   ```bash
   git commit -m "feat: added feature XYZ"
   ```
7. **Push your branch** to your fork:
   ```bash
   git push origin feat/your-feature-name
   ```
8. **Open a Pull Request** (PR) to the `main` branch of the upstream repo.

9. **The PR description must include:**
    - changes made
    - files modified/added
    - a reference to the issue it addresses

## Pull Request Guidelines

Every PR must include:

* A clear title using Conventional Commits
* A detailed description covering:

  * what was changed
  * why the change was necessary
  * how it was implemented
* References to related issues (e.g. `Fixes #123`)
* Screenshots, logs, or demos if applicable

### Good PRs:

* Are small and focused
* Are easy to review
* Include tests or justification if tests are not added
* Respond promptly to feedback

---

## Commit Message Convention

We follow [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) 

Examples:

```text
feat: add course progress tracking
fix: handle null config in parser
docs: improve setup instructions
refactor: simplify auth middleware
test: add edge cases for tokenizer
```

This enables automated changelogs and a cleaner project history.

---

## Testing & Quality Standards

* All code should be tested where feasible
* Refactors must not change observable behavior unless explicitly intended
* Avoid introducing regressions
* Code should be readable, documented, and maintainable

If you’re unsure how to test something, ask.

---

## Documentation Standards

* Update documentation when behavior changes
* New features must be documented
* Keep language clear, concise, and beginner-friendly
* Avoid assumptions about prior knowledge

Documentation is a **first-class contribution**.

---

## Use of AI Tools

We allow the use of AI tools, including LLMs, **with responsibility**.

### Expectations

* You must understand every line you submit
* You must be able to explain *why* changes were made
* “The AI did it” is **not** an acceptable justification

### AI Code Guidelines

* Review and validate all generated output
* Split changes into logical commits
* Ensure alignment with project goals and style
* Test everything before opening a PR

### AI Communication Guidelines

* Do not ask an AI to restate obvious code behavior
* Ensure comments and explanations are accurate
* Take ownership of your contributions

---

## Code of Conduct & Collaboration

* Be respectful and kind
* Assume good intent
* Give constructive feedback
* Help others learn
* Disagreements are okay—disrespect is not

We’re building a community, not just software.

---

## Getting Help

* Join our [Discord Server](https://discord.gg/Ct82yF3KAU)
* Ask questions on issues or PRs
* Reach out to maintainers

---

## Final Notes

* Contributions are reviewed, not judged
* Learning is encouraged
* Consistency and clarity matter more than cleverness

Thank you for contributing to **Dijkstra**!

