import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import http from "axios";

import '../api/mock.js'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$http = http;


// router.beforeEach((to, from, next) => {
//   store.commit('getToken')
//   const token = store.state.user.token
//   if (!token && to.name !== 'login') {
//     next({ name: 'login' })
//   } else if (token && to.name === 'login') {
//     next({ name: 'home' })
//   }else {
//     next()
//   }
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
