import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import style from "./styles/style.css";
import resetStyle from "./styles/reset.css";

createApp(App).use(store).use(router, style, resetStyle).mount("#app");
