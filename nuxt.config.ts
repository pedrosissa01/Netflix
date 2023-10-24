// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-mdi',
  ],
  googleFonts: {
		families: {
			Kanit: [400,500,600,700]
		}
	},
  devtools: { enabled: true }
})
