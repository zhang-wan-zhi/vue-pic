import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import Vuex from "vuex";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";








axios.defaults.baseURL = "http://121.196.153.34:8088/api/";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http = axios;
Vue.use(Vuex);
Vue.use(mavonEditor);



const store = new Vuex.Store({
  state: {
    lists: [],
    isSignIn: 0,//0未登录，1admin，2游客
  },
  mutations: {
    increment(state , n) {
      state.lists = n;
    },
    changeIsSignIn(state, n) {
      state.isSignIn = n
    }
  },
});

new Vue({
  router,
  render: (h) => h(App),
  store: store,
}).$mount("#app");
