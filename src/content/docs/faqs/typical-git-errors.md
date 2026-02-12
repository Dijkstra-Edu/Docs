---
title: Common Git Errors
description: Quick fixes for the Git errors Dijkstra contributors hit most often, with links to deeper resources.
---

# Common Git Errors (Quick Guide)

This page is a **troubleshooting cheat sheet** for common Git errors contributors hit while working on Dijkstra projects.  
Each section gives:

- What the error looks like
- The most likely cause
- A short "Quick fix"
- Links to official / well‑known docs if you need more depth

> If you are completely new to Git, start with the official Git book's first two chapters before using this page:  
> https://git-scm.com/book/en/v2

---

## 1. `fatal: not a git repository`

**What you see**

```bash
fatal: not a git repository (or any of the parent directories): .git
```

**Most likely cause**

You're running Git commands in a folder that is **not** a Git repo (no `.git` folder), or you're in the wrong directory.

**Quick fix**

1. Go to your project folder (the one you cloned):

   ```bash
   cd /path/to/your/dijkstra-project
   ```

2. Check that it's a Git repo:

   ```bash
   git status
   ```

3. If this is a **new** project folder (not cloned), initialize Git:

   ```bash
   git init
   ```

**More details**

- https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository

---

## 2. `fatal: repository '…' not found`

**What you see**

```bash
fatal: repository 'https://github.com/Dijkstra-Edu/SomeRepo.git/' not found
```

**Most likely causes**

- The URL is wrong (typo, wrong org/repo name, or trailing slash)
- You don't have access (private repo and you're not added)
- You're using HTTPS without proper auth or token

**Quick fix**

1. Verify the URL by copying it directly from GitHub:

   ```bash
   git remote -v
   git remote set-url origin https://github.com/Dijkstra-Edu/CorrectRepo.git
   ```

2. If the repo is **private**, make sure you:

   - Are a member of the Dijkstra‑Edu org
   - Have logged in / configured your credentials (PAT or SSH)

3. Try cloning again after fixing the URL / permissions.

**More details**

- GitHub: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

---

## 3. `Permission denied (publickey)`

**What you see**

```bash
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
```

**Most likely cause**

You're using the SSH URL (`git@github.com:...`) but GitHub **doesn't recognize your SSH key**.

**Quick fix**

1. Check if you already have an SSH key:

   ```bash
   ls ~/.ssh
   ```

   Look for `id_rsa.pub`, `id_ed25519.pub`, etc.

2. If you don't have one, generate a key:

   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

3. Add your key to the SSH agent and to GitHub:  
   https://docs.github.com/en/authentication/connecting-to-github-with-ssh

4. Test the connection:

   ```bash
   ssh -T git@github.com
   ```

**More details**

- GitHub: https://docs.github.com/en/authentication/troubleshooting-ssh

---

## 4. `src refspec main does not match any`

**What you see**

```bash
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/Dijkstra-Edu/SomeRepo.git'
```

**Most likely causes**

- You haven't made **any commit** yet (empty repo)
- Your branch name is **not** `main` (e.g. it's `master` or something else)

**Quick fix**

1. Check your current branch:

   ```bash
   git branch
   ```

2. If there are **no commits yet**, create an initial one:

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

3. Push using the correct branch name:

   ```bash
   git push -u origin main       # if your branch is main
   # or
   git push -u origin master     # if your branch is master
   ```

**More details**

- Atlassian: https://www.atlassian.com/git/tutorials/setting-up-a-repository

---

## 5. `failed to push some refs` / `(non-fast-forward)`

**What you see**

```bash
! [rejected] main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/Dijkstra-Edu/SomeRepo.git'
```

**Most likely cause**

Someone else has pushed to the remote branch, so your local branch is **behind**. Git is preventing you from overwriting remote history.

**Quick fix (recommended)**

1. Pull remote changes and merge or rebase:

   ```bash
   git pull origin main           # or your branch name
   # fix any merge conflicts if they appear
   git push origin main
   ```

2. If you prefer a linear history (and know what you're doing):

   ```bash
   git pull --rebase origin main
   # resolve conflicts if any, then
   git push origin main
   ```

3. **Avoid `git push -f`** unless a maintainer explicitly asks you to use it.

**More details**

- Atlassian: https://www.atlassian.com/git/tutorials/syncing/git-push
- GitHub: https://docs.github.com/en/get-started/using-git/about-git-rebase

---

## 6. Merge conflicts

**What you see**

```bash
Auto-merging src/... 
CONFLICT (content): Merge conflict in src/SomeFile.js
Automatic merge failed; fix conflicts and then commit the result.
```

**Most likely cause**

Git tried to merge two changes to the **same part** of a file (your work vs remote / another branch), and it can't decide which to keep.

**Quick fix**

1. See which files are conflicted:

   ```bash
   git status
   ```

2. Open each conflicted file in your editor. Look for markers like:

   ```txt
   <<<<<<< HEAD
   your version
   =======
   incoming version
   >>>>>>> origin/main
   ```

3. Manually edit the file to keep the correct content (yours, theirs, or a combination), then remove the conflict markers.

4. When done:

   ```bash
   git add path/to/file
   git commit -m "Resolve merge conflicts"
   git push origin your-branch
   ```

**More details**

- Git book: https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging
- GitHub: https://docs.github.com/en/pull-requests/collaborating-on-pull-requests/addressing-merge-conflicts

---

## 7. `Your local changes would be overwritten by merge` / cannot pull with uncommitted changes

**What you see**

```bash
error: Your local changes to the following files would be overwritten by merge:
  src/SomeFile.tsx
Please commit your changes or stash them before you merge.
```

**Most likely cause**

You have **uncommitted local changes** that conflict with the incoming changes from the remote branch.

**Quick fixes**

Option A – stash, pull, re‑apply:

```bash
git stash
git pull origin your-branch
git stash pop
# resolve any conflicts, then
git add .
git commit -m "Merge remote changes and local work"
git push origin your-branch
```

Option B – commit, then pull:

```bash
git add .
git commit -m "Work in progress"
git pull origin your-branch
# resolve conflicts if needed
git push origin your-branch
```

**More details**

- Atlassian: https://www.atlassian.com/git/tutorials/using-branches/git-merge

---

## 8. Accidental commits to the wrong branch (e.g. `main`)

**What happens**

You did some work and committed it on `main` instead of a feature branch.

**Quick fix (if not pushed yet)**

1. Create a new branch from your current state:

   ```bash
   git branch feature/my-change
   ```

2. Reset `main` back to the remote version:

   ```bash
   git reset --hard origin/main
   ```

3. Switch to your feature branch and continue:

   ```bash
   git checkout feature/my-change
   ```

4. Push your feature branch and open a PR:

   ```bash
   git push -u origin feature/my-change
   ```

> If you **already pushed** to `main`, talk to a maintainer before using `git push --force`. Force pushes can break other contributors' work.

**More details**

- Pro Git: https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified

---

## 9. Detached HEAD (seeing "You are in 'detached HEAD' state")

**What you see**

```txt
You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make…
```

**Most likely cause**

You checked out a **specific commit or tag** instead of a branch (e.g. `git checkout <commit-hash>`).

**Quick fixes**

- To just get back to your normal branch:

  ```bash
  git checkout main          # or another branch
  ```

- If you made commits in detached HEAD and want to keep them:

  ```bash
  git checkout -b feature/from-detached
  git push -u origin feature/from-detached
  ```

**More details**

- Git book: https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection

---

## 10. File too large for GitHub (`File exceeds GitHub's file size limit`)

**What you see**

```bash
remote: error: File some-big-file.mp4 is 150.00 MB; this exceeds GitHub's file size limit of 100.00 MB
```

**Most likely cause**

You committed a **large binary** (video, dataset, build artifact) directly into the repo.

**Quick fix (if not pushed yet)**

1. Undo the last commit but keep your changes:

   ```bash
   git reset --soft HEAD~1
   ```

2. Remove the large file from Git tracking:

   ```bash
   git rm --cached path/to/big-file.mp4
   ```

3. Add it to `.gitignore`, then commit again:

   ```bash
   echo "path/to/big-file.mp4" >> .gitignore
   git add .gitignore
   git commit -m "Remove large file from Git history"
   ```

**For already pushed secrets / large files**  
Talk to a maintainer; cleaning history safely may require tools like **BFG** or `git filter-repo`.

**More details**

- GitHub: https://docs.github.com/en/repositories/working-with-files/managing-large-files
- Git LFS: https://git-lfs.github.com/

---

## 11. `fatal: remote origin already exists`

**What you see**

```bash
fatal: remote origin already exists.
```

**Most likely cause**

You're trying to add a remote named `origin` but one already exists in your repo.

**Quick fix**

1. Check your current remotes:

   ```bash
   git remote -v
   ```

2. If you want to change the URL:

   ```bash
   git remote set-url origin https://github.com/Dijkstra-Edu/NewRepo.git
   ```

3. Or remove and re-add it:

   ```bash
   git remote remove origin
   git remote add origin https://github.com/Dijkstra-Edu/NewRepo.git
   ```

**More details**

- Git book: https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes

---

## 12. Recommended learning resources

If you keep hitting Git issues, these are excellent places to build a stronger foundation:

- Official Git docs: https://git-scm.com/doc  
- Pro Git (free online book): https://git-scm.com/book/en/v2  
- Atlassian Git Tutorials (very beginner‑friendly): https://www.atlassian.com/git/tutorials  
- GitHub Docs (Git + GitHub workflows): https://docs.github.com/

For Dijkstra‑specific workflows (branch naming, PR process, etc.), refer to this repository's **Contributing Guide** and project‑specific docs.
