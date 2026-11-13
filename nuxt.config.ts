// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  spaLoadingTemplate: true,
  devtools: { enabled: true },
  modules: ['nuxt-hydration-gate'],
})
