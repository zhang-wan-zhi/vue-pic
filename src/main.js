import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import Vuex from "vuex";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";


axios.defaults.baseURL = "http://localhost:8081/api/";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.use(Vuex);
Vue.use(mavonEditor)

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
  store: store,
}).$mount("#app");
