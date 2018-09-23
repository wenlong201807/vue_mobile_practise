import Vue from 'vue'

// 创建store 状态管理
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 在cart中，应该把每个商品，存储为一个对象{ id , count}
    cart: [], // 购物车的数组
    aa: 10
  },
  mutations: {
    addToCar (state, goods) {
      // 将商品添加到购物车
      // 如果购物车中，之前曾经有这条商品，则只更新数量即可，如果曾经没有，则直接push
      let flag = false
      state.cart.some(item => {
        if (item.id === goods.id) {
          // 如果找到了对应的商品，则直接更新数量
          item.count += goods.count
          flag = true
          // 终止后续循环
          return true
        }
        // 如果没有找到，则直接push到购物车中
        if (!flag) {
          state.cart.push(goods)
        }
      })
    }
  },
  getters: {}
})

// export default storee
