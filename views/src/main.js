import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

console.log(process.env)
Vue.config.productionTip = false

// 判断当前环境  // 判断当前设备是否移动端
if (process.env.NODE_ENV !== 'production' && /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
  var VConsole = require('vconsole/dist/vconsole.min.js')
  var vConsole = new VConsole()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
