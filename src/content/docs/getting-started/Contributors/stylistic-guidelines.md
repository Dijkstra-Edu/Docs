---
title: Stylistic Guidelines
description: Guidelines for naming, documentation, and readability.
---
Thank you for taking the time to align your contributions with Dijkstra’s stylistic standards.

This document defines **how we communicate intent through code, documentation, and structure**.  
Unlike coding conventions (which focus on syntax and formatting), stylistic guidelines focus on **readability, consistency, and long-term maintainability**.

These guidelines exist to:
- reduce cognitive load for contributors and reviewers
- make intent obvious across languages and repositories
- ensure documentation and code age gracefully
- help new contributors orient themselves quickly

Style is not about personal preference. It is about **shared understanding**.

---

## Table of Contents

- [How to Apply These Guidelines](#how-to-apply-these-guidelines)
- [Naming Conventions](#naming-conventions)
- [Documentation Style](#documentation-style)
- [Code Readability](#code-readability)
- [Markdown & Docs Style](#markdown--docs-style)
- [Consistency & Existing Patterns](#consistency--existing-patterns)
- [Common Stylistic Anti-Patterns](#common-stylistic-anti-patterns)

---

## How to Apply These Guidelines

These guidelines apply to:
- source code
- documentation
- comments
- READMEs
- architecture and design docs
- issues and pull requests (where applicable)

When contributing:
- follow the existing style of the repository
- prioritize clarity over cleverness
- err on the side of being explicit

If a stylistic decision is unclear, **ask or open an issue**.

---

## Naming Conventions

### General Principles

Names should:
- reveal intent
- reflect responsibility
- be readable without additional context
- avoid unnecessary abbreviations

Prefer clarity over brevity.

---

### Variables

- Use descriptive, intention-revealing names
- Avoid encoding type information into names
- Avoid ambiguous placeholders

Bad:
```text
tmp
data
x
val
````

Good:

```text
user_email
total_price
retry_count
is_authenticated
```

---

### Functions / Methods

* Use verbs
* Describe *what* the function does, not *how*
* Avoid generic names

Bad:

```text
handle()
process()
do_stuff()
```

Good:

```text
validate_user_input()
calculate_invoice_total()
fetch_active_sessions()
```

---

### Classes / Structs / Types

* Use nouns
* Represent a single concept
* Avoid overly generic names

Bad:

```text
Manager
Handler
Helper
```

Good:

```text
UserAccount
OrderProcessor
AuthToken
```

---

### Files & Directories

* Name by responsibility, not by implementation detail
* Avoid catch-all directories

Bad:

```text
utils/
misc/
helpers/
```

Good:

```text
authentication/
billing/
notifications/
```

If a directory grows too large, it likely contains multiple responsibilities.

---

## Documentation Style

### Code Comments

Comments should:

* explain *why* something exists
* explain non-obvious decisions
* document constraints or trade-offs

Avoid explaining what the code already clearly states.

Bad:

```text
// increment counter
counter++
```

Good:

```text
// retry once to handle transient network failures
retry_count++
```

---

### File-Level Documentation

Non-trivial files should include a short description at the top explaining:

* the purpose of the file
* its role in the system
* important assumptions or limitations

Example:

```text
// Handles authentication and token validation.
// Authorization is intentionally handled elsewhere.
```

---

### Architectural Documentation

When documenting architecture:

* explain intent before structure
* describe responsibilities, not just directories
* justify non-obvious decisions

Documentation should help future contributors answer:

> “Why is the system designed this way?”

---

## Code Readability

### Line Length & Structure

* Avoid long, dense lines
* Prefer intermediate variables over complex expressions
* Optimize for vertical readability

Bad:

```text
if a && b && c && (d || e) && f {
```

Good:

```text
conditions_met :=
    a &&
    b &&
    c &&
    (d || e) &&
    f
```

---

### Nesting

* Avoid deep nesting
* Prefer early returns
* Extract complex logic into well-named functions

Deep nesting hides intent and increases mental load.

---

### Explicitness

Prefer explicit behavior over implicit “magic”.

Bad:

```text
do_magic(data)
```

Good:

```text
normalize_user_input(data)
validate_required_fields(data)
```

---

## Whitespace & Spacing

### Trailing Whitespace

- Trailing whitespace is not allowed
- Files must end with **a single newline**

Enable auto-trim in your editor.

---

### Vertical Spacing

Use blank lines to:
- separate logical sections
- group related statements
- improve scan-ability

Avoid:
- large empty gaps
- dense blocks with no breathing room

Example:
```text
validate_input(data)

result := process(data)

persist(result)
````

---

### Horizontal Spacing

* Use spaces around operators
* Avoid compressed expressions

Bad:

```text
total=a+b*c
```

Good:

```text
total = a + b * c
```

---

## Indentation & Tabs vs Spaces

### Spaces, Not Tabs

- **Spaces are required**
- **Tabs are not allowed**
- Tabs cause inconsistent rendering across editors and platforms

Unless a language ecosystem enforces otherwise:
- Use **2 or 4 spaces**, matching the existing repository
- Never mix tabs and spaces in the same file

> Indentation is a *secondary notation* that significantly improves readability. Inconsistent indentation is architectural noise.

---

### Indentation Consistency

- Indentation level must be consistent throughout a file
- Nested blocks increase indentation by exactly one level
- Alignment must reflect structure, not aesthetics

Do not manually align code into columns for visual symmetry—this is brittle and formatter-hostile.

---

## Line Length

* Avoid overly long lines
* Prefer breaking expressions into intermediate variables
* Favor vertical readability over horizontal compression

If a line requires horizontal scrolling to understand, it is too long.

---

## Naming Conventions

(See also: [Coding Conventions](./coding-conventions.md))

### General Rules

* Names must reveal intent
* Avoid abbreviations unless universally understood
* Prefer clarity over brevity

Bad:

```text
tmp
mgr
cfg
```

Good:

```text
temporary_file
user_manager
configuration
```

---

## Code Readability

### Nesting & Control Flow

* Avoid deep nesting
* Prefer early returns
* Extract complex logic into named functions

Deep nesting hides intent and increases mental overhead.

---

### Explicitness Over Magic

Prefer explicit steps to implicit behavior.

Bad:

```text
process(data)
```

Good:

```text
validate_input(data)
normalize_data(data)
execute_processing(data)
```

---

## Documentation & Markdown Style

Dijkstra uses **Markdown as a first-class format**.
Markdown should be readable **both rendered and raw**.

### Headings

* Use **sentence case**
* Headings must not be indented
* Avoid vague titles like “Notes” or “Misc”
* Do not include code snippets in headings

Correct:

```md
### This is a clear heading
```

Incorrect:

```md
### This Is Not sentence Case
### The `id` property
```

---

### Newlines

* Always include a blank line before and after:

  * headings
  * lists
  * code blocks
  * HTML blocks
* Files must end with a single newline

---

### Lists

* Use hyphens (`-`) for unordered lists
* Use **lazy numbering** for ordered lists
* Follow consistent indentation for nested lists

Example:

```md
1. First item
1. Second item
   - Nested item
```

---

### Code Blocks

* Always specify the language
* Use triple backticks
* Do not include shell prompts (`$`)

Correct:

```bash
cd src
```

Incorrect:

```bash
$ cd src
```

---

### Inline Code

* Use backticks for:

  * file names
  * commands
  * identifiers

Example:

```md
Edit the `main.rs` file.
```

---

### Links

* Use Markdown links, not raw URLs
* Link text must be descriptive
* Avoid “here” or “this”

Good:

```md
See the [Architectural Guidelines](./architectural-guidelines.md).
```

Bad:

```md
Click [here](./architectural-guidelines.md).
```

---

### Tone

* Professional but welcoming
* Clear and neutral
* Avoid sarcasm or dismissive language

Documentation reflects community culture.

---

## Consistency & Existing Patterns

* Match the style already used in the repository
* Do not introduce new stylistic patterns without strong justification
* Consistency within a repository matters more than global uniformity

If two styles conflict, follow the local one.

---

## Naming in Tests

* Test names should describe behavior
* Prefer descriptive names over brevity

Bad:

```text
test_user()
test_1()
```

Good:

```text
test_login_fails_with_invalid_password()
test_order_is_rejected_when_out_of_stock()
```

Tests are executable documentation.

---

## Common Stylistic Anti-Patterns

Avoid:

* clever one-liners that reduce readability
* cryptic or abbreviated names
* excessive comments explaining obvious code
* commented-out code
* inconsistent naming across layers
* documentation that explains *what* but not *why*

Style that obscures intent becomes technical debt.

---
