---
title: Setup Testing for Dataforge, Helios, Gitripper
description: Setting up comprehensive testing infrastructure for Dataforge, Helios, and Gitripper projects
---

**Duration:** 90-175-350 Hours \
**Difficulty:** Medium \
**Languages & Technologies:**  \
**Repository:** [Dijkstra-Edu/Dijkstra-Web](https://github.com/Dijkstra-Edu/Dijkstra-Dataforge), [Dijkstra-Edu/Dataforge](https://github.com/Dijkstra-Edu/Dataforge), [Dijkstra-Edu/Helios](https://github.com/Dijkstra-Edu/Helios), [Dijkstra-Edu/Archivist](https://github.com/Dijkstra-Edu/Archivist), 

## Overview

This project focuses on establishing a comprehensive testing framework and coverage infrastructure across services in the Dijkstra ecosystem, covering both backend and frontend components. The objective is to improve code quality, reliability, and long-term maintainability by enforcing strong testing practices and measurable test coverage.

The project will standardize unit, integration, and end-to-end (E2E) testing workflows across multiple technology stacks, with centralized reporting through Codecov.

### Proposed Testing Stack

#### Python (FastAPI)
- **Unit & Integration Testing:** pytest, TestClient
- **Coverage:** coverage.py
- **Reporting:** Codecov

#### Java (Spring Boot)
- **Unit Testing:** JUnit
- **Integration Testing:** MockMvc
- **End-to-End Testing:** Selenium / Cypress
- **Coverage:** JaCoCo
- **Reporting:** Codecov

#### Go (Gin)
- **Unit Testing:** go test
- **Integration Testing:** httptest, Testify
- **End-to-End / BDD:** godog
- **Coverage:** go test --coverprofile
- **Reporting:** Codecov

## Objectives

- Set up testing frameworks for each project
- Write unit tests for core functionality
- Implement integration tests where appropriate
- Set up CI/CD integration for automated testing
- Achieve meaningful test coverage across all three projects

## Requirements

- Understanding of testing principles and methodologies
- Familiarity with testing frameworks (Jest, pytest, etc. depending on project languages)
- Knowledge of CI/CD pipelines
- Ability to write clear, maintainable test cases

## Deliverables

- Testing framework setup for Dataforge, Helios, and Gitripper
- Comprehensive test suites
- CI/CD integration
- Testing documentation and guidelines

## Mentors

- Jonathan Samuel ([GitHub](https://github.com/JRS296), [Discord](https://discord.com/users/452140771206758421))
- Dellwyn Tennison ([GitHub](https://github.com/happydracula), [Discord](https://discord.com/users/756107393070399510))
- Abdul Wahab ([GitHub](https://github.com/AbdulWahab938), [Discord](https://discord.com/users/1314947048222490765))

> We would like you to hopefully mentor the next generation as well! (This is the Dijkstra way, we learn to teach!) and to hopefully become a codeowner that other developers can look to for knowledge and guidance down the years.