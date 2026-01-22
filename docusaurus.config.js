import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Need for SpeedDocs Reborn',
  tagline: 'This website is aiming to rehost speedrunning documentation for most Need for Speed games that has been shut down by Balathruin himself, creator of the original website. Currently looking for contributors to expand.',
  favicon: 'img/nfsd-logo.png',

  future: {
    v4: true,
  },

  url: 'https://xicecreaam.github.io',
  baseUrl: '/nfsd-recreation/',
  organizationName: 'xicecreaam',
  projectName: 'nfsd-recreation',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/nfsd-logo.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'NFSD',
        logo: {
          alt: 'NFSD logo',
          src: 'img/nfsd-logo.png',},
          
        items: [
          {to: '/ug1', label: 'Underground 1', position: 'left' },
          {to: '/ug2', label: 'Underground 2', position: 'left'},
          {to: '/mw05', label: 'Most Wanted (2005)', position: 'left'},
          {to: '/c', label: 'Carbon', position: 'left'},
          {to: '/ps', label: 'ProStreet', position: 'left'},
          {to: '/uc', label: 'Undercover', position: 'left'},
          {to: '/tr', label: 'The Run', position: 'left'},
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
              { label: 'ProStreet', to: '/nfsd-recreation/ps'},
              { label: 'Underground 2', to: '/nfsd-recreation/ug2'},
              { label: 'Undercover', to: '/nfsd-recreation/uc'},
              { label: 'Most Wanted (2005)', to: '/nfsd-recreation/mw05'},
              { label: 'The Run', to: '/nfsd-recreation/tr'},
              { label: 'Carbon', to: '/nfsd-recreation/c'},
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
            title: 'More NFS docs may be',
            items: [
              {
                html: '<span>added if necessary</span>',
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
