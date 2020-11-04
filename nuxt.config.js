export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Roti House | Indian Restaurant",
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: process.env.npm_package_description || "" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.svg" }],
  },
  /*
   ** Global CSS
   */
  css: ["~/node_modules/vue-multiselect/dist/vue-multiselect.min.css"],
  router: {
    middleware: ["auth"],
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "plugins/owl.js", ssr: false },
    "~/plugins/hello.js",
    "~/plugins/strapi.js",
    { src: "plugins/vue-toastify.js", ssr: false },
    { src: "plugins/currency.js", ssr: false },
    { src: "plugins/vue-multiselect.js", ssr: false },
    { src: "plugins/toggler.js", ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/strapi",
    "@nuxtjs/auth",
    "@nuxtjs/universal-storage",
    "@nuxtjs/toast",
  ],
  toast: {
    position: "top-center",
    theme: "bubble",
    duration: 5000,
    register: [
      // Register custom toasts
      // {
      //   name: 'my-error',
      //   message: 'Oops...Something went wrong',
      //   options: {
      //     type: 'error'
      //   }
      // }
    ],
  },
  strapi: {
    url: "http://localhost:1337",
    entities: ["categories", "dishes", "sliders"],
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/auth/local", method: "post", propertyName: "jwt" },
          logout: false,
          user: { url: "/users/me", method: "get", propertyName: false },
        },
        tokenType: "Bearer",
      },
      google: {
        client_id: "714823495518-a8uauims53ajjvvr0b0roev71okvf8lc.apps.googleusercontent.com",
      },
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "http://localhost:1337",
  },
  purgeCSS: {
    whitelist: ["dark-mode"],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ["gsap"],
  },
};
