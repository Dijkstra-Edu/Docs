---

title: Run Locally
description: Local setup guide for GitRipper.
---------------------------------------------

This guide walks you through setting up GitRipper on your local machine for development and testing.

### Prerequisites

Ensure the following dependencies are installed and running before starting the application.

---

### 1. Temporal Server

Temporal is used as the workflow orchestrator for bulk synchronisation and reliability guarantees.

**Setup**

1. Install Temporal CLI:
   [https://learn.temporal.io/getting_started/typescript/dev_environment/?os=linux#set-up-a-local-temporal-service-for-development-with-temporal-cli](https://learn.temporal.io/getting_started/typescript/dev_environment/?os=linux#set-up-a-local-temporal-service-for-development-with-temporal-cli)
2. Start the local Temporal service:

   ```bash
   temporal server start-dev
   ```

**Configuration**

```yaml
temporal:
  target: localhost:7233
```

---

### 2. PostgreSQL Database

PostgreSQL is used as the primary persistence layer.

**Setup**

1. Install PostgreSQL:
   [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
2. Create the database:

   ```sql
   CREATE DATABASE gitripper_dev_db;
   ```

**Configuration**

```yaml
database:
  url: jdbc:postgresql://localhost:5432/gitripper_dev_db?rewriteBatchedStatements=true
  username: cloud
  password: scape
```

---

### 3. Kafka

Kafka is used for ingesting GitHub webhook events.

**Setup**

1. Install and start Kafka:
   [https://kafka.apache.org/quickstart/](https://kafka.apache.org/quickstart/)
2. Ensure the broker is running on `localhost:9092`.

**Configuration**

```yaml
kafka:
  bootstrap-servers: localhost:9092
```

---



---

### Common Issues

| Issue                       | Resolution                                                               |
| --------------------------- | ------------------------------------------------------------------------ |
| Temporal connection fails   | Verify `temporal.target` and that `temporal server start-dev` is running |
| Kafka not reachable         | Check `kafka.bootstrap-servers` and that the broker is running           |
| Database connection refused | Verify Postgres is running and credentials match `application.yml`       |
