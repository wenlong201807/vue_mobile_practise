<template>
  <div class="goodscomment">
    <!-- <h2>商品评论页面----{{id}}</h2> -->
    <cmtbox :newsid="id"></cmtbox>
  </div>
</template>

<script>
// 导入mui 从而支持初始化 数字框
// import mui from '../../plugin/mui/js/mui.min.js'
import cmtbox from '../sub_components/commom'
export default {
  name: 'GoodsComment',
  data () {
    return {
      info: {}// 商品的描述信息
    }
  },
  props: ['id'], // 接收父组件传递过来的库存量
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {

  },
  components: {
    cmtbox
  }

}
</script>

<style lang="scss" >
</style>
