<template>
  <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <!-- 监听文本框的change事件，来动态获取选择到的数量 -->
    <input id="test" class="mui-input-numbox" type="number" value="1" ref="nobox" @changed="countChanged" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
// 导入mui 从而支持初始化 数字框
// import mui from '../../plugin/mui/js/mui.min.js'
export default {
  name: 'goodsinfonobox',
  data () {
    return {
    }
  },
  methods: {
    countChanged () {
      // 选择商品的数量
      const val = this.$refs.nobox.value
      // console.log(123, val)
      // 每当nobox子组件的count变化之后，要立即把最新的数量值，传递给goodsinfo父组件，这样
      //   每当我们点击【加入购物车】按钮的时候，就能立即把最新的count值，同步到购物车的徽标中
      // 此处需要子组件传递给父组件
      this.$emit('func', parseInt(val))
    }
  },
  props: ['max'], // 接收父组件传递过来的库存量
  watch: {
    // 使用场景，监听单个的虚拟数据的改变
    max: function (newval, oldval) {
      // 不论外界传递给nobox。vue的max值到底是什么,
      // 最终，最后传递的那个max值，肯定是一个合法的数值；
      console.log('123', newval, '---', oldval)
      // 每当监听到max值的改变，不论这个值是否合法，我们都重新未数字狂，使用js api，来手动设置最大值
      // mui('.mui-numbox').numbox().setOption('max', newval)
    }
  },
  mounted () {
    // 当组件挂在到页面中之后，初始化数字框
    // mui('.mui-numbox').numbox()
  }

}
</script>

<style lang="scss" scoped>
</style>
