---
title: Coding Conventions
description: Standard code style and formatting conventions.
---

This document defines the **coding standards, style guidelines, and formatting conventions** used across all Dijkstra projects.

The purpose of these conventions is to:
- keep codebases consistent and readable
- reduce cognitive load during reviews
- make collaboration across repositories easier
- prioritize clarity over personal preference

These rules apply to **all contributions**, regardless of language or experience level.

---

## Guiding Principles

Across all stacks, code should:

- be easy to read before being easy to write
- favor explicitness over cleverness
- minimize hidden behavior
- communicate intent clearly
- be consistent with the surrounding code

> Code is read far more often than it is written.

---

## Cross-Language Conventions

### Naming

- Use **descriptive, intention-revealing names**
- Avoid abbreviations unless they are universally understood
- Prefer full words over shorthand

Examples:
- `get_user_profile` instead of `get_usr_prof`
- `calculate_total_price` instead of `calc`

---

### Functions & Methods

- Functions should do **one thing**
- Keep functions short and focused
- Prefer early returns over deep nesting
- Avoid side effects unless necessary

If a function needs a long comment to explain it, it likely needs refactoring.

---

### Comments

- Explain **why**, not **what**
- Avoid restating obvious code
- Update comments when behavior changes


```text
Bad:
// increment i by 1
i++

Good:

// retry once to handle transient network failure
retry_count++
```
### Error Handling

- Handle errors explicitly
- Never swallow errors silently

Errors are part of the program’s control flow, not an afterthought.

### Formatting

- Use automated formatters where available
- Do not manually fight formatter output
- Formatting changes should be isolated from logic changes

### 🐍 Python (FastAPI)

#### Style Guide
- Follow [PEP 8](https://peps.python.org/pep-0008/)
- Use black for formatting
- Use isort for imports
- Use ruff or flake8 for linting

#### Conventions
- Snake_case for variables and functions
- PascalCase for classes
- Type hints are encouraged
- Avoid implicit globals

### Java (Spring Boot)

#### Style Guide
- Follow standard [Java conventions](www.oracle.com/java/technologies/javase/codeconventions-contents.html)
- Use 4-space indentation
- CamelCase for methods and variables
- PascalCase for classes

#### Conventions

- Keep controllers thin
- Services contain business logic
- Avoid static state
- Prefer constructor injection over field injection

### Rust

**Style Guide**

- Follow rustfmt
- Use clippy for linting 
- [Rust Syle Guide](https://github.com/rust-lang/rust/tree/HEAD/src/doc/style-guide/src)

**Conventions**
- Use snake_case for variables and functions
- Use PascalCase for types and traits
- Prefer Result and Option over panics
- Avoid unwrap() in production code

### Go (Gin)

**Style Guide**
- Follow gofmt (mandatory)
- [Go Style Guide](https://google.github.io/styleguide/go/guide)

**Conventions**
- Keep functions small
- Prefer explicit error handling
- Avoid unnecessary interfaces
- Structure packages by responsibility

## 🌐 Frontend (Next.js / TypeScript)

**Style Guide**
- Use Prettier for formatting
- Use ESLint for linting

**Conventions**
- Use TypeScript strictly
- Prefer functional components
- Avoid logic-heavy JSX
- Separate UI from data-fetching logic

### Testing Conventions
- Test behavior, not implementation details
- Keep tests readable
- Name tests descriptively
- Avoid brittle tests

Tests are documentation.

### Imports & Dependencies
- Group imports logically
- Remove unused dependencies
- Avoid circular dependencies

Dependencies are commitments—add them carefully.

### Anti-Patterns to Avoid
- Clever one-liners that reduce readability
- Large files with multiple responsibilities
- Deeply nested conditionals
- Commented-out code
- Ignoring compiler or linter warnings
