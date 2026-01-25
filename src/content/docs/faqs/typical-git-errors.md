---
title: Typical Git Errors
description: Common Git-related problems and how to fix them.
---
# Typical Git Errors Documentation

This guide documents typical Git errors encountered in development workflows and provides step-by-step solutions for each issue. Use this document as a reference when troubleshooting Git-related problems. This guide is structured for both beginners and experienced developers.

## Table of Contents

- [Getting Started with Git](#getting-started-with-git)
  - [Initial Setup](#initial-setup)
  - [Understanding Git Basics](#understanding-git-basics)
  - [Git Terminology Guide](#git-terminology-guide)
- [Authentication & Access Errors](#authentication--access-errors)
  - [fatal: repository not found](#fatal-repository-not-found)
  - [SSL Certificate Problem](#ssl-certificate-problem-unable-to-get-local-issuer-certificate)
  - [Permission denied (publickey)](#permission-denied-publickey)
- [Remote & Repository Errors](#remote--repository-errors)
  - [fatal: remote origin already exists](#fatal-remote-origin-already-exists)
  - [fatal: not a git repository](#fatal-not-a-git-repository)
  - [Cannot lock ref](#cannot-lock-ref)
  - [src refspec main does not match any](#src-refspec-main-does-not-match-any)
  - [Branch Does Not Exist](#branch-does-not-exist)
- [Commit & Work in Progress Errors](#commit--work-in-progress-errors)
  - [Committed to the Wrong Branch](#committed-to-the-wrong-branch)
  - [Forgot to Add Files to Commit](#forgot-to-add-files-to-commit)
  - [Wrong Commit Message](#wrong-commit-message)
  - [Accidentally Committed Sensitive Data](#accidentally-committed-sensitive-data)
- [Merge & History Errors](#merge--history-errors)
  - [fatal: refusing to merge unrelated histories](#fatal-refusing-to-merge-unrelated-histories)
  - [Merge Conflicts](#merge-conflicts)
  - [Cannot Pull with Uncommitted Changes](#cannot-pull-with-uncommitted-changes)
  - [Entry Would Be Overwritten by Merge](#entry-would-be-overwritten-by-merge)
- [Detached HEAD State](#detached-head-state)
- [Push & Pull Errors](#push--pull-errors)
  - [failed to push some refs to](#failed-to-push-some-refs-to)
  - [Updates Were Rejected (Non-Fast-Forward)](#updates-were-rejected-non-fast-forward)
- [File Size & Content Errors](#file-size--content-errors)
  - [File Exceeds GitHub's Size Limit](#file-exceeds-githubs-size-limit)
- [Rebase Errors](#rebase-errors)
  - [Cannot Rebase with Uncommitted Changes](#cannot-rebase-with-uncommitted-changes)

---

## Getting Started with Git

### Initial Setup

Before you start using Git, complete these essential setup steps:

**Step 1: Configure Your Identity**

Git needs to know who you are for every commit:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

This information will appear on every commit you make. For your organization:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@yourorganization.com"
```

**Step 2: Verify Your Configuration**

Check that your settings are correct:

```bash
git config --global user.name
git config --global user.email
```

**Step 3: Set Your Default Editor**

Configure which editor Git uses for commit messages:

```bash
# For VS Code
git config --global core.editor "code --wait"

# For Nano (simple, beginner-friendly)
git config --global core.editor "nano"

# For Vim
git config --global core.editor "vim"
```

**Step 4: Create a .gitignore File**

Before starting any project, create a `.gitignore` file to prevent committing unnecessary files:

```bash
# Standard files to ignore
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore
echo ".DS_Store" >> .gitignore
echo "*.log" >> .gitignore
echo "dist/" >> .gitignore
echo "build/" >> .gitignore
```

---

### Understanding Git Basics

Git operates in three main areas. Understanding these is crucial for beginners:

**1. Working Directory**
This is your local folder where you edit files. Changes here are "untracked" until you tell Git about them.

**2. Staging Area (Index)**
This is where you prepare changes before committing them. Use `git add` to move files here.

**3. Repository (.git folder)**
This is where Git permanently stores your committed changes and history.

**Basic Workflow:**

```
Modify Files → Stage Changes → Commit → Push to Remote
(Working Dir) → (Staging Area) → (Local Repo) → (Remote Repo)
```

**Commands at Each Stage:**

```bash
# 1. Check what files have changed
git status

# 2. See what changes were made
git diff

# 3. Stage specific files for commit
git add file.txt
git add .  # Stage all changes

# 4. Review what's staged
git diff --staged

# 5. Commit to your local repository
git commit -m "Your descriptive message"

# 6. Push to remote repository
git push origin branch-name
```

---

### Git Terminology Guide

**HEAD**
- Points to the current branch you are on
- Usually the most recent commit on that branch
- Example: HEAD points to the latest commit on `main`

**Origin**
- The default name for your remote repository (usually on GitHub)
- Think of it as "the central repository on the server"

**Upstream**
- The source repository that you forked from (if you forked a project)
- The original project you're contributing to

**Remote**
- Any repository that is not on your computer
- You can have multiple remotes (origin, upstream, etc.)

**Local**
- Your repository on your own computer

**Branch**
- A separate line of development
- Allows multiple people to work on different features simultaneously
- Main branches: `main`, `master`, `develop`

**Commit**
- A snapshot of your changes at a specific point in time
- Each commit has a unique ID and message

**Staging Area (Index)**
- Where you prepare changes before committing
- You choose which files to include in a commit

**Working Tree**
- Your actual files on disk
- Where you make edits

**Merge**
- Combining changes from one branch into another

**Rebase**
- Moving your commits to a new base point
- Creates a linear history (advanced topic)

**Fast-Forward**
- When one branch is simply moved forward to another without needing to resolve conflicts

**Detached HEAD**
- When HEAD points directly to a commit instead of a branch
- Usually happens when checking out a specific commit

---

## Authentication & Access Errors

### fatal: repository not found

**When it happens:** You attempt to clone, push, or pull from a repository but Git returns a "repository not found" error. This often occurs with private repositories or when authentication credentials are missing.

**Causes:**
- Repository does not exist or has been deleted
- You are not authenticated with proper credentials
- You are not a collaborator on the repository
- Incorrect repository URL or typo in the repository name

**Quick Fix:**

If accessing a private repository, authenticate by including credentials in the URL:

```bash
git clone https://YOUR_USERNAME:YOUR_TOKEN@github.com/username/repository.git
```

Replace `YOUR_USERNAME` with your GitHub username and `YOUR_TOKEN` with your personal access token.

**Detailed Solution:**

**Solution 1: Verify Authentication**

1. Check if you have a valid Personal Access Token (PAT) or SSH key set up:
   - For HTTPS: Create a Personal Access Token in GitHub Settings > Developer settings > Personal access tokens
   - For SSH: Verify your SSH key is added to your GitHub account

2. Clone using the correct method:

   For HTTPS with token:
   ```bash
   git clone https://YOUR_USERNAME:YOUR_TOKEN@github.com/username/repository.git
   ```

   For SSH:
   ```bash
   git clone git@github.com:username/repository.git
   ```

**Solution 2: Verify Repository Access**

1. Check if you have access to the repository:
   ```bash
   git ls-remote https://github.com/username/repository.git
   ```

2. If you lack access, contact the repository administrator and request to be added as a collaborator.

**Solution 3: Check Repository URL**

1. Verify the repository URL is correct and matches the case-sensitive naming:
   ```bash
   # Wrong
   git clone https://github.com/username/Repository.git
   
   # Correct (if repository is lowercase)
   git clone https://github.com/username/repository.git
   ```

2. Copy the repository URL directly from GitHub to avoid typos.

**Prevention:**

- Use SSH keys when possible to avoid storing tokens in your command history
- Set up credential caching to securely store credentials locally
- Verify you have collaborator access before attempting to clone
- Double-check repository URLs before executing clone commands

---

### SSL Certificate Problem: unable to get local issuer certificate

**When it happens:** You encounter an SSL certificate validation error when pushing, pulling, or cloning a Git repository, particularly on Windows systems with Git Bash or when using self-signed certificates.

**Quick Fix:**

Disable SSL verification locally (not recommended for production):

```bash
git -c http.sslVerify=false clone https://github.com/username/repository.git
```

**Detailed Solution:**

**Solution 1: Update Git's Certificate Store (Recommended)**

1. Locate Git's certificate store on Windows:
   ```
   C:\Program Files\Git\mingw64\ssl\certs
   ```

2. Open the `ca-bundle.crt` file in a text editor

3. Add the self-signed certificate to the file

4. Save the file

5. Test the connection:
   ```bash
   git pull
   ```

**Solution 2: Configure Git to Use System Certificate Store**

1. Install the certificate on your system:
   - On Windows: Double-click the certificate and add it to the Trusted Root Certification Authorities store

2. Configure Git to use the system certificate store:
   ```bash
   git config --global http.sslBackend schannel
   ```

3. Verify the configuration:
   ```bash
   git config --global http.sslBackend
   ```

**Solution 3: Reinstall Git with Correct SSL Backend**

1. Uninstall Git from your system

2. Reinstall Git and select the appropriate SSL transport backend during installation (choose "Use the native Windows Secure Channel library" for Windows systems)

**Solution 4: Disable SSL Verification (Not Recommended)**

Use this approach only for testing or in secure environments where you trust the server:

```bash
git config --global http.sslVerify false
```

To disable SSL verification for a specific repository only:

```bash
git config http.sslVerify false
```

**Prevention:**

- Use proper SSL certificates instead of self-signed certificates in production
- Keep Git updated to the latest version
- Configure proper certificate stores during initial Git setup
- Avoid disabling SSL verification in production environments

---

### Permission denied (publickey)

**When it happens:** You attempt to push, pull, or clone via SSH but Git returns a "Permission denied (publickey)" error. This indicates that your SSH key is not properly configured or recognized by the remote server.

**Causes:**
- SSH key is not added to the SSH agent
- SSH key is not uploaded to your GitHub account
- Wrong SSH key permissions
- SSH key path is not correct in Git configuration
- No SSH key exists on your system

**Quick Fix:**

Test your SSH connection:

```bash
ssh -T git@github.com
```

If this fails, generate a new SSH key:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

**Detailed Solution:**

**Solution 1: Generate and Add SSH Key**

1. Generate a new SSH key:
   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

2. When prompted, save the key in the default location (press Enter)

3. Enter a passphrase (optional but recommended)

4. Start the SSH agent:
   ```bash
   eval "$(ssh-agent -s)"
   ```

5. Add your private key to the SSH agent:
   ```bash
   ssh-add ~/.ssh/id_rsa
   ```

6. Copy your public key:
   ```bash
   # On macOS/Linux
   cat ~/.ssh/id_rsa.pub
   
   # On Windows PowerShell
   Get-Content ~/.ssh/id_rsa.pub
   ```

7. Add the key to your GitHub account:
   - Go to GitHub Settings > SSH and GPG keys
   - Click "New SSH key"
   - Paste your public key and save

**Solution 2: Verify SSH Key Permissions**

1. Check the permissions on your SSH key directory:
   ```bash
   ls -la ~/.ssh/
   ```

2. Ensure the permissions are correct:
   ```bash
   chmod 700 ~/.ssh
   chmod 600 ~/.ssh/id_rsa
   chmod 644 ~/.ssh/id_rsa.pub
   ```

**Solution 3: Update Remote URL to Use SSH**

1. Check your current remote configuration:
   ```bash
   git remote -v
   ```

2. If using HTTPS, update to SSH:
   ```bash
   git remote set-url origin git@github.com:username/repository.git
   ```

**Solution 4: Test SSH Connection**

1. Test your SSH connection:
   ```bash
   ssh -T git@github.com
   ```

2. You should see a message like: "Hi username! You've successfully authenticated, but GitHub does not provide shell access."

**Prevention:**

- Generate and upload SSH keys during initial Git setup
- Keep your private keys secure and never share them
- Use passphrases to protect your SSH keys
- Regularly verify your SSH keys on GitHub
- Use SSH over HTTPS to avoid credential issues

---

## Remote & Repository Errors

### fatal: remote origin already exists

**When it happens:** You attempt to add a remote repository or change the origin URL, but Git returns an error indicating that the remote origin already exists. This commonly occurs when cloning a repository and then trying to add the origin again.

**Quick Fix:**

Remove the existing origin and add the new one:

```bash
git remote remove origin
git remote add origin https://github.com/username/repository.git
```

**Detailed Solution:**

**Solution 1: Update the Existing Remote URL**

If you want to keep the origin but change its URL:

```bash
git remote set-url origin https://github.com/username/new-repository.git
```

Verify the change:
```bash
git remote -v
```

**Solution 2: Remove and Re-add the Remote**

1. Remove the existing remote:
   ```bash
   git remote remove origin
   ```

2. Add the new remote:
   ```bash
   git remote add origin https://github.com/username/repository.git
   ```

3. Verify the remote was added:
   ```bash
   git remote -v
   ```

**Solution 3: Rename the Existing Remote**

If you want to keep the old remote but have a different primary origin:

```bash
git remote rename origin old-origin
git remote add origin https://github.com/username/repository.git
```

View all remotes:
```bash
git remote -v
```

**Prevention:**

- Check existing remotes before adding new ones:
  ```bash
  git remote -v
  ```

- Use `git remote set-url` instead of adding a new remote when changing URLs
- Document the intended remote URL before making changes

---

### fatal: not a git repository

**When it happens:** You attempt to execute a Git command outside of a Git repository directory, or the repository has not been initialized.

**Causes:**
- You are not in the correct project directory
- The current directory does not contain an initialized Git repository
- You executed the command in a subdirectory that is outside the Git repository

**Quick Fix:**

Navigate to your project directory and initialize Git:

```bash
cd /path/to/your/project
git init
```

**Detailed Solution:**

**Solution 1: Navigate to the Correct Directory**

1. Identify the correct project folder that should contain your Git repository

2. Navigate to that directory using cd:
   ```bash
   cd ~/path/to/your/project
   ```

3. Verify you are in a Git repository:
   ```bash
   git status
   ```

**Solution 2: Initialize a Git Repository**

If the directory is not yet a Git repository, initialize it:

```bash
git init
```

This creates a new `.git` directory with all necessary Git metadata.

**Solution 3: Verify Repository Structure**

Check that the `.git` directory exists in your project:

```bash
# On macOS/Linux
ls -la

# On Windows PowerShell
Get-ChildItem -Force
```

You should see a `.git` folder in the output. If it does not appear, run `git init`.

**Prevention:**

- Always navigate to your project directory before running Git commands
- Use `git status` to verify you are in a Git repository
- Be aware of your current working directory when executing shell commands
- Use absolute paths when scripting Git commands to avoid directory confusion

---

### Cannot lock ref

**When it happens:** Git returns an error message like "error: cannot lock ref 'refs/heads/branch-name'" when attempting to create, update, or delete a branch or tag.

**Causes:**
- A lock file exists from a previous Git operation that did not complete properly
- Concurrent Git operations are trying to modify the same reference
- Filesystem permissions issues preventing Git from writing to the repository
- Corrupted Git repository references

**Quick Fix:**

Remove the lock file manually:

```bash
rm .git/refs/heads/branch-name.lock
```

Replace `branch-name` with the actual branch name mentioned in the error.

**Detailed Solution:**

**Solution 1: Remove Lock File**

1. Identify the lock file path from the error message

2. Remove the lock file:
   ```bash
   rm .git/refs/heads/branch-name.lock
   ```

3. Try your Git operation again:
   ```bash
   git branch -D branch-name
   ```

**Solution 2: Run Git Garbage Collection**

1. Clean up and optimize your repository:
   ```bash
   git gc
   ```

2. If that does not work, force it:
   ```bash
   git gc --aggressive
   ```

3. Try your Git operation again

**Solution 3: Check Filesystem Permissions**

1. Verify you have write permissions to the repository:
   ```bash
   ls -la .git/refs/heads/
   ```

2. Fix permissions if needed:
   ```bash
   chmod 755 .git/refs/heads/
   ```

**Solution 4: Remove All Stale Lock Files**

1. Find all lock files in the repository:
   ```bash
   find .git -name "*.lock" -type f
   ```

2. Remove all lock files:
   ```bash
   find .git -name "*.lock" -type f -delete
   ```

3. Run Git garbage collection:
   ```bash
   git gc
   ```

**Prevention:**

- Avoid interrupting Git operations (do not force-quit or kill processes)
- Ensure only one Git operation runs on a repository at a time
- Maintain proper filesystem permissions on your repository
- Regularly run `git gc` to maintain repository health

---

### src refspec main does not match any

**When it happens:** You attempt to push to GitHub for the first time, but Git returns an error like "error: src refspec main does not match any" or "fatal: The current branch master has no upstream branch."

**Causes:**
- You have not made any commits yet, so there is no branch to push
- You are trying to push a branch that does not exist in your local repository
- You initialized a repository but have not committed any files

**Quick Fix:**

Make your first commit and create the default branch:

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

**Detailed Solution:**

**Solution 1: Make Initial Commit (For New Projects)**

1. Check your current status:
   ```bash
   git status
   ```

2. Add all files to staging:
   ```bash
   git add .
   ```

3. Create your first commit:
   ```bash
   git commit -m "Initial commit"
   ```

4. Push to create the remote branch:
   ```bash
   git push -u origin main
   ```

   Note: Replace `main` with `master` if your repository uses that as the default branch.

**Solution 2: Check Your Current Branch**

1. See what branch you are on:
   ```bash
   git branch
   ```

2. If you are on a branch that does not exist remotely, create it:
   ```bash
   git push -u origin your-branch-name
   ```

**Solution 3: Verify Remote Configuration**

1. Check your remote:
   ```bash
   git remote -v
   ```

2. Make sure origin is set correctly:
   ```bash
   git remote add origin https://github.com/username/repository.git
   ```

**Prevention:**

- Always make an initial commit before pushing
- Use `git status` to verify you have commits before pushing
- Clearly understand your repository's default branch (`main` or `master`)
- Add meaningful files to your initial commit (README, code, etc.)

---

### Branch Does Not Exist

**When it happens:** You attempt to checkout or push to a branch that does not exist in your repository. Git returns an error like "error: pathspec 'branch-name' did not match any file(s) known to git" or "fatal: A branch named 'branch-name' does not exist."

**Causes:**
- You typed the branch name incorrectly
- The branch was deleted and you are trying to checkout it
- The branch exists on the remote but not on your local machine
- You are trying to push to a branch that does not exist yet

**Quick Fix:**

If the branch exists on remote, fetch it:

```bash
git fetch origin
git checkout branch-name
```

**Detailed Solution:**

**Solution 1: Checkout a Remote Branch**

1. Fetch all remote branches:
   ```bash
   git fetch origin
   ```

2. List all branches (local and remote):
   ```bash
   git branch -a
   ```

3. Checkout the branch:
   ```bash
   git checkout branch-name
   ```

**Solution 2: Create a New Branch Locally**

If the branch does not exist anywhere:

1. Create a new branch from your current location:
   ```bash
   git checkout -b new-branch-name
   ```

   Or with newer Git versions:
   ```bash
   git switch -c new-branch-name
   ```

2. Make changes and commit

3. Push to create it on remote:
   ```bash
   git push -u origin new-branch-name
   ```

**Solution 3: Check Branch Names**

1. See all local branches:
   ```bash
   git branch
   ```

2. See all remote branches:
   ```bash
   git branch -r
   ```

3. See all branches (local and remote):
   ```bash
   git branch -a
   ```

**Prevention:**

- Always verify the correct branch name before checking out
- Use tab completion or copy the exact branch name
- Use `git branch -a` to see available branches before attempting to checkout
- Communicate with your team about branch naming conventions

---

## Commit & Work in Progress Errors

### Committed to the Wrong Branch

**When it happens:** You realize that you just committed your changes to the wrong branch (usually `main` or `master` instead of a feature branch). This is one of the most common beginner mistakes.

**Causes:**
- You forgot to create a feature branch before starting work
- You were on the wrong branch and did not notice
- You switched branches mid-work and forgot which branch you were on

**Quick Fix:**

Move your commit to a new branch in 3 steps:

```bash
git branch my-feature
git reset --soft origin/main
git checkout my-feature
```

**Detailed Solution:**

**Solution 1: Move Commit to New Branch (Recommended)**

This is the cleanest way to fix the problem:

1. Create a new branch pointing to your current commit:
   ```bash
   git branch my-feature
   ```

2. Reset your current branch to its original state (without losing work):
   ```bash
   git reset --soft origin/main
   ```

   Note: Replace `main` with the branch name you are on (could be `master`)

3. Switch to your new branch:
   ```bash
   git checkout my-feature
   ```

4. Now you can continue working on your feature branch and push it normally:
   ```bash
   git push -u origin my-feature
   ```

**Solution 2: If You Already Pushed to Wrong Branch**

If you already pushed to the wrong branch (like `main`):

1. Create a new branch from your current location:
   ```bash
   git branch my-feature
   ```

2. Reset the wrong branch to the remote state:
   ```bash
   git reset --hard origin/main
   ```

3. Switch to your feature branch:
   ```bash
   git checkout my-feature
   ```

4. Force push to undo the wrong push (only if you have permission):
   ```bash
   git push -f origin main
   ```

Warning: Be very careful with force push. Only do this if the branch is not shared with others.

**Solution 3: Using Cherry-pick (Alternative)**

If you prefer a different approach:

1. Note your current commit hash:
   ```bash
   git log -1
   ```

2. Create a new branch:
   ```bash
   git checkout -b my-feature
   ```

3. Go back to main and reset:
   ```bash
   git checkout main
   git reset --hard origin/main
   ```

4. Return to your feature branch to continue:
   ```bash
   git checkout my-feature
   ```

**Prevention:**

- Always check which branch you are on before starting work:
  ```bash
  git status
  ```

- Create your feature branch before making any changes
- Use a Git GUI tool that prominently displays the current branch
- Set up a prompt that shows your current branch
- Follow your team's branch naming convention

---

### Forgot to Add Files to Commit

**When it happens:** You made a commit, but you forgot to stage an important file. The file is not included in your commit and you realize this after committing.

**Causes:**
- You used `git commit -m "message"` without `git add` first
- You forgot to add new files before committing
- You thought `git add .` included a file, but it did not

**Quick Fix:**

Use `git commit --amend` to add files to the last commit:

```bash
git add forgotten-file.txt
git commit --amend --no-edit
```

The `--no-edit` flag keeps your original commit message.

**Detailed Solution:**

**Solution 1: Add to Last Commit (If Not Pushed)**

If you have not pushed yet:

1. Stage the forgotten file:
   ```bash
   git add forgotten-file.txt
   ```

2. Amend the last commit:
   ```bash
   git commit --amend --no-edit
   ```

3. Verify the file is included:
   ```bash
   git log -1 --name-status
   ```

**Solution 2: Add Multiple Forgotten Files**

1. Add all forgotten files:
   ```bash
   git add file1.txt file2.txt file3.txt
   ```

2. Amend the commit:
   ```bash
   git commit --amend --no-edit
   ```

**Solution 3: If Already Pushed**

If you already pushed the incomplete commit:

1. Add the forgotten file locally:
   ```bash
   git add forgotten-file.txt
   git commit -m "Add forgotten file"
   ```

2. Push the new commit:
   ```bash
   git push origin branch-name
   ```

**Solution 4: Create New Commit (Safest for Shared Branches)**

For shared branches where others might have pulled:

1. Add the file:
   ```bash
   git add forgotten-file.txt
   ```

2. Create a new commit:
   ```bash
   git commit -m "Add missing file from previous commit"
   ```

3. Push:
   ```bash
   git push origin branch-name
   ```

**Prevention:**

- Always review what you are committing:
  ```bash
  git status
  git diff --staged
  ```

- Use interactive staging to see all changes:
  ```bash
  git add -p
  ```

- Create a pre-commit hook that checks for forgotten files
- Make commits frequently with small, focused changes

---

### Wrong Commit Message

**When it happens:** You committed with a typo or unclear message and want to change it. This is easy to fix if you have not pushed yet.

**Causes:**
- Typo in the commit message
- Incomplete or unclear message
- Wrong formatting that does not follow team conventions

**Quick Fix:**

If not pushed yet, amend the message:

```bash
git commit --amend -m "Correct commit message"
```

**Detailed Solution:**

**Solution 1: Amend Last Commit Message (Not Pushed)**

1. Correct the message:
   ```bash
   git commit --amend -m "Your corrected message"
   ```

2. Verify the change:
   ```bash
   git log -1
   ```

**Solution 2: Amend and Edit in Editor**

If you want to edit with your text editor:

```bash
git commit --amend
```

This opens your configured editor where you can edit the message.

**Solution 3: If Already Pushed**

If you already pushed, you can still fix it, but it requires force push:

1. Amend locally:
   ```bash
   git commit --amend -m "Corrected message"
   ```

2. Force push to update remote:
   ```bash
   git push --force-with-lease origin branch-name
   ```

Warning: Only do this if your branch is not shared with others.

**Solution 4: For Shared/Main Branches**

Create a new commit instead:

```bash
git revert HEAD
git commit -m "Correct message explaining previous commit"
```

**Prevention:**

- Review your message before committing:
  ```bash
  git commit -v
  ```

- Use a template for commit messages
- Follow your team's commit message conventions
- Use meaningful, descriptive messages
- Keep messages short but informative (50 characters or less for summary)

---

### Accidentally Committed Sensitive Data

**When it happens:** You committed a file containing sensitive information like passwords, API keys, `.env` files, or private credentials. This is a security issue that must be fixed immediately.

**Causes:**
- Forgot to add sensitive files to .gitignore
- Did not realize a file contained sensitive data
- Copied configuration files without removing secrets
- Environmental variables accidentally committed

**Critical:** Never push branches with sensitive data to remote repositories. If you already pushed, you must immediately:
1. Rotate all exposed credentials
2. Remove from Git history
3. Notify security team

**Quick Fix (Before Pushing):**

Do not push. Instead, undo the commit:

```bash
git reset --soft HEAD~1
rm sensitive-file.env
git add .gitignore
git commit -m "Remove sensitive data"
```

**Detailed Solution:**

**Solution 1: Before Pushing (Safest)**

1. Realize the mistake immediately after committing:
   ```bash
   git status
   git log -1
   ```

2. Undo the commit without losing work:
   ```bash
   git reset --soft HEAD~1
   ```

3. Remove the sensitive file from staging:
   ```bash
   git reset HEAD sensitive-file.env
   ```

4. Add the file to .gitignore:
   ```bash
   echo "sensitive-file.env" >> .gitignore
   ```

5. Create a new commit without sensitive data:
   ```bash
   git add .gitignore
   git commit -m "Add sensitive files to gitignore"
   ```

6. Verify the file is not tracked:
   ```bash
   git status
   ```

**Solution 2: Remove from Pushed Commit**

If you already pushed sensitive data:

1. Immediately rotate all credentials/passwords in the exposed file

2. Remove the file from entire history using BFG:
   ```bash
   git lfs install
   bfg --delete-files sensitive-file.env
   git reflog expire --expire=now --all
   git gc --prune=now --aggressive
   git push --force origin branch-name
   ```

3. Add the file to .gitignore:
   ```bash
   echo "sensitive-file.env" >> .gitignore
   git add .gitignore
   git commit -m "Protect sensitive files"
   git push origin branch-name
   ```

**Solution 3: Using Git filter-branch (Alternative)**

If BFG is not available:

```bash
git filter-branch --tree-filter 'rm -f sensitive-file.env' HEAD
git push --force origin branch-name
```

**Solution 4: For .env Files**

Create a template for team members:

1. Create `.env.example`:
   ```bash
   DATABASE_URL=your_database_url_here
   API_KEY=your_api_key_here
   SECRET_TOKEN=your_token_here
   ```

2. Add to .gitignore:
   ```bash
   echo ".env" >> .gitignore
   echo ".env.local" >> .gitignore
   ```

3. Commit the template:
   ```bash
   git add .env.example .gitignore
   git commit -m "Add env template and ignore sensitive files"
   ```

**Prevention - Critical Security Practice:**

1. Create .gitignore before any commits:
   ```bash
   # Standard sensitive files
   echo ".env" >> .gitignore
   echo ".env.local" >> .gitignore
   echo ".env.*.local" >> .gitignore
   echo "*.key" >> .gitignore
   echo "*.pem" >> .gitignore
   echo "secrets.json" >> .gitignore
   ```

2. Use environment variables instead of files:
   ```bash
   # Instead of hardcoding, use:
   require('dotenv').config();
   const apiKey = process.env.API_KEY;
   ```

3. Set up a pre-commit hook to prevent commits with secrets

4. Audit your repository regularly for sensitive data

5. Use organization-wide .gitignore template

6. Train team members on security best practices

---

## Merge & History Errors

### fatal: refusing to merge unrelated histories

**When it happens:** You attempt to merge or pull from a branch that has an inconsistent commit history. This commonly occurs when combining two separate projects or when histories have diverged significantly.

**Causes:**
- Merging two unrelated projects into a single branch
- Pulling from a branch with a completely different commit history
- Repository was recreated or reset, creating an unrelated history

**Quick Fix:**

Allow merging of unrelated histories:

```bash
git pull origin master --allow-unrelated-histories
```

Replace `master` with your target branch name if different.

**Detailed Solution:**

**Solution 1: Merge with Allow-Unrelated-Histories Flag**

1. Run the pull command with the flag:
   ```bash
   git pull origin branch-name --allow-unrelated-histories
   ```

2. If conflicts arise, resolve them using standard Git conflict resolution

3. Complete the merge:
   ```bash
   git add .
   git commit -m "Merge unrelated histories"
   git push origin branch-name
   ```

**Solution 2: Manual Merge with Conflict Resolution**

1. Unstage all existing commits:
   ```bash
   git reset HEAD~
   ```

2. Stash your local changes:
   ```bash
   git stash
   ```

3. Clean your working tree:
   ```bash
   git status
   ```

4. Pull the remote branch:
   ```bash
   git pull origin branch-name
   ```

5. Pop your stashed changes:
   ```bash
   git stash pop
   ```

6. Resolve any conflicts that appear (see Merge Conflicts section)

7. Commit your changes:
   ```bash
   git add .
   git commit -m "Merge with resolved conflicts"
   git push origin branch-name
   ```

**Prevention:**

- Avoid recreating or resetting repository history unnecessarily
- Keep branching structure consistent within a project
- Use `git log` to understand commit history before merging
- Communicate with team members before performing major merge operations

---

### Merge Conflicts

**When it happens:** You attempt to merge or pull changes, but Git cannot automatically reconcile differences between two versions of the same file. Git returns an error message like "CONFLICT (content): Merge conflict in <fileName>" or "Automatic merge failed; fix conflicts and then commit the result."

**Causes:**
- Two developers modified the same lines in a file
- One developer deleted a file while another modified it
- Large structural changes to the codebase from different branches
- Rebasing or pulling without committing local changes

**Quick Fix:**

Resolve conflicts manually in your editor and complete the merge:

```bash
# Edit conflicted files and resolve issues
git add .
git commit -m "Resolve merge conflicts"
git push origin branch-name
```

**Detailed Solution:**

**Solution 1: Identify Conflicts**

1. After seeing a merge conflict error, check the status:
   ```bash
   git status
   ```

2. Open the conflicted file(s) in your editor. You will see markers like:
   ```
   <<<<<<< HEAD
   Your current branch content
   =======
   Incoming branch content
   >>>>>>> branch-name
   ```

**Solution 2: Resolve Conflicts Manually**

1. Edit each conflicted file and decide which changes to keep:
   - Keep your changes: Remove the markers and incoming content
   - Keep incoming changes: Remove the markers and your content
   - Keep both: Remove the markers but keep both contents

2. Example of resolved conflict:
   ```
   # Original conflicted section
   <<<<<<< HEAD
   Feature A implementation
   =======
   Feature B implementation
   >>>>>>> feature-branch

   # Resolved to include both
   Feature A implementation
   Feature B implementation
   ```

3. Stage the resolved files:
   ```bash
   git add .
   ```

4. Complete the merge:
   ```bash
   git commit -m "Resolve merge conflicts"
   ```

**Solution 3: Use Git Tools to Identify Conflicts**

1. See commits that conflict:
   ```bash
   git log --merge
   ```

2. See differences between branches:
   ```bash
   git diff
   ```

3. See specific conflicts:
   ```bash
   git diff --name-only --diff-filter=U
   ```

**Solution 4: Abort the Merge**

If you want to start over:

```bash
git merge --abort
```

This returns your branch to the state before the merge began.

**Prevention:**

- Pull regularly from the remote branch to stay in sync
- Communicate with team members about who is working on which files
- Use feature branches to isolate changes
- Keep commits small and focused
- Run tests before merging to catch issues early

---

### Cannot Pull with Uncommitted Changes

**When it happens:** You attempt to pull from a remote branch, but Git returns an error because you have uncommitted changes in your working directory that would be overwritten. The error message appears as "error: Your local changes to the following files would be overwritten by merge" or "error: Entry '<fileName>' not uptodate. Cannot merge."

**Causes:**
- You have modified files that are also changed in the remote branch
- You have staged changes that conflict with incoming changes
- You forgot to commit your local changes before pulling

**Quick Fix:**

Stash your changes, pull, and reapply them:

```bash
git stash
git pull origin branch-name
git stash pop
```

**Detailed Solution:**

**Solution 1: Stash and Reapply Changes**

1. Stash your uncommitted changes:
   ```bash
   git stash
   ```

2. Pull the latest changes from remote:
   ```bash
   git pull origin branch-name
   ```

3. Reapply your stashed changes:
   ```bash
   git stash pop
   ```

4. If conflicts arise, resolve them manually and then:
   ```bash
   git add .
   git commit -m "Merge stashed changes with latest updates"
   ```

**Solution 2: Commit Your Changes First**

If you want to keep your changes in the history:

1. Commit your local changes:
   ```bash
   git add .
   git commit -m "Your descriptive commit message"
   ```

2. Pull the latest changes:
   ```bash
   git pull origin branch-name
   ```

3. If conflicts arise, resolve them and commit

**Solution 3: Discard Local Changes**

If you want to discard your local changes and just get the latest version:

1. Discard all local changes:
   ```bash
   git checkout -- .
   ```

2. Pull the latest changes:
   ```bash
   git pull origin branch-name
   ```

**Solution 4: Discard Changes in Specific Files**

If you only want to discard changes in certain files:

```bash
git checkout -- path/to/file.txt
```

**Prevention:**

- Commit or stash your changes before pulling
- Check `git status` before pulling to see what changes you have
- Use `git fetch` to check for changes without merging: `git fetch origin`
- Pull regularly to avoid large divergences from the remote branch
- Communicate with your team to avoid working on the same files simultaneously

---

### Entry Would Be Overwritten by Merge

**When it happens:** You attempt to merge or pull, but Git detects that you have staged changes that would be overwritten by the incoming merge. The error message appears as "error: Entry '<fileName>' would be overwritten by merge. Cannot merge. (Changes in staging area)."

**Causes:**
- You have staged changes using `git add` that conflict with the merge
- You have uncommitted changes in the index that would be overwritten
- You ran `git add` but did not commit the changes before pulling

**Quick Fix:**

Unstage your changes and stash them:

```bash
git reset
git stash
git pull origin branch-name
```

**Detailed Solution:**

**Solution 1: Unstage and Stash Changes**

1. Reset the staging area without losing changes:
   ```bash
   git reset
   ```

2. Stash your changes:
   ```bash
   git stash
   ```

3. Pull the latest changes:
   ```bash
   git pull origin branch-name
   ```

4. Reapply your stashed changes:
   ```bash
   git stash pop
   ```

5. Resolve any conflicts and commit

**Solution 2: Commit Staged Changes First**

1. Commit your staged changes:
   ```bash
   git commit -m "Work in progress"
   ```

2. Pull the latest changes:
   ```bash
   git pull origin branch-name
   ```

3. Resolve any conflicts if they arise

**Solution 3: Discard Staged Changes**

If you do not need your staged changes:

1. Reset the staging area:
   ```bash
   git reset --hard
   ```

2. Pull the latest changes:
   ```bash
   git pull origin branch-name
   ```

Warning: Using `--hard` will discard all uncommitted changes.

**Prevention:**

- Commit your work before pulling
- Check what is staged: `git diff --cached`
- Use `git fetch` before `git merge` to check for conflicts first
- Create meaningful commits frequently to keep your history clean
- Avoid staging large amounts of unreviewed code

---

## Detached HEAD State

**When it happens:** You see a message like "You are in 'detached HEAD' state" when you attempt to view or manipulate commit history. This occurs when you check out a specific commit instead of a branch, leaving HEAD pointing directly to a commit rather than a branch reference.

**Why it happens:**
- You checked out a specific commit hash: `git checkout abc123def`
- You checked out a tag: `git checkout v1.0.0`
- You checked out a remote branch directly
- A rebase operation left you in a detached state

**Important:** This is not an error. Detached HEAD is a valid Git state that allows you to explore history and make experimental changes without affecting any branch.

**Quick Fix:**

If you want to return to a branch:

```bash
git checkout branch-name
```

Or with newer Git versions:

```bash
git switch branch-name
```

**Detailed Solution:**

**Solution 1: Return to Previous Branch (Discard Changes)**

If you accidentally entered detached HEAD state and want to go back:

1. Check which branch you want to return to:
   ```bash
   git branch
   ```

2. Return to the branch:
   ```bash
   git checkout branch-name
   ```

3. Any uncommitted changes you made in detached HEAD state will be preserved in your working directory.

**Solution 2: Save Changes Made in Detached HEAD State**

If you made commits while in detached HEAD state and want to keep them:

1. Create a new branch at your current position:
   ```bash
   git checkout -b new-branch-name
   ```

   Or with newer Git:
   ```bash
   git switch -c new-branch-name
   ```

2. Push your new branch:
   ```bash
   git push origin new-branch-name
   ```

3. Open a pull request to merge your changes into the target branch

**Solution 3: Recover Lost Commits from Detached HEAD**

If you lost track of commits made in detached HEAD state:

1. View your recent Git activity:
   ```bash
   git reflog
   ```

2. Find the commit hash you want to recover

3. Create a new branch from that commit:
   ```bash
   git checkout -b recovery-branch commit-hash
   ```

**Solution 4: Cherry-Pick Specific Commits**

If you only want to keep specific commits from detached HEAD work:

1. First, return to your main branch:
   ```bash
   git checkout main
   ```

2. Cherry-pick the commits you want:
   ```bash
   git cherry-pick commit-hash-1
   git cherry-pick commit-hash-2
   ```

**Understanding Detached HEAD:**

In normal operation, HEAD points to a branch name. When you make a new commit, the branch reference updates to point to it:

```
HEAD -> main -> latest-commit
```

In detached HEAD state, HEAD points directly to a specific commit:

```
HEAD -> specific-commit (no branch reference)
```

**Prevention:**

- Avoid checking out specific commit hashes unless you have a specific reason
- Checkout branches instead: `git checkout -b branch-name` to create and switch to a branch
- If you need to review old code, use `git show commit-hash` instead of checking out
- Use tags for releases and important points in history, but create a branch before making changes to tagged commits
- Ensure you are on a branch before making commits: `git status` will tell you if you are in detached HEAD state

---

## Push & Pull Errors

### failed to push some refs to

**When it happens:** You attempt to push code to a remote repository, but the push fails. This is one of the most common Git errors and occurs when your local branch is behind the remote branch or when there are conflicting changes.

**Causes:**
- Remote repository contains commits that your local branch does not have
- Another developer has pushed to the same branch
- Your local branch has diverged from the remote branch
- Pre-push hooks are preventing the push

**Quick Fix:**

Pull the latest changes and then push:

```bash
git pull origin branch-name
git push origin branch-name
```

**Detailed Solution:**

**Solution 1: Sync Before Pushing**

When you see `[rejected]` or `non-fast-forward` errors:

1. First, pull the latest changes from the remote:
   ```bash
   git pull origin branch-name
   ```

2. If conflicts occur, resolve them manually in your editor

3. Stage and commit the merged changes:
   ```bash
   git add .
   git commit -m "Merge remote changes"
   ```

4. Push your changes:
   ```bash
   git push origin branch-name
   ```

**Solution 2: Rebase Before Pushing**

Using rebase is cleaner than merge if you prefer a linear history:

1. Pull with rebase:
   ```bash
   git pull --rebase origin branch-name
   ```

2. If conflicts occur, resolve them in your editor

3. Continue the rebase:
   ```bash
   git rebase --continue
   ```

   Or abort if needed:
   ```bash
   git rebase --abort
   ```

4. Push your changes:
   ```bash
   git push origin branch-name
   ```

**Solution 3: Force Push (Use with Caution)**

Only use force push if you are certain about overwriting remote changes and have communicated with your team:

```bash
git push -f origin branch-name
```

Or use a safer variant:

```bash
git push --force-with-lease origin branch-name
```

Warning: Using `--force` can overwrite other developers' work. Use only when absolutely necessary and after team discussion.

**Solution 4: Handle Pre-Push Hooks**

If push hooks are blocking the push, check for hook scripts:

1. Locate git hooks:
   ```bash
   cat .git/hooks/pre-push
   ```

2. Review the hook to understand why it is blocking the push

3. Fix any issues identified by the hook (failing tests, linting errors, etc.)

4. Retry the push:
   ```bash
   git push origin branch-name
   ```

**Prevention:**

- Pull regularly from the remote branch to stay in sync: `git pull origin branch-name`
- Use `git fetch` before pushing to check for remote changes: `git fetch origin`
- Communicate with team members about who is working on which branch
- Avoid long periods without pulling from the remote branch
- Keep your local branch updated before starting new work
- Use branch protection rules to prevent accidental force pushes

---

### Updates Were Rejected (Non-Fast-Forward)

**When it happens:** You attempt to push your changes, but Git returns an error like "! [rejected] branch-name -> branch-name (non-fast-forward)" or "failed to push some refs to." This indicates that your branch is behind the remote branch.

**Causes:**
- Another developer has pushed new commits to the same branch
- Your local branch diverged from the remote branch
- You have not pulled the latest changes before pushing

**Quick Fix:**

Pull the latest changes before pushing:

```bash
git pull origin branch-name
git push origin branch-name
```

**Detailed Solution:**

**Solution 1: Fast-Forward Your Branch**

1. Fetch the latest changes:
   ```bash
   git fetch origin
   ```

2. Pull and merge the latest changes:
   ```bash
   git pull origin branch-name
   ```

3. Push your changes:
   ```bash
   git push origin branch-name
   ```

**Solution 2: Rebase Your Changes**

For a cleaner history:

1. Fetch the latest changes:
   ```bash
   git fetch origin
   ```

2. Rebase your changes on top of the remote branch:
   ```bash
   git rebase origin/branch-name
   ```

3. Push your changes:
   ```bash
   git push origin branch-name
   ```

**Solution 3: Check the Divergence**

To understand what has changed:

1. See the differences between your branch and remote:
   ```bash
   git log --oneline branch-name..origin/branch-name
   ```

2. View the commits you are ahead by:
   ```bash
   git log --oneline origin/branch-name..branch-name
   ```

**Prevention:**

- Always pull before pushing: `git pull origin branch-name` then `git push origin branch-name`
- Check the status of your branch: `git status`
- Use `git fetch` regularly to see what has changed remotely
- Communicate with your team about who is pushing to shared branches
- Keep commits small and push frequently to reduce merge complexity

---

## File Size & Content Errors

### File Exceeds GitHub's Size Limit

**When it happens:** You attempt to push to GitHub, but Git returns an error like "remote: error: File foo is 501.00 MB; this exceeds GitHub's file size limit of 100.00 MB." This indicates you are trying to push a file larger than GitHub's 100MB limit.

**Causes:**
- You committed a large binary file (video, image, database dump, etc.)
- You committed a build artifact or dependency folder that should be ignored
- You committed a log file or other large temporary file
- The file was added to Git history before being added to .gitignore

**Quick Fix:**

Use Git Large File Storage (Git LFS):

```bash
git lfs install
git lfs track "*.large-extension"
git add .gitattributes
git add your-large-file
git commit -m "Add large file with LFS"
git push origin branch-name
```

**Detailed Solution:**

**Solution 1: Use Git LFS (Recommended)**

1. Install Git LFS:
   ```bash
   git lfs install
   ```

2. Track large files with a pattern:
   ```bash
   git lfs track "*.mp4"
   git lfs track "*.psd"
   ```

3. Commit the .gitattributes file:
   ```bash
   git add .gitattributes
   git commit -m "Configure Git LFS for large files"
   ```

4. Add your large files:
   ```bash
   git add large-file.mp4
   git commit -m "Add large video file"
   git push origin branch-name
   ```

**Solution 2: Remove Large File from History**

If you already committed the large file, you must remove it from Git history:

1. Install BFG Repo-Cleaner (easier than git filter-branch):
   ```bash
   # On macOS with Homebrew
   brew install bfg
   
   # Or download from https://rtyley.github.io/bfg-repo-cleaner/
   ```

2. Run BFG to remove the large file:
   ```bash
   bfg --delete-files large-file.mp4
   ```

3. Clean up the repository:
   ```bash
   git reflog expire --expire=now --all && git gc --prune=now --aggressive
   ```

4. Force push the cleaned repository:
   ```bash
   git push --force origin branch-name
   ```

**Solution 3: Use git filter-branch**

Alternative if BFG is not available:

1. Remove the file from all history:
   ```bash
   git filter-branch --tree-filter 'rm -f large-file.mp4' HEAD
   ```

2. Clean up:
   ```bash
   git reflog expire --expire=now --all && git gc --prune=now --aggressive
   ```

3. Force push:
   ```bash
   git push --force origin branch-name
   ```

**Solution 4: Add to .gitignore and Continue**

For future prevention:

1. Add the file pattern to .gitignore:
   ```bash
   echo "*.mp4" >> .gitignore
   echo "node_modules/" >> .gitignore
   echo ".DS_Store" >> .gitignore
   ```

2. Commit the changes:
   ```bash
   git add .gitignore
   git commit -m "Update gitignore to exclude large files"
   ```

**Prevention:**

- Add build artifacts and dependencies to .gitignore before committing
- Set up Git LFS for your project if working with large files
- Review your .gitignore regularly to ensure it covers all unnecessary files
- Use `git add --dry-run` to verify what will be staged before committing
- Keep your repository clean by not committing temporary or generated files
- Document what file types should be tracked with Git LFS

---

## Rebase Errors

### Cannot Rebase with Uncommitted Changes

**When it happens:** You attempt to rebase your branch, but Git returns an error like "Cannot rebase: You have uncommitted changes" or "error: cannot rebase: you have unstaged changes."

**Causes:**
- You have modified files that have not been staged
- You have staged changes that have not been committed
- You have untracked files that might conflict
- You are attempting to rebase without a clean working tree

**Quick Fix:**

Commit or stash your changes before rebasing:

```bash
git stash
git rebase origin/branch-name
git stash pop
```

**Detailed Solution:**

**Solution 1: Stash Changes and Rebase**

1. Stash your uncommitted changes:
   ```bash
   git stash
   ```

2. Perform the rebase:
   ```bash
   git rebase origin/branch-name
   ```

3. If the rebase completes successfully, reapply your changes:
   ```bash
   git stash pop
   ```

4. If conflicts occur, resolve them and run:
   ```bash
   git add .
   git rebase --continue
   ```

**Solution 2: Commit Your Changes First**

If your changes are important and should be part of the history:

1. Stage your changes:
   ```bash
   git add .
   ```

2. Commit them:
   ```bash
   git commit -m "Work in progress before rebase"
   ```

3. Perform the rebase:
   ```bash
   git rebase origin/branch-name
   ```

4. Resolve any conflicts that arise:
   ```bash
   git add .
   git rebase --continue
   ```

**Solution 3: Discard Changes and Rebase**

If you do not need your uncommitted changes:

1. Discard all changes:
   ```bash
   git checkout -- .
   ```

2. Perform the rebase:
   ```bash
   git rebase origin/branch-name
   ```

**Solution 4: Handle Rebase Conflicts**

If conflicts occur during rebase:

1. Resolve the conflicted files in your editor

2. Stage the resolved files:
   ```bash
   git add .
   ```

3. Continue the rebase:
   ```bash
   git rebase --continue
   ```

   Or abort and start over:
   ```bash
   git rebase --abort
   ```

4. After successful rebase, push:
   ```bash
   git push origin branch-name
   ```

**Solution 5: Undo a Failed Rebase**

If something goes wrong during rebase:

1. Abort the rebase immediately:
   ```bash
   git rebase --abort
   ```

2. Return to the state before rebase:
   ```bash
   git reset --hard ORIG_HEAD
   ```

3. Try again after fixing the issue

**Prevention:**

- Always have a clean working tree before rebasing: `git status`
- Commit your work frequently so you do not have large uncommitted changes
- Use `git fetch` to get the latest changes before rebasing
- Communicate with team members before rebasing shared branches
- Ensure tests pass before rebasing to avoid introducing bugs
- Use `git rebase --dry-run` to see what will happen before actually rebasing

---

## Best Practices for Avoiding Typical Git Errors

1. **Pull before you push:** Always sync with remote changes before attempting to push.

2. **Use descriptive commit messages:** Clear messages help identify issues when reviewing history.

3. **Commit frequently:** Smaller, logical commits are easier to manage and troubleshoot.

4. **Keep your branch synchronized:** Pull regularly to avoid large divergences.

5. **Review before pushing:** Use `git status` and `git diff` to verify your changes.

6. **Document your remotes:** Know what each remote points to by running `git remote -v`.

7. **Use SSH over HTTPS when possible:** Avoids storing credentials in command history.

8. **Test before pushing:** Run tests and linting locally before pushing to shared branches.

9. **Communicate with your team:** Let others know when you are working on shared branches.

10. **Keep Git and related tools updated:** Ensure you have the latest security patches and features.

11. **Use .gitignore effectively:** Prevent accidental commits of build artifacts, dependencies, and sensitive files.

12. **Set up pre-commit hooks:** Automate checks like linting and testing before commits are made.

13. **Check your branch before committing:** Always know which branch you are on using `git status`.

14. **Review changes before staging:** Use `git diff` to see exactly what you are committing.

15. **Create feature branches:** Never work directly on main or master. Always create a feature branch.

---

## Quick Reference Cheat Sheet

### Essential Commands for Beginners

```bash
# Check current status
git status

# See what changed
git diff

# Stage changes
git add filename.txt      # Specific file
git add .                 # All changes

# Commit changes
git commit -m "Your message"

# Create and switch to branch
git checkout -b feature-name
git switch -c feature-name  # Newer syntax

# Switch to existing branch
git checkout branch-name
git switch branch-name      # Newer syntax

# Pull latest changes
git pull origin branch-name

# Push your changes
git push origin branch-name

# View commit history
git log --oneline

# Check which branch you are on
git branch

# See all branches (local and remote)
git branch -a
```

### Emergency Commands

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (lose changes)
git reset --hard HEAD~1

# Stash work temporarily
git stash

# Get stashed work back
git stash pop

# Discard all local changes
git checkout -- .

# Discard changes in specific file
git checkout -- filename.txt

# Undo a push (use with caution)
git push --force-with-lease origin branch-name
```

---

## Additional Resources

For more information about Git, refer to the official Git documentation:
- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Help Documentation](https://docs.github.com/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
- [Git Large File Storage](https://git-lfs.github.com/)
- [Oh Shit, Git!?!](https://ohshitgit.com/) - Beginner-friendly emergency solutions