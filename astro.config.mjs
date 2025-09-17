// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

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
          customCss: [
              './src/styles/global.css',
          ],
          plugins: [starlightThemeRapide()],
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Dijkstra-Edu' }],
          sidebar: [
            {
                  label: 'Introduction to Dijkstra',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                      { label: 'Authoring Content', slug: 'guides/authoring-content' },
                  ],
              },
              {
                    label: 'Dijkstra Backend',
                    items: [
                        {
                            label: 'DataForge - Main Dijkstra BE',
                            items: [
                                { label: 'Introduction', slug: 'dijkstra-backend/dataforge/introduction' },
                                { label: 'PostGreSQL Setup Guide', slug: 'dijkstra-backend/dataforge/postgres-setup' },
                            ],
                        },
                        {
                            label: 'GitRipper - GitHub Stats Aggregator',
                            items: [
                                { label: 'Endpoints', slug: 'dijkstra-backend/gitripper/introduction' },
                                { label: 'Authentication', slug: 'dijkstra-backend/gitripper/postgres-setup' },
                            ],
                        },
                    ],
                    },

              {
                  label: 'Dijkstra Frontend',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                      { label: 'Authoring Content', slug: 'guides/authoring-content' },
                  ],
              },
              {
                  label: 'Getting Started',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                      { label: 'Authoring Content', slug: 'guides/authoring-content' },
                      { label: 'Join Djikstra', slug: 'guides/join-djikstra' },
                      { label: 'Publicise Your Organization Status', slug: 'guides/publicise-status' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});