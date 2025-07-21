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
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                      { label: 'Authoring Content', slug: 'guides/authoring-content' },
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