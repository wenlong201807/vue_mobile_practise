<template>
  <div class="mui-numbox" data-numbox-min='1' style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <!-- 监听文本框的change事件，来动态获取选择到的数量 -->
    <input id="test" class="mui-input-numbox" type="number" :value="initcount" ref="nobox" @changed="countChanged" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
// 导入mui 从而支持初始化 数字框
// import mui from '../../plugin/mui/js/mui'
import {mapMutations} from 'vuex'
export default {
  name: 'shopcarnobox',
  data () {
    return {
    }
  },
  methods: {
    countChanged () {
      // 选择商品的数量
      const val = parseInt(this.$refs.nobox.value)
      // console.log(val)
      // 调用mutations  方法，更新数量
      this.updateGoodsCount({id: this.id, count: val})
    },
    ...mapMutations(['updateGoodsCount'])
  },
  props: ['initcount', 'id'], // 接收父组件传递过来的库存量

  mounted () {
    // 当组件挂在到页面中之后，初始化数字框
    // mui('.mui-numbox').numbox()
  }

}
</script>

<style lang="scss" scoped>
</style>
