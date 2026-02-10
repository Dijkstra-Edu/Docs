---

title: Run Locally
description: Local setup guide for Helios.
------------------------------------------

This guide walks you through setting up **Helios** on your local machine for development and testing.

### Prerequisites

Ensure the following dependencies are installed and running before starting the application.

---

### 1. PostgreSQL Database

PostgreSQL is used to persist user metrics, computed XP, and tier assignments.

**Setup**

1. Install PostgreSQL:
   [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
2. Create the development database:

   ```sql
   CREATE DATABASE helios_dev_db;
   ```

**Configuration**

```bash
export DATABASE_URL=postgres://cloud:scape@localhost:5432/helios_dev_db
```

---

### 2. Kafka

Kafka is used to ingest metric snapshots from DataForge and GitRipper and drive real‑time ranking.

**Setup**

1. Install and start Kafka:
   [https://kafka.apache.org/quickstart/](https://kafka.apache.org/quickstart/)
2. Ensure the broker is running on `localhost:9092`.

**Configuration**

```bash
export KAFKA_BOOTSTRAP_SERVERS=localhost:9092
```

---

### 3. Environment Variables

Helios uses environment variables for runtime configuration.

```bash
export RUST_LOG=info
```

---

### 4. Build & Run Helios

```bash
cargo build
cargo run
```

Helios will:

* Start the Axum HTTP server
* Connect to PostgreSQL and Kafka
* Begin consuming metric update events
* Compute XP and assign tiers in real time

---

### Common Issues

| Issue                     | Resolution                                                     |
| ------------------------- | -------------------------------------------------------------- |
| Database connection fails | Verify `DATABASE_URL` and that Postgres is running             |
| Kafka not reachable       | Check `KAFKA_BOOTSTRAP_SERVERS` and that the broker is running |
| No consumption            | Ensure the metrics topic exists and Helios has permissions     |
