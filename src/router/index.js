import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Homeuse from '@/views/Homeuse'
import HomeContainer from '@/components/tabbars/HomeContainer'
import MemberContainer from '@/components/tabbars/MemberContainer'
import SearchContainer from '@/components/tabbars/SearchContainer'
import ShopcarContainer from '@/components/tabbars/ShopcarContainer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/h',
      name: 'Home',
      component: Home
    },
    {
      path: '/y',
      name: 'Homeuse',
      component: Homeuse
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HomeContainer',
      component: HomeContainer
    },
    {
      path: '/member',
      name: 'MemberContainer',
      component: MemberContainer
    },
    {
      path: '/search',
      name: 'SearchContainer',
      component: SearchContainer
    },
    {
      path: '/shopcar',
      name: 'ShopcarContainer',
      component: ShopcarContainer
    }
  ],
  linkActiveClass: 'mui-active' // 手动设置 被激活的 路由连接高亮类名
})
