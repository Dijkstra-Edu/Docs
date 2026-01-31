---
title: Git Onboarding
description: Learn how to track changes and manage code using Git.
---

## What is Git?

Git is a version control system.
It is used to:
- Track changes in your code
- Save different versions of a project
- Collaborate safely with others

Git works locally on your computer, while GitHub hosts your code online. Now you won't lose progress!

---

## Step-by-Step Setup

### 1. Download and install Git
- Visit https://git-scm.com
- Download Git for your operating system
- Complete the installation
- Verify by running `git --version` in the terminal

![Alt text](/images/onboarding/git-step1.png)

### 2. Configure your identity
- Set your name and email so Git can track your commits
- Run the following commands:
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```
![Alt text](/images/onboarding/git-step2.png)

### 3. Learn basic commands

- git init → enters folder to a repo
- git status → check file changes
- git add . → stage changes
- git commit -m "message" → save a version
- git log → view commit history

![Alt text](/images/onboarding/git-step3.png)


### 5. Make your first commit
- Stage all files:
```bash
git add .
```
- Commit your changes:
```bash
git commit -m "Initial commit"
```

![Alt text](/images/onboarding/git-step4.png)