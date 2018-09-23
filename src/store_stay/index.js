import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import actions from './actions'
// import mutations from './mutations'
// import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    AppName: '宝洁快消品移动管理端',
    shopList: [],
    dropList: [], // 下单页面中的初始化数据
    // 在购物车中，把每个商品储存为一个id和数量值的数组集合
    cart: [] // 购物车数组
  },
  // 若是多个页面公用的后台数据，使用actions这种方式请求
  actions: {
    // 进入页面中的后台数据**搜索框中的
    queryShopList (context, q) {
      axios
        .get('http://localhost:3000/enter?_page=1&_limit=5&q=' + q, {})
        .then(res => {
          context.commit('AddShopList', res.data)
        })
    }
  },
  mutations: {
    changeAppName: (state, newName) => {
      state.AppName = newName
    },
    AddShopList (state, list) {
      state.shopList = [...list]
    },
    addDropList (state, list) {
      state.dropList = [...list]
    },
    addToCar (state, goods) {
      // 将商品添加到购物车** 需要做一个小判断，如果购物车中原来有，则只需要添加数量，没有则需要添加id和count
      let flag = false
      state.cart.some(item => {
        if (item.id === goods.id) {
          // 如果找到了对应的商品，则直接更新数量
          item.count += goods.count
          flag = true
          // 终止后续的循环
          return true
        }
      })
      // 如果没找到，则直接push到购物车
      if (!flag) {
        state.cart.push(goods)
      }
    }
  },
  getters: {
    getAppName: state => {
      return state.AppName
    },
    getShopList: state => {
      return state.shopList
    },
    getDropList: state => {
      return state.dropList
    },
    totalcount (state) {
      // 徽标中的商品数量
      let c = 0
      state.cart.forEach(item => (c += item.count))
      return c
    }
  }
})
