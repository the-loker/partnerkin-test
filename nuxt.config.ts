import { resolve } from 'path';

const isProduction = process.env.NODE_ENV === 'production';

export default defineNuxtConfig({
  ssr: true,
  srcDir: 'client',
  serverDir: 'server',

  dir: {
    app: 'app/index',
    layouts: 'app/layouts',
    public: '../public',
  },

  modules: [
    [
      '@pinia/nuxt',
      { autoImports: ['defineStore', 'storeToRefs', 'acceptHMRUpdate'] },
    ],
  ],

  alias: {
    '@': resolve(__dirname, './client'),
    '@widgets': resolve(__dirname, './client/widgets'),
    '@entities': resolve(__dirname, './client/entities'),
    '@shared': resolve(__dirname, './client/shared'),
  },

  runtimeConfig: {
    API_URI: process.env.API_URI,
    API_KEY: process.env.API_KEY,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/app/styles/_fonts.scss" as *;
            @use "@/app/styles/_variables.scss" as *;
            @use "@/app/styles/_mixins.scss" as *;
          `,
        },
      },
    },
  },

  css: ['~/app/styles/index.scss'],
  devtools: { enabled: !isProduction },
  compatibilityDate: '2024-11-01',
});
