---

title: Testing GitRipper
description: Testing procedures for GitRipper.
----------------------------------------------

This guide explains how to validate both the bulk synchronisation workflow and the asynchronous webhook flow locally.

---

### 1. Generate a GitHub API Token

Create a **GitHub Personal Access Token (Classic)** with the following scopes:

* `repo` (for private repositories, optional)
* `read:org`
* `read:user`

This token is used by GitRipper to fetch repository and commit data via the GitHub GraphQL API.

---

### 2. Create a User (Triggers Initial Bulk Sync)

Register a test user to start the bulk synchronisation workflow.

```bash
POST http://localhost:7060/user/create
Content-Type: application/json

{
  "loginId": "happydracula",
  "email": "dellwyntennison@gmail.com",
  "oauthToken": "<YOUR_GITHUB_TOKEN>"
}
```

**What this does**

* Persists the user in PostgreSQL
* Starts the Temporal bulk‑sync workflow
* Fetches repositories and historical commits from GitHub

---

### 3. Trigger the Scheduled Sync (Cron Simulation)

Force a resynchronisation for users whose last sync is stale.

```bash
POST http://localhost:7060/cron/users/sync
Content-Type: application/json

{
  "hoursSinceLastSync": 10
}
```

`hoursSinceLastSync` defines the staleness threshold. All users whose last successful sync is older than this value will be resynchronised.

---

### 4. (Optional) Test the Webhook Flow with a GitHub App

To validate the asynchronous pipeline:

1. Create a GitHub App and subscribe to `push` and `repository` events.
2. Expose your local server using `ngrok` and configure the webhook URL.
3. Install the GitHub App on a test repository.
4. Push a commit and verify:

   * Kafka receives the event
   * GitRipper consumes it
   * The commit appears in PostgreSQL

---

### Verification Checklist

* [ ] User created successfully
* [ ] Temporal workflow visible in the Temporal UI
* [ ] Commits persisted in PostgreSQL
* [ ] Aggregated metrics updated
* [ ] Webhook events processed (if enabled)
