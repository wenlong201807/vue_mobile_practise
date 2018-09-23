import Vue from 'vue'
// 创建 store 状态管理
import Vuex from 'vuex'
Vue.use(Vuex)

//  每当初始化项目的时候，就先从localstorge中取一下数据
let car = window.JSON.parse(localStorage.getItem('cart') || '[]')

const store = new Vuex.Store({
  state: {
    // 在cart中，应该把每个商品，存储为一个对象，goods:{id,count,selected,price}
    cart: car // 购物车的数组
  },
  mutations: {
    addToCar (state, goods) {
      // 将商品添加到购物车中
      // 如果购物车中，之前曾经有这条商品，则只更新数量即可；如果曾经没有，则直接push

      let flag = false
      state.cart.some(item => {
        if (item.id === goods.id) {
          // 如果找到了对应的商品，则直接更新数量
          item.count += goods.count
          flag = true
          // 终止后续循环
          return true
        }
      })
      // 如果没有找到，则直接push到购物车中
      if (!flag) {
        state.cart.push(goods)
      }

      // 为了持久化存储购物车的数据，可以把购物车的商品，序列化出来，存储到localstroge中
      localStorage.setItem('cart', window.JSON.stringify(state.cart))
    },
    updateGoodsCount (state, goods) {
      // 根据传递过来的商品的信息，更新购物车中商品的数量
      state.cart.some(item => {
        if (item.id === goods.id) {
          item.count = goods.count
          return true
        }
      })

      // 为了持久化存储购物车的数据，可以把购物车的商品，序列化出来，存储到localstroge中
      localStorage.setItem('cart', window.JSON.stringify(state.cart))
    },
    delFromCart (state, id) {
      // 根据id删除vuex中对应的商品
      state.cart.some((item, i) => {
        if (item.id === id) {
          state.cart.splice(i, 1)
          return true
        }
      })

      // 为了持久化存储购物车的数据，可以把购物车的商品，序列化出来，存储到localstroge中
      localStorage.setItem('cart', window.JSON.stringify(state.cart))
    },
    changeSelectState (state, obj) {
      // 根据提供的obj对象的id 和 selected属性，更改购物车中商品的选中状态
      state.cart.some(item => {
        if (item.id === obj.id) {
          item.selected = obj.selected
          return true
        }
      })

      // 为了持久化存储购物车的数据，可以把购物车的商品，序列化出来，存储到localstroge中
      localStorage.setItem('cart', window.JSON.stringify(state.cart))
    }
  },
  getters: {
    totalcount (state) {
      // 徽标中商品数量
      let c = 0
      // getters的特性，只要依赖的数据变化了，必然会重新计算这个getters的值
      state.cart.forEach(item => (c += item.count))
      return c
    },
    idstr (state) {
      // 获取购物车中所有的商品的id字符串
      let arr = []
      state.cart.forEach(item => arr.push(item.id))
      return arr.join(',')
    },
    countObj (state) {
      // 获取购物车中商品的id和商品的数量的简直对对应关系
      let o = {}
      state.cart.forEach(item => (o[item.id] = item.count))
      return o
      // {id1:count1,id2:count2}
    },
    selectedObj (state) {
      // id与对应是否购选做绑定，默认为选中状态
      let o = {}
      state.cart.forEach(item => {
        o[item.id] = item.selected
      })
      console.log(o)
      return o
    },
    selectedcount (state) {
      // 购选商品的数量
      let cc = 0
      state.cart.forEach(item => {
        // 只有被选中的商品，数量才会加在一起
        if (item.selected) {
          cc += item.count
        }
        return cc
      })
    },
    amount (state) {
      // 总价
      let cc = 0
      state.cart.forEach(item => {
        // 只有被选中的商品，数量才会加在一起
        if (item.selected) {
          cc += item.count * item.price
        }
        return cc
      })
    }
  }
})

export default store
