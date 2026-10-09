// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Agent Workshop',
  tagline: 'Build a local AI agent with Python and Ollama',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // TODO: set these to wherever the workshop gets hosted.
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Docs-only mode: the workshop is served from the site root.
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AI Agent Workshop',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Workshop',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `AI Agent Workshop. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'powershell'],
        // Setting magicComments replaces the defaults, so the standard
        // highlight comments are repeated here. The diff-* comments mark
        // added (green) and removed (red) lines; see custom.css.
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-diff-add-line',
            line: 'diff-add',
            block: {start: 'diff-add-start', end: 'diff-add-end'},
          },
          {
            className: 'code-block-diff-remove-line',
            line: 'diff-remove',
            block: {start: 'diff-remove-start', end: 'diff-remove-end'},
          },
        ],
      },
    }),
};

export default config;
