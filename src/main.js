import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './plugins/element.js'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import 'normalize.css'


// 请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  console.log('请求错误')
  return Promise.reject(error)
})
// 响应数据拦截器
axios.interceptors.response.use(function (value) {
  return value.data;
}, function (error) {
  return Promise.reject(error)
})

//axios.defaults.baseURL = 'http://localhost:3030';
//axios.defaults.proxy = {
//  host: 'http://localhost',
//  port: 3030
// };
Vue.prototype.axios = axios
Vue.prototype.cookies = VueCookies

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
