export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Super Let's Throw! | Banan Paw In SAR Event",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'chiron-sans-hk-webfont/css/Regular.css' },
    { src: 'chiron-sans-hk-webfont/css/Bold.css' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-i18n'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  i18n: {
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
      },
      {
        name: '繁體中文',
        code: 'zh-hant',
        iso: 'zh-Hant',
        file: 'zh-Hant.js',
      },
      {
        name: '简体中文',
        code: 'zh-hans',
        iso: 'zh-Hans',
        file: 'zh-Hans.js',
      },
      {
        name: '日本語',
        code: 'ja-jp',
        iso: 'ja-JP',
        file: 'ja-JP.js',
      },
    ],
    strategy: 'prefix',
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
  },
}
