export default {
  changeAppName: (state, newName) => {
    state.AppName = newName
  },
  AddShopList (state, list) {
    state.shopList = [...list]
    // state.shopList.push(...list)
    // Array.prototype.push.apply(state.shopList, list)
    // state.shopList = [...state.shopList, ...list]
  }
}
