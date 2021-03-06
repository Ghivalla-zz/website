require("dotenv").config();
import i18nConfig from "./i18n-config";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://fonts.googleapis.com/css?family=Roboto&display=swap",
        rel: "stylesheet"
      }
    ]
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  router: {
    middleware: ["parse-env"]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    {
      src: "~/assets/sass/main.sass",
      lang: "sass"
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/a11y-keyboard-border.js", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: process.env.GA_ID
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ["nuxt-i18n", i18nConfig],
    "@nuxtjs/style-resources",
    "nuxt-i18n",
    [
      "@nuxtjs/robots",
      [
        {
          UserAgent: "*",
          Allow: "/"
        },
        {
          Disallow: "/contact/success"
        },
        {
          Disallow: "/fr/contact/succes"
        }
      ]
    ]
  ],
  styleResources: {
    sass: ["./assets/sass/_vars.sass", "./assets/_mixins.sass"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.txt$/,
        loader: "raw-loader",
        exclude: /(node_modules)/
      });
    }
  }
};
