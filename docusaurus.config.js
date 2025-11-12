// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to Need for SpeedDocs Reborn',
  tagline: 'This website is aiming to rehost speedrunning documentation for most Need for Speed games that has been shut down by Balathruin himself, creator of the original website. Currently looking for contributors to expand.',
  favicon: 'img/nfsd-logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://xicecreaam.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/nfsd-recreation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xicecreaam', // Usually your GitHub org/user name.
  projectName: 'nfsd-recreation', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/nfsd-logo.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'NFSD',
        logo: {
          alt: 'NFSD logo',
          src: 'img/nfsd-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/nfsd-recreation/ug2', label: 'Underground 2', position: 'left'},
          {to: '/nfsd-recreation/mw05', label: 'Most Wanted (2005)', position: 'left'},
          {to: '/nfsd-recreation/c', label: 'Carbon', position: 'left'},
          {to: '/nfsd-recreation/ps', label: 'ProStreet', position: 'left'},
          {to: '/nfsd-recreation/uc', label: 'Undercover', position: 'left'},
          {to: '/nfsd-recreation/tr', label: 'The Run', position: 'left'},
          {
            href: 'https://linktr.ee/xicecreaam',
            label: 'Linktree',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Black Box Games',
            items: [
              { label: 'Underground 1', to: '/nfsd-recreation/ug1'},
              { label: 'Underground 2', to: '/nfsd-recreation/ug2'},
              { label: 'Most Wanted (2005)', to: '/nfsd-recreation/mw05'},
              { label: 'Carbon', to: '/nfsd-recreation/c'},
              { label: 'ProStreet', to: '/nfsd-recreation/ps'},
              { label: 'Undercover', to: '/nfsd-recreation/uc'},
              { label: 'The Run', to: '/nfsd-recreation/tr'},
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Speedrun.com NFS page',
                href: 'https://www.speedrun.com/series/need_for_speed',
              },
              {
                label: 'NFSR Discord',
                href: 'https://discord.gg/0q21vTfIVQ7xibxy',
              },
            ],
          },
          {
            title: 'Placeholder',
            items: [
              {
                label: 'X',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Need for SpeedDocs Reborn by IceCream.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
