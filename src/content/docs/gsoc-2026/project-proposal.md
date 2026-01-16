---
title: Project Proposal Details for Dijkstra GSOC
description: Project Proposal Details for Dijkstra GSOC
---

# Guidelines

This document contains a short guide on how to structure your Google Summer of Code (GSoC) project proposal and how to increase the chance of your project proposal being accepted.

:::tip[A note on AI]{icon="heart"}
We would appreciate if you used your own words when writing GSoC project proposals. It is fine to use LLMs/AI for spellcheck, language correction or translation, but do not rely on AI to write the proposal for you. We will ignore proposals that look like they were *generated* by AI. Please don't submit AI-generated proposals! They won't be accepted, and will just create additional work for us.

We're interested in seeing *your work* and *your thinking*, since *you* are applying to do the project — not the AI!
:::

## Choosing a project

You should start by deciding on which project do you want to work on. You can use our [list of project ideas](/gsoc-2026/project-list/)
as an inspiration, or you can come up with your own project idea. 

:::caution[The (many) projects @Dijkstra]{icon="right-caret"}
We strongly recommend that you go through the various projects and the overall architecture of DIjkstra, found in the [Projects and Architecture](/dijkstra-introduction/projects-and-architecture) page.
:::

If you decide to propose your own project idea, we can most probably proceed if one of the two criteria are met
- It aligns with existing open or planned work within the Project. For example, there are a number of [tracking issues](https://github.com/orgs/Dijkstra-Edu/projects) and [Project Goals](https://github.com/Dijkstra-Edu#tasklist-things-to-do) for ongoing work.
- You can describe clearly the utility of the project to either the Dijkstra Platform, the tooling, the Project itself, or to the community.

We encourage you to think of your own interesting project ideas! There are plenty of things that can be done within Dijkstra and contributors are generally happy to discuss and help you narrow down your thoughts into a concrete proposal. Don't be shy!

## Interacting with Dijkstra's community

If you want to discuss our suggested project ideas or your own idea, you can do so on Dijkstra's Discord Channel. We have a dedicated [#gsoc]() channel for this that you can use. Either try to find a Zulip topic that already discusses the project idea that you are interested in.

Dijkstra has three [organization admins](https://developers.google.com/open-source/gsoc/help/responsibilities) whose goal is to facilitate the communication of potential GSoC contributors and the mentors, and to manage the administration of the GSoC projects:
- Jonathan Samuel ([GitHub](https://github.com/JRS296), [Discord](https://discord.com/jrs296))
- Dellwyn Tennison ([GitHub](https://github.com/happydracula), [Discord](https://discord.com/happydracula))
- Kush Ojha ([GitHub](https://github.com/keri-prog), [Discord](https://discord.com/keri_k))

When communicating on the Dijkstra Discord (and when interacting with the Dijkstra community in general), please remember to be polite and uphold the [Code of Conduct](). Please treat both contributors and mentors alike with respect and avoid spamming.

## Creating the project proposal

Ultimately, the project proposal is the main deciding factor on whether your project will be accepted or not, so make sure that you put energy into making it as good as possible.

The proposal should contain (at least) the following things:
1) A descriptive title of the project that you want to work on
   - Use the same title in the proposal PDF as what you enter in the GSoC dashboard!
2) Information about yourself, including:
   - Description of your programming experience, attained education, university and study programme that you're currently studying, etc. (Your CV/Resume would be great! Ideally both)
   - Link to a portfolio of projects that you have worked on (e.g. a GitHub profile and/or a personal website), as well as a note on a project that you are particularly proud off!
   - Your existing open-source contribution experience. If you have already contributed to some open-source repositories, make sure to include a link to these contributions in your proposal!
   - Contact information, especially e-mail address. Use the same e-mail address in the proposal PDF as the one you enter in the GSoC dashboard/the one with which you logged into GSoC.
3) **Information about your proposed project**. This should be as detailed as possible, see more details [below](#project-information-and-timeline).
4) Information about other commitments that might affect your ability to work on the project during the GSoC period. These can include vacations, exams, other jobs or internships etc. It's not necessarily an issue to have other commitments, but it would be great to know about them in advance, if possible.

## Project information and timeline

This is the most important part of your project proposal. You should include an **abstract** that explains your project in one or two paragraphs, and then a **very detailed description** that explains what exactly do you want to achieve in the proposed project. The proposal should also clearly state the designated mentor(s) for your project (you should get in touch with them before submitting the proposal).

In addition to describing what do you intend to work on in the project, you should also specify the size of the project, according to the GSoC [documentation](https://google.github.io/gsocguides/student/time-management-for-students):
- Small: ~90 hours (roughly 9 hours per week)
- Medium: ~175 hours (roughly 18 hours per week)
- Large: ~350 hours (roughly 35 hours per week)

There are two primary preferred timezones that we operate out of; Indiant Standard Time (IST) and Central European Summer Time (CEST) (CET when daylight savings are not in play). We are open to accomodating other time zones as well! Provided the time frame is a match with the project's mentors.

You should also create a **timeline**: an approximate weekly plan of work and a list of deliverables. Recall that the default project duration is 12 weeks, but it can be [extended](https://google.github.io/gsocguides/student/time-management-for-students) (for medium and large projects) by up to 22 weeks.

- Describe a brief outline of the work that you plan to do, and try to estimate how will the work be split in the individual weeks of the project.
- Define milestones that you intend to achieve in specific weeks (e.g. finish X in week 4, deliver Y in the middle of the project, have a final version prepared one week before the end of the project, etc.).
    - You should focus specifically on the midterm point (week 6), because your mentor(s) will evaluate your progress at this time. You should be slightly more than half done at this moment, and have something reasonable to show.
    - In week 11 (one week before the end of the project), you should consider doing a "code freeze", and spend the last week to polish tests and documentation. 

Of course, it is quite difficult to predict this timeline exactly in advance, and it is not a problem to modify it while the project runs, but try to guesstimate it to the best of your ability.

We've provided a template here to get started.

| Period | GSoC Phase | What I'll aim to accomplish |
|--------|------------|----------------------------|
| May 8 - June 1 | Community Bonding Period | GSoC contributors get to know mentors, read documentation, get up to speed to begin working on their projects |
| June 2 - June 8 | Coding (Week 1) | |
| June 9 - June 15 | Coding (Week 2) | |
| June 16 - June 22 | Coding (Week 3) | |
| June 23 - June 29 | Coding (Week 4) | |
| June 30 - July 5 | Coding (Week 5) | |
| July 6 - July 12 | Coding (Week 6) | |
| July 13 - July 19 | Coding (Week 7) | Midterm evaluation is July 18 |
| July 20 - July 26 | Coding (Week 8) | |
| July 27 - August 3 | Coding (Week 9) | |
| August 4 - August 10 | Coding (Week 10) | Your plan should start to include thinking about documenting the final product around this point. |
| August 11 - August 17 | Coding (Week 11) | |
| August 18 - August 24 | Coding (Week 12) | |
| August 25 - September 1 | Coding (Final week) | |

Furthermore, let us know what is your intended time commitment for working on the project. How many hours per day can you work on it? Are there specific days of the week when you can work on it? Is there some period of time from May to August where you know in advance that you won't be able to work on it? Please include this information in the proposal.

There is a [Community bonding](https://google.github.io/gsocguides/student/how-gsoc-works) period before the contributors start working on their projects. It is designed to help you learn about the community that you're going to contribute to, and to start familiarizing yourself with the code and/or technology of your project. Please include a short description of preparatory work that you intend to work on during this community bonding period (should your project be accepted).

## How to increase your chance of being accepted?

You can demonstrate your dedication (and ability) to work on the selected project proposal by contributing something related to it before your proposal is evaluated. This can encompass e.g. sending a pull request to the relevant repository, fixing a bug, writing documentation, etc. There is no specific template for these kinds of contributions, and it might not be possible to do for all types of projects. You can coordinate with the project mentors to find out if they can suggest some entry-level task for you.

You can also tell us more about your motivation in your proposal. Why did you choose Dijkstra for a GSoC project specifically? What is it about Dijkstra's projects aligns with your interests and goals? Is the specific project that you want to work on sympathetic to you for some reason? We would like to know!

## Don't forget to submit!

You will need to submit your project proposal through the [Google Summer of Code](https://summerofcode.withgoogle.com/) website. Please keep the **deadline** (**8th April 2026**) in mind, as there will be no extensions!

Good luck! :)

## How to decrease your chance of being accepted?

There are some actions and behaviours that will make it much less likely that your application will be considered, so you should avoid these. For example:

- Spamming or harassing mentors or other members of the Dijkstra community.
- Letting AI automatically generate your project proposal (you should put effort in it, don't be lazy!).
- Suggesting unreasonably trivial project proposals, e.g. fixing a typo in Dijkstra's documentation. Remember that even the smallest [project size](https://google.github.io/gsocguides/student/time-management-for-students) should take about 90 hours!


# Summary

So to summarize:

- **Choose a project** - Pick from the [project list](/gsoc-2026/project-list/) or propose your own idea
- **Review Dijkstra** - Study the architecture and existing projects to understand the codebase
- **Connect with the community** - Join Discord, discuss your project idea, and contact potential mentors
- **Write your proposal** with:
  - A descriptive project title
  - Your background:
    - CV/Resume (or both!)
    - Portfolio
    - Note on a project that you proud off!
    - GitHub profile
    - Open-source contributions
    - Contact info
  - Detailed project description:
    - Abstract
    - Detailed Project Information
    - Goals
    - Mentor information
  - Project size (and justification):
    - Small ~90h
    - Medium ~175h
    - Large ~350h
  - Weekly timeline with milestones:
    - Focus on week 6 midterm
    - Week 11 code freeze
  - Your time commitment and availability
  - Community bonding period preparation plans
  - Any other commitments during the GSoC period
- **Make early contributions** - Submit pull requests, fix bugs, or write documentation to demonstrate your commitment
- **Include your motivation** - Explain why you chose Dijkstra and this specific project
- **Submit before the deadline** - Submit through the GSoC website by **April 8, 2026**


:::note
This guide was inspired by https://github.com/python-gsoc/python-gsoc.github.io/blob/main/ApplicationTemplate.md and https://github.com/rust-lang/google-summer-of-code/blob/main/gsoc/proposal-guide.md

Thank you for going before us! :)
:::