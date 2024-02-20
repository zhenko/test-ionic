import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* translate */
import { createI18n, useI18n } from "vue-i18n";
import { languages, defaultLocale } from "./i18n";

// console.log("languages", languages);
const localeStorageLang = localStorage.getItem("lang");

const messages = Object.assign(languages);

const i18n = createI18n({
  legacy: false,
  locale: localeStorageLang || defaultLocale,
  fallbackLocale: "en",
  messages,
});

/* !!!!!!translate */

import { IonicVue } from "@ionic/vue";

import Layout from "@/components/Layout.vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/custom.css";
import './registerServiceWorker'

const app = createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  },
})
  .use(IonicVue)
  .use(router)
  .use(store)
  .use(i18n);
app.component("layout", Layout);

router.isReady().then(() => {
  app.mount("#app");
});
