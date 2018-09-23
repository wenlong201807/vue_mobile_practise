import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入全部组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 导入mui样式，js
import './plugin/mui/css/mui.min.css'
import './plugin/mui/css/icons-extra.css'

// 导入全局过滤器
import './filter.js'

// 配置axios
import axios from 'axios'
Vue.prototype.$http = axios.create({
  // 全局配置根路径
  baseURL: 'http://192.168.0.124:3699/'
})
// this.$http.get('http://192.168.0.124:3699/api/getlunbo')

Vue.use(MintUI)
Vue.use(ElementUI)

// /* 加载hotcss响应式布局 */
// import '@/plugin/hotcss.js'
// import '@/plugin/iscroll.js'
// 公共样式***重置样式
// import '@/style/reset.scss'
// import '@/style/mixin.scss'

// 导入全局样式
// import './style/css/global.css'

// 按需导入的方式
// import { Button } from 'mint-ui'
// console.log(Button.name)//mt-button
