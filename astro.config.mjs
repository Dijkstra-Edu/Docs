// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Dijkstra Docs',
      logo: {
        src: './public/icon.png',
        alt: 'Dijkstra Logo',
      },
      customCss: ['./src/styles/global.css'],
      plugins: [starlightThemeRapide()],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Dijkstra-Edu',
        },
      ],
      sidebar: [
        {
          label: 'Dijkstra Introduction',
          items: [
            { label: 'Introduction', slug: 'dijkstra-introduction/introduction' },
            { label: 'Mission', slug: 'dijkstra-introduction/mission' },
            { label: 'Approach', slug: 'dijkstra-introduction/approach' },
            { label: 'Philosophy', slug: 'dijkstra-introduction/philosophy' },
            { label: 'Projects and Architecture', slug: 'dijkstra-introduction/projects-and-architecture' },
          ],
        },
        {
          label: 'Getting Started',
          items: [
            { label: 'Start Here', slug: 'getting-started/start-here' },
            {
              label: 'Onboarding',
              items: [
                { label: 'Onboarding Steps', slug: 'getting-started/onboarding/onboarding' },
                {
                  label: 'Setup Guides',
                  items: [
                    { label: 'GitHub', slug: 'getting-started/onboarding/guides/github' },
                    { label: 'LinkedIn', slug: 'getting-started/onboarding/guides/linkedin' },
                    { label: 'Discord', slug: 'getting-started/onboarding/guides/discord' },
                    { label: 'Git', slug: 'getting-started/onboarding/guides/git' },
                    { label: 'Leetcode', slug: 'getting-started/onboarding/guides/leetcode' },
                    { label: 'VS Code', slug: 'getting-started/onboarding/guides/vscode' },
                  ],
                },
                { label: 'Join Dijkstra', slug: 'getting-started/onboarding/join-djikstra' },
                { label: 'Publicise Status', slug: 'getting-started/onboarding/publicise-status' },
              ],
            },
            {
              label: 'Contributors',
              items: [
                { label: 'Prerequisites', slug: 'getting-started/contributors/prerequisistes' },
                { label: 'Contribution Guidelines', slug: 'getting-started/contributors/contribution-guidelines' },
                { label: 'Architectural Guidelines', slug: 'getting-started/contributors/architectural-guidelines' },
                { label: 'Coding Conventions', slug: 'getting-started/contributors/coding-conventions' },
                { label: 'Stylistic Guidelines', slug: 'getting-started/contributors/stylistic-guidelines' },
                { label: 'Process', slug: 'getting-started/contributors/process' },
                {
                  label: 'Examples',
                  items: [
                    { label: 'How to Setup Environment', slug: 'getting-started/contributors/examples/how-to-setup-environment' },
                  ],
                },
              ],
            },
            {
              label: 'Maintainers',
              items: [
                { label: 'Maintenance Guidelines', slug: 'getting-started/maintainers/maintenance-guidelines' },
                {
                  label: 'Examples and Cases',
                  items: [
                    { label: 'How to Review PRs', slug: 'getting-started/maintainers/examples-and-cases/how-to-review-prs' },
                    { label: 'Issue Management', slug: 'getting-started/maintainers/examples-and-cases/issue-management' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Dijkstra Backend',
          items: [
            {
              label: 'DataForge',
              items: [
                { label: 'Introduction', slug: 'dijkstra-backend/dataforge/introduction' },
                { label: 'Postgres Setup', slug: 'dijkstra-backend/dataforge/postgres-setup' },
                {
                  label: 'Setup & Deployment',
                  items: [
                    { label: 'How Deployment Works', slug: 'dijkstra-backend/dataforge/setup-and-deployment/how-deployment-works' },
                    { label: 'How to Run Locally', slug: 'dijkstra-backend/dataforge/setup-and-deployment/how-to-run-locally' },
                    { label: 'How to Test', slug: 'dijkstra-backend/dataforge/setup-and-deployment/how-to-test' },
                  ],
                },
                {
                  label: 'Recreation',
                  items: [
                    { label: 'How to Recreate DataForge', slug: 'dijkstra-backend/dataforge/recreation/how-to-recreate-dataforge' },
                  ],
                },
              ],
            },
            {
              label: 'GitRipper',
              items: [
                { label: 'Introduction', slug: 'dijkstra-backend/gitripper/introduction' },
                {
                  label: 'Setup & Deployment',
                  items: [
                    // { label: 'How Deployment Works', slug: 'dijkstra-backend/gitripper/setup-and-deployment/how-deployment-works' },
                    { label: 'How to Run Locally', slug: 'dijkstra-backend/gitripper/setup-and-deployment/how-to-run-locally' },
                    { label: 'How to Test', slug: 'dijkstra-backend/gitripper/setup-and-deployment/how-to-test' },
                  ],
                },
                // {
                //   label: 'Recreation',
                //   items: [
                //     { label: 'How to Recreate GitRipper', slug: 'dijkstra-backend/gitripper/recreation/how-to-recreate-gitripper' },
                //   ],
                // },
              ],
            },
            {
              label: 'Helios',
              items: [
                { label: 'Introduction', slug: 'dijkstra-backend/helios/introduction' },
                {
                  label: 'Setup & Deployment',
                  items: [
                    // { label: 'How Deployment Works', slug: 'dijkstra-backend/gitripper/setup-and-deployment/how-deployment-works' },
                    { label: 'How to Run Locally', slug: 'dijkstra-backend/helios/setup-and-deployment/how-to-run-locally' },
                    { label: 'How to Test', slug: 'dijkstra-backend/helios/setup-and-deployment/how-to-test' },
                  ],
                },
                // {
                //   label: 'Recreation',
                //   items: [
                //     { label: 'How to Recreate GitRipper', slug: 'dijkstra-backend/gitripper/recreation/how-to-recreate-gitripper' },
                //   ],
                // },
              ],
            },
          ],
        },
        {
          label: 'Dijkstra Frontends',
          items: [
            {
              label: 'Dijkstra Blog',
              items: [
                { label: 'Introduction', slug: 'dijkstra-frontends/dijkstra-blog/introduction' },
                {
                  label: 'Setup & Deployment',
                  items: [
                    { label: 'How Deployment Works', slug: 'dijkstra-frontends/dijkstra-blog/setup-and-deployment/how-deployment-works' },
                    { label: 'How to Run Locally', slug: 'dijkstra-frontends/dijkstra-blog/setup-and-deployment/how-to-run-locally' },
                    { label: 'How to Test', slug: 'dijkstra-frontends/dijkstra-blog/setup-and-deployment/how-to-test' },
                  ],
                },
                {
                  label: 'Recreation',
                  items: [
                    { label: 'How to Recreate Blog', slug: 'dijkstra-frontends/dijkstra-blog/recreation/how-to-recreate-blog' },
                  ],
                },
              ],
            },
            {
              label: 'Dijkstra Companies',
              items: [
                { label: 'Introduction', slug: 'dijkstra-frontends/dijkstra-companies/introduction' },
                {
                  label: 'Setup & Deployment',
                  items: [
                    { label: 'How Deployment Works', slug: 'dijkstra-frontends/dijkstra-companies/setup-and-deployment/how-deployment-works' },
                    { label: 'How to Run Locally', slug: 'dijkstra-frontends/dijkstra-companies/setup-and-deployment/how-to-run-locally' },
                    { label: 'How to Test', slug: 'dijkstra-frontends/dijkstra-companies/setup-and-deployment/how-to-test' },
                  ],
                },
              ],
            },
            {
              label: 'Dijkstra HQ',
              items: [
                { label: 'Introduction', slug: 'dijkstra-frontends/dijkstra-hq/introduction' },
                {
                  label: 'Setup & Deployment',
                  items: [
                    { label: 'How Deployment Works', slug: 'dijkstra-frontends/dijkstra-hq/setup-and-deployment/how-deployment-works' },
                    { label: 'How to Run Locally', slug: 'dijkstra-frontends/dijkstra-hq/setup-and-deployment/how-to-run-locally' },
                    { label: 'How to Test', slug: 'dijkstra-frontends/dijkstra-hq/setup-and-deployment/how-to-test' },
                  ],
                },
              ],
            },
            {
              label: 'Dijkstra University',
              items: [
                { label: 'Introduction', slug: 'dijkstra-frontends/dijkstra-university/introduction' },
                {
                  label: 'Setup & Deployment',
                  items: [
                    { label: 'How Deployment Works', slug: 'dijkstra-frontends/dijkstra-university/setup-and-deployment/how-deployment-works' },
                    { label: 'How to Run Locally', slug: 'dijkstra-frontends/dijkstra-university/setup-and-deployment/how-to-run-locally' },
                    { label: 'How to Test', slug: 'dijkstra-frontends/dijkstra-university/setup-and-deployment/how-to-test' },
                  ],
                },
              ],
            },
            {
              label: 'Dijkstra Web',
              items: [
                { label: 'Introduction', slug: 'dijkstra-frontends/dijkstra-web/introduction' },
                {
                  label: 'Setup & Deployment',
                  items: [
                    { label: 'How Deployment Works', slug: 'dijkstra-frontends/dijkstra-web/setup-and-deployment/how-deployment-works' },
                    { label: 'How to Run Locally', slug: 'dijkstra-frontends/dijkstra-web/setup-and-deployment/how-to-run-locally' },
                    { label: 'How to Test', slug: 'dijkstra-frontends/dijkstra-web/setup-and-deployment/how-to-test' },
                  ],
                },
                {
                  label: 'Recreation',
                  items: [
                    { label: 'How to Recreate Web', slug: 'dijkstra-frontends/dijkstra-web/recreation/how-to-recreate-web' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Community',
          items: [
            { label: 'Code of Conduct', slug: 'community/code-of-conduct' },
            { label: 'Contributor Agreements', slug: 'community/contributor-agreements' },
            { label: 'Governance', slug: 'community/governance' },
            { label: 'License', slug: 'community/license' },
            { label: 'Privacy Policy', slug: 'community/privacy-policy' },
            { label: 'Terms of Service', slug: 'community/terms-of-service' },
          ],
        },
        {
          label: 'FAQs',
          items: [
            { label: 'Common Issues', slug: 'faqs/common-issues' },
            { label: 'Typical Git Errors', slug: 'faqs/typical-git-errors' },
            { label: 'Links & Discussions', slug: 'faqs/links-discussions' },
          ],
        },
        {
          label: 'GSOC 2026',
          items: [
            { label: 'Overview', slug: 'gsoc-2026/overview' },
            { label: 'Project Proposal', slug: 'gsoc-2026/project-proposal' },
            { label: 'Project List', slug: 'gsoc-2026/project-list' },
            {
              label: 'Project List', items: [
                { label: 'iOS Mobile App', slug: 'gsoc-2026/project-list/ios-mobile-app' },
                { label: 'Android Mobile App', slug: 'gsoc-2026/project-list/android-mobile-app' },
                { label: 'Testing Setup', slug: 'gsoc-2026/project-list/testing-setup' },
                //{ label: 'DataForge Cleanup', slug: 'gsoc-2026/project-list/dataforge-cleanup' },
                { label: 'Learning Content', slug: 'gsoc-2026/project-list/learning-content' },
                { label: 'Learning Hub', slug: 'gsoc-2026/project-list/learning-hub' },
                //{ label: 'Verifications Engine', slug: 'gsoc-2026/project-list/verifications-engine' },
                { label: 'Browser Extension', slug: 'gsoc-2026/project-list/browser-extension' },
                { label: 'ENV Locker CLI', slug: 'gsoc-2026/project-list/env-locker-cli' },
                { label: 'Community Improvements', slug: 'gsoc-2026/project-list/community-improvements' },
                { label: 'Student Public Dashboard and Certificate Generator', slug: 'gsoc-2026/project-list/student-dashboard-certificate-generator' },
                { label: 'Archivist, Blog & Post System Implementation', slug: 'gsoc-2026/project-list/blogsystem' },
              ]
            },

          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Authoring Content', slug: 'guides/authoring-content' }
          ],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
