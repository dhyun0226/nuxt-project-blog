// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: { enabled: false },
  modules: ["@nuxthq/ui", "@nuxtjs/tailwindcss", "@pinia/nuxt", "@vueuse/nuxt", "nuxt-lodash"],
});
