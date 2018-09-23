import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Homeuse from '@/views/Homeuse'
import NewsList from '@/components/news/NewsList'
import Newsinfo from '@/components/news/Newsinfo'
import Photolist from '@/components/photos/photolist'
import Goodslist from '@/components/goods/GoodsList'
import Goodsinfo from '@/components/goods/GoodsInfo'
import GoodsDesc from '@/components/goods/GoodsDesc'
import GoodsComment from '@/components/goods/GoodsComment'
import Photoinfo from '@/components/photos/photoinfo'
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
    },
    {
      path: '/home/newslist',
      name: 'Newslist',
      component: NewsList
    },
    {
      path: '/home/photolist',
      name: 'Photolist',
      component: Photolist
    },
    {
      path: '/home/goodslist',
      name: 'Goodslist',
      component: Goodslist
    },
    {
      path: '/home/goodsinfo/:id',
      name: 'Goodsinfo',
      component: Goodsinfo,
      props: true
    },
    {
      path: '/home/goodsdesc/:id',
      name: 'GoodsDesc',
      component: GoodsDesc,
      props: true
    },
    // router.push({ name: 'user', params: { userId }}) // -> /user/123
    {
      path: '/home/goodscomment/:id',
      name: 'GoodsComment',
      component: GoodsComment,
      props: true
    },
    {
      path: '/home/photoinfo/:id',
      name: 'Photoinfo',
      component: Photoinfo,
      props: true
    },
    {
      path: '/home/newsinfo/:id',
      name: 'Newsinfo',
      component: Newsinfo,
      props: true
    }
  ],
  linkActiveClass: 'mui-active' // 手动设置 被激活的 路由连接高亮类名
})
