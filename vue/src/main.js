import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import "./assets/css/base.css";

import "animate.css";

import router from "./plugins/router";

import store from "./plugins/store";

//配置前端baseUrl
Vue.prototype.baseUrl = require('../config/config').active;

new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
