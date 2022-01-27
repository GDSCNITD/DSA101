// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DSA-101',
  tagline: 'DSA for beginners',
  url: 'https://gdscnitd.github.io',
  baseUrl: '/DSA101/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GDSCNITD', // Usually your GitHub org/user name.
  projectName: 'dsa101', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'problems',
          routeBasePath: 'problems',
          include: ['**/*.{md,mdx}'],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/GDSCNITD/DSA101',
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
      navbar: {
        title: 'DSA-101',
        logo: {
          alt: 'DSA101 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/problems/intro', label: 'Problems', position: 'left'},
          {
            href: 'https://github.com/GDSCNITD/DSA101',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://gdsc.community.dev/national-institute-of-technology-nit-delhi/',
            label: 'GDSC Community',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Problems',
            items: [
              {
                label: 'Getting Started',
                to: '/problems/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'GDSC',
                href: 'https://gdsc.community.dev/national-institute-of-technology-nit-delhi/'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/GDSCNITD',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DSA-101, Inc. Built with 💜 by GDSC-NITD.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
