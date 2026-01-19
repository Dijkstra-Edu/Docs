---

title: Testing Helios
description: Local testing guide for Helios.
--------------------------------------------


This guide explains how to validate Helios end‑to‑end by publishing test events to Kafka and verifying XP and tier computation.

---

### 1. Start Dependencies

Ensure the following are running:

* PostgreSQL (`helios_dev_db`)
* Kafka (`localhost:9092`)
* Helios (`cargo run`)

---

### 2. Publish a Test Metrics Event

Helios consumes metric snapshots from DataForge and GitRipper via Kafka. To simulate this locally, publish a test message to the metrics topic.

```bash
kafka-console-producer --broker-list localhost:9092 --topic dm_user_metrics
```

Paste a sample payload:

```json
{
  "type": "GitripperUpdateEvent",
  "data": {
    "user_id": "user-123",
    "projects": [
      {
        "repo_url": "https://github.com/example-org/async-scheduler",
        "stars": 142,
        "project_tier_score": 68.5,
        "complexity_score": 7.8,
        "loc": 6200,
        "description": "Rust-based async job scheduler with Temporal-style workflows",
        "ml_score": 84.2
      },
      {
        "repo_url": "https://github.com/example-org/distributed-cache",
        "stars": 96,
        "project_tier_score": 55.0,
        "complexity_score": 6.4,
        "loc": 4100,
        "description": "High-performance distributed cache with consistent hashing",
        "ml_score": 79.1
      }
    ]
  }
}
```

---

### 3. Verify Processing

After publishing the event, verify:

1. **Kafka Consumption**
   Helios logs show the message being consumed.

2. **XP Computation**
   Helios computes the unified XP score and tier assignment.

3. **Database Persistence**

   ```sql
   SELECT * FROM user_xp WHERE user_id = 'user-123';
   ```

---

### 4. Debugging

| Issue             | Resolution                                                |
| ----------------- | --------------------------------------------------------- |
| No logs           | Check `RUST_LOG=info` and Kafka connectivity              |
| No DB row created | Verify schema and migrations have run                     |
| Tier incorrect    | Re‑check scaling functions and weights in `UserXpService` |

---

This confirms the full Helios pipeline: **Kafka → Axum → Scoring Engine → PostgreSQL → Tier Assignment**.
