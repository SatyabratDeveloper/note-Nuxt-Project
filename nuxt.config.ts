// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/tailwind.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    // modules: [
    //     // ...
    //     [
    //       '@pinia/nuxt',
    //       {
    //         autoImports: [
    //           // automatically imports `defineStore`
    //           'defineStore', // import { defineStore } from 'pinia'
    //           // automatically imports `defineStore` as `definePiniaStore`
    //           ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    //         ],
    //       },
    //     ],
    // ],
});
