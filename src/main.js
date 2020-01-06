import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
//导入样式重置文件和rem自适应大小尺寸
import "@/assets/css/reset.css";
import "@/assets/js/rem.js";
//全局导入vant组件及其样式
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
