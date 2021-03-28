export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'antd-rir',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '~assets/css/tailwind.pcss',
    // { src: '~assets/main.styl', lang: 'stylus' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    '~/components/templates',
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms',
  ],


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    //
    '@nuxtjs/auth-next',
    '@nuxtjs/universal-storage',
    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // withCredentials: true,
    baseURL: 'http://localhost:9090/api/',
  },

  auth: {
    strategies: {
      local: {
        // scheme: 'refresh',
        token: {
          // type: 'Bearer'
          property: 'token',
          maxAge: 9000,
          name: 'X-Authorization',
        },
        /*
        refreshToken: {
          property: 'refreshToken',
          // data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        */
        user: {
          // autoFetch: false,
          property: 'user',
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post' },
          // refresh: { url: 'auth/refresh', method: 'post' },
          user: { url: 'auth/user', method: 'get' },
          // logout: { url: 'auth/logout', method: 'post' },
        },
        // autoLogout: false
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
