import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/tw.css'],

  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    siteState: process.env.NODE_ENV,
    public: {
      apiEndpoint: '',
    },
  },
});
