/**
 * ref: https://vitepress.vuejs.org/config/introduction.html
 *
 * @type {import('vitepress').UserConfig}
 */
const config = {
  lang: "en-US",
  title: "HMS Bambi",
  description: "A collection of Harvard Medical School scientists interested in volunteering our technical skills to support local minority-owned/serving organizations.",
  head: [
    ["link", { rel: "icon", href: '/logo.svg' }],
    ["link", { rel: "stylesheet", href: '/index.css' }],
  ],
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hms-bambi' }
    ],
    logo: '/logo.svg',
    nav: [
      { text: 'Contact', link: '/contact' },
      { text: 'Team', link: '/team' },
      { text: 'Testimonials', link: '/testimonials' },
    ],
    editLink: {
      pattern: 'https://github.com/hms-bambi/hms-bambi.github.io/edit/main/src/:path'
    }
  }
}

export default config;
