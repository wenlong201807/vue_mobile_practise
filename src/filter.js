import Vue from 'vue'
import moment from 'moment'

// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, formatSelf = 'YYYY-MM-DD HH:mm:ss') {
  // 在过滤器的处理函数中，最后，必须return一个东西，这样，才是一个合法的过滤器
  // console.log(da)
  return moment(dataStr).format(formatSelf)
})
