import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./style/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Vuelidate from "vuelidate";

library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("v-select", vSelect);
Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
