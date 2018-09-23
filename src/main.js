import Vue from 'vue'
import App from './App'
import router from '@/router.js'

//  导入全局配置
import '@/globalConfig.js'

// 导入状态管理对象
import store from '@/store.js'

/* eslint-disable */
Vue.config.productionTip = false // disabled-eslint-line

new Vue({
  el: '#app',
  router,
  store,
  render: c => c(App) // 一下两行二选一即可
  // components: { App },
  // template: '<App/>'
})
