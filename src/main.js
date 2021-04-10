import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";

import heightFix from "./pages/heightFix";

Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
  router: new Router({
    routes: [
      {
        path: "/",
        component: heightFix,
      },
    ],
  }),
  render: (h) => h(App),
}).$mount("#app");
