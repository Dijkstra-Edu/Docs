---
title: Coding Conventions
description: Standard code style and formatting conventions.
---

This document defines the **coding standards, style rules, and formatting conventions** used across all Dijkstra projects.

These conventions exist to:
- keep codebases consistent and readable
- reduce cognitive load during reviews
- make collaboration across repositories easier
- prioritize clarity and maintainability over personal preference

These rules apply to **all contributions**, regardless of language, framework, or experience level.

---

## 1. Guiding Principles

Across all stacks and repositories, code should:

- be easier to read than it is to write
- favor explicitness over cleverness
- minimize hidden behavior and side effects
- communicate intent clearly
- be consistent with the surrounding codebase

> Code is read far more often than it is written. Optimize for the reader.

---

## 2. Universal Conventions (applies to all languages)

### 2.1 Naming

- Use **descriptive, intention-revealing names**
- Avoid abbreviations unless universally understood
- Prefer clarity over brevity

Examples:
- `get_user_profile` instead of `get_usr_prof`
- `calculate_total_price` instead of `calc`

---

### 2.2 Functions & Methods

- Functions should do **one thing**
- Keep functions small and focused
- Prefer early returns over deep nesting
- Avoid side effects unless explicitly required

If a function requires a long explanation, it likely needs refactoring.

---

### 2.3 Comments

- Explain **why**, not **what**
- Do not restate obvious code
- Update comments when behavior changes

```text
Bad:
// increment i by 1
i++

Good:
// retry once to handle transient network failure
retry_count++
````

---

### 2.4 Error Handling

* Handle errors explicitly
* Never swallow errors silently
* Fail loudly and predictably

Errors are part of control flow, not an afterthought.

---

### 2.5 Formatting

* Use automated formatters where available
* Do not fight formatter output
* Keep formatting-only changes isolated from logic changes

---

## 3. Language-Specific Conventions

The following sections describe **language-level expectations**, independent of frameworks.

## 3.1 Java

Java codebases are expected to be explicit, structured, and conservative in design.

### Style & Tooling

* Follow the official [Java Code Conventions](https://www.oracle.com/java/technologies/javase/codeconventions-contents.html)
* Use 4-space indentation
* Use IDE-supported formatting consistently

### Naming & Structure

* `camelCase` for variables and methods
* `PascalCase` for classes, enums, and interfaces
* Constants must be `UPPER_SNAKE_CASE`
* Package names must be lowercase and meaningful

### Design Expectations

* Prefer immutability where practical
* Avoid static mutable state
* Keep classes small and cohesive
* Avoid “utility classes” with unrelated responsibilities

### Methods

* Avoid long parameter lists (prefer parameter objects)
* Prefer expressive method names over comments
* Do not overload methods with ambiguous behavior



## 3.2 Python

Python code should emphasize readability, explicitness, and simplicity.

### Style & Tooling

* Follow [PEP 8](https://peps.python.org/pep-0008/)
* Format with **black**
* Sort imports with **isort**
* Lint with **ruff** or **flake8**

### Naming

* `snake_case` for variables and functions
* `PascalCase` for classes
* Constants in `UPPER_SNAKE_CASE`

### Typing & Structure

* Type hints are strongly encouraged, especially at module boundaries
* Avoid implicit globals
* Avoid monkey-patching
* Prefer explicit imports over wildcard imports

### Design Expectations

* Keep functions small and expressive
* Avoid deeply nested logic
* Prefer clarity over Python-specific cleverness



## 3.3 JavaScript

JavaScript code must be defensive, explicit, and predictable.

### Style & Tooling

* Format with **Prettier**
* Lint with **ESLint**

### Language Usage

* Prefer `const` over `let`; avoid `var`
* Avoid implicit type coercion
* Avoid relying on truthy/falsy behavior in critical logic
* Use strict equality (`===`) consistently

### Structure

* Avoid large, monolithic functions
* Avoid deeply nested callbacks
* Prefer pure functions where possible

### Design Expectations

* Be explicit with data shapes
* Avoid mutating shared state
* Treat runtime errors as first-class concerns

## 3.4 TypeScript

TypeScript code should leverage the type system as a design tool.

### Style & Tooling

* Format with **Prettier**
* Lint with **ESLint** (TypeScript rules enabled)
* Enable `strict` mode

### Typing Rules

* Avoid `any`
* Prefer explicit types at module and API boundaries
* Use `unknown` instead of `any` when necessary
* Choose between `interface` and `type` consistently

### Design Expectations

* Types should model real domain concepts
* Avoid overly complex or deeply nested types
* Prefer readability over type-level cleverness

Types are documentation—treat them accordingly.


## 3.5 Rust

Rust code should be explicit, type-driven, and honest about failure.

### Style & Tooling

* Format with **rustfmt**
* Lint with **clippy**
* Follow the official [Rust Style Guide](https://github.com/rust-lang/rust/tree/HEAD/src/doc/style-guide/src)

### Naming

* `snake_case` for variables and functions
* `PascalCase` for types, enums, and traits
* `SCREAMING_SNAKE_CASE` for constants

### Error Handling

* Prefer `Result` and `Option` over panics
* Avoid `unwrap()` and `expect()` in production paths
* Model error cases explicitly

### Design Expectations

* Separate pure logic from I/O
* Prefer small modules with clear responsibilities
* Traits define boundaries, not implementations



## 3.6 Go

Go code should be simple, explicit, and idiomatic.

### Style & Tooling

* **gofmt is mandatory**
* Follow the [Go Style Guide](https://google.github.io/styleguide/go/guide)

### Naming

* Short names are acceptable *only when context is obvious*
* Avoid unnecessary abbreviations
* Package names should be short, lowercase, and meaningful

### Error Handling

* Handle errors explicitly
* Do not ignore returned errors
* Avoid panic in application-level code

### Design Expectations

* Keep functions small
* Avoid unnecessary interfaces
* Structure packages by responsibility
* Favor simplicity over abstraction



## 3.7 Kotlin

Kotlin code should be expressive, safe, and concise—without being clever.

### Style & Tooling

* Follow the official [Kotlin Coding Conventions](https://kotlinlang.org/docs/coding-conventions.html)
* Use IDE-supported formatting

### Language Usage

* Prefer `val` over `var`
* Use data classes for simple state
* Use sealed classes and enums intentionally

### Design Expectations

* Avoid deep nesting
* Prefer expressive function names over comments
* Avoid abusing language features for brevity


## 4. Framework-Specific Conventions

Framework conventions define **how applications are structured, how responsibilities are divided, and how framework features should be used responsibly**.

Frameworks are tools—not architectures.

## 4.1 Spring Boot

Spring Boot projects should be **layered, explicit, and conservative**.

### Architectural Expectations

* Controllers orchestrate, services decide
* Business logic belongs in services or domain layers
* Persistence logic belongs in repositories
* Configuration is externalized

### Controllers

* Controllers must remain thin
* Controllers translate HTTP → domain calls
* No business logic in controllers
* Validate input at boundaries

### Services

* Services encapsulate business rules
* Services should be reusable and testable
* Avoid transaction logic scattered across layers

### Dependency Injection

* Prefer constructor injection
* Avoid field injection
* Avoid circular dependencies

### Data & APIs

* Do not expose entities directly over APIs
* Use DTOs for request/response models
* API contracts must be explicit and stable


## 4.2 FastAPI

FastAPI projects should be **explicit, layered, and dependency-driven**.

### Architectural Expectations

* Separate routing, services, domain logic, and infrastructure
* Domain logic must be framework-agnostic
* Dependencies are injected, not imported directly

### Routes

* Routes define HTTP behavior only
* No business logic in route handlers
* Validate input using Pydantic schemas

### Services & Domain

* Business logic belongs in services or domain modules
* Avoid embedding logic in dependency functions
* Keep async boundaries explicit

### Data Models

* Pydantic models are for validation and serialization
* Domain models must not depend on Pydantic
* Avoid leaking database models into APIs


## 4.3 React.js

React projects should be **component-driven and predictable**.

### Component Design

* Prefer functional components
* Components should do one thing
* Avoid “god components”

### State Management

* Keep state as local as possible
* Lift state only when necessary
* Avoid deeply nested state structures

### JSX Usage

* Avoid logic-heavy JSX
* Extract complex logic into hooks or utilities
* Keep render functions readable

### Composition

* Prefer composition over inheritance
* Prefer explicit props over implicit context

## 4.4 Next.js

Next.js projects should clearly separate **routing, data-fetching, and presentation**.

### Pages & Routing

* Pages are composition layers
* Avoid embedding business logic in pages
* Routing must remain predictable and explicit

### Data Fetching

* Separate data fetching from rendering
* Prefer server-side logic where appropriate
* Avoid duplicating data fetching logic across pages

### Client vs Server

* Be explicit about client-only and server-only code
* Avoid leaking server assumptions into client components

### Structure

* Shared components remain dumb and reusable
* Feature-specific logic belongs in feature folders
* API clients must be abstracted



## 5. Testing Conventions

* Test behavior, not implementation details
* Keep tests readable and focused
* Name tests descriptively
* Avoid brittle or over-mocked tests

Tests are executable documentation.



## 6. Imports & Dependencies

* Group imports logically
* Remove unused dependencies
* Avoid circular dependencies

Dependencies are long-term commitments—add them deliberately.


## 7. Anti-Patterns to Avoid

Avoid:

* clever one-liners that reduce readability
* large files with multiple responsibilities
* deeply nested conditionals
* commented-out code
* ignoring compiler or linter warnings
* mixing formatting changes with logic changes

These patterns increase maintenance cost over time.



## Final Note

Consistency and clarity matter more than individual preference.

If a rule feels unclear or restrictive, open an issue and discuss it.
Conventions should evolve with understanding—never at the cost of readability.

