import { createStore } from "vuex";
import authorization from "./modules/authorization";

const store = createStore({
  modules: {
    auth: authorization,
  },
});

export default store;
