---
title: Contribution Guidelines
description: Steps and rules for contributing to Dijkstra projects.
---

We welcome contributions from everyone, whether you're a first-time contributor or an experienced developer. 

Kindly go through this document diligently. Following these steps and guidelines would help you contribute effectively. 

### Getting Started !
---
We welcome:
- bug fixes
- documentation improvements
- test additions
- refactoring (with justification)
- feature additions (via issues first)

#### Working on issues 

We have several repositories you can check out, depending on your interests. 

You can look through issues tagged with "help wanted" or claim any other unnassigned issues. 

#### Bug Fixes or New Features

Caught a bug ? Maybe you thought of something innovative. Raise an issue and begin contributing!

#### Instructions:
Please open an issue before:
- introducing new dependencies
- modifying core architecture
- changing coding conventions
- making large refactors
- adding major features

### Contribution Guidelines:
---
1. **Fork the repository**.

2. **Clone your fork**:
   ```bash
   git clone https://github.com/<YOUR_USERNAME>/<repository>.git

   cd <repository>
   ```
3. **Create a new branch** for your feature/fix:
   ```bash
   git checkout -b feat/your-feature-name
   ```
4. **Make your changes** locally.

5. **Test everything** before committing:
   - Lint your code.
   - Ensure your feature works as expected.

6. **Commit with a meaningful message**:
   ```bash
   git commit -m "feat: added feature XYZ"
   ```
7. **Push your branch** to your fork:
   ```bash
   git push origin feat/your-feature-name
   ```
8. **Open a Pull Request** (PR) to the `main` branch of the upstream repo.

9. **The PR description must include:**
    - changes made
    - files modified/added
    - a reference to the issue it addresses

### Best Practices 
---
- Submit carefully tested code
- Be responsive to feedback on pull requests. 
- Add screenshots or demos where applicable.
- Document new features and update relevant sections.
- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format for commit messages.

### Usage of AI: Policies and Guidelines
---
You can use any tool to help you understand Dijkstra's codebase and write good code. However, you are always required to understand and explain the changes propose. The answer to "Why X change" should never be "The AI did it, I'm not sure."

#### AI Code
- Make sure you are familiar with the codebase you are working on. This would help you write better prompts and validate the output i.e if you do use an LLM

- Split the changes into coherent commits, even if an LLM generates them all in one go. 

- Validate LLM outputs thoroughly before opening a PR. Test the code and make sure it's aligned with the requested feature or bug fix. 

#### AI Communication
- Explain your reasoning, be it a PR or a code comment. Don't prompt an LLM to re-describe what can already be seen from the code. 

- Do not misinterpret your work. Verify that everything you write is accurate. 

### Collaboration
---
- Join Dijkstra's [Discord](https://discord.gg/Ct82yF3KAU) Server
- Communicate with fellow contributors, the maintainers in a friendly manner
- Ask questions. Be as proactive as possible.


#### Happy coding! Thank you for contributing to Dijkstra!