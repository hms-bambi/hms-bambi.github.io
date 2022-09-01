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
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
  ],
  themeConfig: {

    socialLinks: [
      { icon: "github", link: "https://github.com/hms-bambi" }
    ],

    logo: "/logo.svg",

    nav: [
      { text: "Contact", link: "/contact" },
      { text: "Portfolio", link: "/portfolio" },
      { text: "Team", link: "/team" },
    ],

    editLink: {
      pattern: "https://github.com/hms-bambi/hms-bambi.github.io/edit/main/src/:path"
    }

  }
}

export default config;
