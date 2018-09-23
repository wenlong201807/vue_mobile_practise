<template>
  <div class="goodsdesc">
    <h2 class="title">{{info.title}}{{id}}</h2>
    <hr>
    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
// 导入mui 从而支持初始化 数字框
// import mui from '../../plugin/mui/js/mui.min.js'
export default {
  name: 'GoodsDesc',
  data () {
    return {
      info: {}// 商品的描述信息
    }
  },
  props: ['id'], // 接收父组件传递过来的库存量
  watch: {

  },
  created () {
    this.getGoodsDesc()
  },
  mounted () {
    // 当组件挂在到页面中之后，初始化数字框

  },
  methods: {
    async getGoodsDesc () {
      const {data} = await this.$http.get('/goodsdesc/' + this.id)
      // console.log(data)
      // if(data.status === 0)return this.info =data.message[0]
      this.info = data
    }
  }
}
</script>

<style lang="scss" >
.goodsdesc {
  padding: 0 10px;
  .title {
    font-size: 16px;
    margin: 10px 0;
    text-align: center;
    color: blue;
  }
  .content {
    width: 100%;
  }
}
</style>
