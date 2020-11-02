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
  css: [],
  router: {
    middleware: ["auth"],
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: "plugins/owl.js", ssr: false }, "~/plugins/hello.js", { src: "plugins/vue-toastify.js", ssr: false }],
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
  ],

  strapi: {
    url: "https://api.rotihouselao.com",
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
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "https://api.rotihouselao.com",
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
