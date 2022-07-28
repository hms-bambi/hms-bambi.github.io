function svgDataHref(emoji) {
  const svg = `\
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <text y=".9em" font-size="90">${emoji}</text>
</svg>
`
  return "data:image/svg+xml," + encodeURIComponent(svg);
}
/**
 * ref: https://vitepress.vuejs.org/config/introduction.html
 *
 * @type {import('vitepress').UserConfig}
 */
const config = {
  lang: "en-US",
  title: "HMS Bambi",
  description: "A collection of Harvard Medical School scientists interested in applying our technical skills to support local minority-owned/serving organizations.",
  head: [
    ["link", { rel: "icon", href: svgDataHref('🦌') }]
  ]
}

export default config;
