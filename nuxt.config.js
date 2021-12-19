export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'a2-new-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // nuxt-vite
    // 'nuxt-vite',
    // https://github.com/whardier/nuxt-hero-icons
    // '@nuxt-hero-icons/outline/nuxt',
    '@nuxt-hero-icons/solid/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxt/http',
    '@nuxtjs/auth-next',
    'nuxt-validate'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // tailwind
  tailwindcss: {
    cssPath: '~/assets/tailwind.css'
  },

  //  axios
  axios: {
    baseURL: process.env.BASE_URL,
    // proxy: true
  },

  http: {
    // proxyHeaders: false
    baseUrl: process.env.baseUrl
  },

  // vue dev tools confif
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  // environment variables
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL
  },

  // vee-validate
  nuxtValidate: {
    lang: 'en',
    nuxti18n: {
      locale: {
        // 'zh-CN': 'zh_CN'
      }
    }
  },

  /*
   ** Set ssr to false to see the loading indicator - https://nuxtjs.org/docs/2.x/features/rendering-modes
   */
   ssr: false,

   /*
    ** modifying the loading indicator for spa  - https://nuxtjs.org/docs/2.x/features/loading
    */
   loadingIndicator: {
     name: 'chasing-dots',
     color: '#ffae00',
     background: '#32324e'
   }
}
