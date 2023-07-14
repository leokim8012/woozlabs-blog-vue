import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import naive from "naive-ui";
import "@/styles/_core.scss";
import plugins from "@/plugins";

const app = createApp(App);
app.use(naive);
app.use(store).use(router);

app.component(plugins.VueFeather.name, plugins.VueFeather);

app.mount("#app");
