// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/tw.css'],

  routeRules: {
    '/admin/**': { ssr: false },
  },

  modules: ['@nuxtjs/tailwindcss'],

  // set config with NUXT_<desired-config>
  // convert camelCase to SCREAMING_SNAKE_CASE
  // eg. NUXT_PUBLIC_BASE_URL
  runtimeConfig: {
    siteState: process.env.NODE_ENV,
    public: {
      apiEndpoint: '',
      gaMeasurmentId: '',
    },
  },

  experimental: {
    inlineSSRStyles: false,
  },
});
