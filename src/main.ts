import { createApp } from "vue";
import "./style.css";
import router from './routes';
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "customTheme",
    themes: {
      customTheme: {
        colors: {
          primary: "#A08963",
          secondary: "#3E3F5B",
          success: "#3cd1c2",
          info: "#ffaa2c",
          error: "#f83e70",
        },
      },
    },
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
