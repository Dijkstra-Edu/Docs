---
title: Architectural Guidelines
description: Architecture principles and system design conventions.
---

This document describes the **standard architectural patterns, structure, and development conventions** used across Dijkstra projects, **specifically tailored to our current tech stack**.

The goal is **consistency without rigidity**: contributors should be able to move between repositories and immediately recognize *how things are built*, *where things live*, and *why they exist*.

These guidelines define the **default way** we build systems. Deviations are allowed—but should be intentional, justified, and documented.

---

## Architectural Philosophy

Across all stacks, Dijkstra systems are designed to:

* prioritize **clarity and readability**
* separate **domain logic from infrastructure**
* encourage **modularity and testability**
* support **incremental growth**, not premature abstraction
* make architectural intent obvious to new contributors

> If a new contributor cannot explain the structure after a short walkthrough, the architecture is too opaque.

---

## Cross-Cutting Principles (Applies to All Stacks)

### Separation of Concerns

Every application is conceptually divided into:

* **Domain / Business Logic** – what the system *does*
* **Application Layer** – how use cases are executed
* **Delivery Layer** – HTTP, CLI, UI, etc.
* **Infrastructure Layer** – databases, messaging, external services

These layers should **depend inward**, never outward.

---

### Explicit Data Flow

* Data flows in predictable, directional paths
* Avoid circular dependencies
* Side effects are isolated and visible

Hidden behavior is considered architectural debt.

---

### Configuration Over Hardcoding

* Environment-specific values live in config
* Secrets are never hardcoded
* Defaults are safe, but failures are loud

---

## 🧩 Backend Architecture

Dijkstra backends are built using **FastAPI**, **Spring Boot**, and **Rust**, but follow a **shared conceptual structure** regardless of language.

---

## FastAPI (Python) 🐍 

### Architectural Style

* Layered + dependency-injected
* Clear separation between API, services, and domain
* Async-first where appropriate

### Recommended Structure

```
src/
├── controllers/        # APIRouters, request handlers
├── services/           # Business logic
├── repository/         # DB access & queries
├── entities/           # Domain models
├── schema/             # Pydantic request/response models
├── config/             # App & environment config
├── settings/           # Runtime configuration
├── utils/              # Shared helpers
├── db.py               # Database setup
├── dependencies.py     # Dependency injection
└── main.py             # App entrypoint

```

### Key Rules

* **Routers contain no business logic**
* Pydantic schemas are for validation, not domain modeling
* Dependencies are injected, not imported directly
* Domain logic must be framework-agnostic


## Spring Boot (Java)

### Architectural Style

* Layered, package-by-feature preferred
* Clear boundaries between controllers, services, and persistence
* Convention over configuration

### Recommended Structure

```text
src/main/java/com/dijkstra/app/
├── Application.java
├── config/
├── controller/
├── service/
├── domain/
│   ├── model/
│   └── repository/
├── dto/
└── exception/
```

### Key Rules

* Controllers orchestrate, services decide
* Entities are not exposed directly over APIs
* DTOs define external contracts
* Business rules live in the service/domain layer
* Avoid fat controllers and anemic services

## Rust (Backend / Systems) 🦀

### Architectural Style

* Explicit, modular, type-driven
* Strong separation between core logic and IO
* Minimal magic, maximal clarity

### Recommended Structure

```text
src/
├── controllers/        # HTTP handlers (Axum / Actix / etc.)
├── services/           # Business logic
├── repositories/       # Persistence implementations
├── entities/           # Domain models
├── dto/                # Request / response models
├── config/
├── lib.rs
└── main.rs

```

## Go (Gin) Architecture

### Architectural Style

* Handlers stay thin
* Services contain decision logic
* Interfaces define repository boundaries
* Struct tags are restricted to DTOs
* Domain models stay clean and portable

Go favors simple composition and explicit dependencies.

```
src/
├── controllers/        # Gin handlers
├── services/           # Business logic
├── repositories/       # DB access
├── entities/           # Domain models
└── dto/                # Request/response structs
```

### Key Rules

* Core logic must compile without the web framework
* Side effects are isolated at the edges
* Prefer pure functions and explicit state passing
* Errors are modeled, not ignored
* Traits define boundaries, not implementations

---

## 🌐 Frontend Architecture (Next.js)

### Architectural Style

* Component-driven
* File-based routing
* Clear separation of UI, state, and data fetching

### Recommended Structure

```text
src/
├── app/ or pages/        # routing
├── components/           # reusable UI components
├── features/             # feature-specific logic
├── hooks/
├── services/             # API clients
├── styles/
├── types/
└── utils/
```

### Key Rules

* Pages are composition layers, not logic hubs
* Business logic does not live in components
* API calls are abstracted behind services
* Shared components remain dumb and reusable
* Feature folders encapsulate complexity

---

## Frontend–Backend Interaction

* APIs are **contract-first**
* Request/response schemas are explicit
* Error states are intentional and documented
* Breaking API changes must be versioned or coordinated

Frontend should never rely on undocumented backend behavior.

---

## Security & Boundaries

Across all stacks:

* Authentication and authorization are centralized
* Trust boundaries are explicit
* Input validation happens at the edges
* Internal logic assumes validated input

Security is architectural, not just configurational.

---

## Documentation Expectations 📚

For each repository:

* Entry points must be documented
* Architectural assumptions must be explained
* Non-obvious decisions must be justified

When architecture changes, documentation must change with it.

---

## Evolution & Exceptions

These guidelines describe the **default** approach.

Exceptions are allowed when:

* the problem genuinely requires it
* the trade-offs are understood
* the deviation is documented

Architecture should evolve with understanding—not freeze in time.

---

## Final Guiding Principle

> A contributor should be able to predict
> where code lives before searching for it.

If that prediction fails often, the architecture needs improvement.

---

If you’re unsure whether a design fits these guidelines, open an issue and discuss it.
Architecture improves through conversation, not isolation.
