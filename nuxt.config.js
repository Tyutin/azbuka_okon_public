export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'azbuka_okon',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/v-scroll-lock', '@/plugins/v-mask'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/yandex-metrika',
      {
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
      }
    ]
  ],

  styleResources: {
    scss: ['@/assets/scss/colors.scss']
  },

  sitemap: {
    hostname: 'https://окна-ижевск.рф/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
  // server: {
  //   port: 3000,
  //   host: '0.0.0.0'
  // }
}
