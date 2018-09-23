<template>
  <div>
    <!-- <h3>商品列表1</h3> -->
    <!-- 商品列表区域 -->
    <div class="goods_list">

      <router-link tag="div" :to="'/home/goodsinfo/'+item.id" class="goods_item" v-for="item in getlist" :key="item.id">
        <img class="item_img" src="../../assets/phone.jpg" alt="tupian" :title="item.id">
        <h1 class="title">{{item.title}}</h1>
        <div class="info">
          <p class="price">
            <span class="new">￥{{item.sell_price}}</span>
            <span class="old">￥{{item.market_price}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </p>
        </div>
      </router-link>

      <div class="goods_item">
        <img class="item_img" src="../../assets/phone.jpg" alt="">
        <h1 class="title">小米手机note 16G双网通</h1>
        <div class="info">
          <p class="price">
            <span class="new">￥891</span>
            <span class="old">￥1200</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </p>
        </div>
      </div>

      <div class="goods_item">
        <img class="item_img" src="../../assets/phone.jpg" alt="">
        <h1 class="title">小米手机note 16G双网通</h1>
        <div class="info">
          <p class="price">
            <span class="new">￥891</span>
            <span class="old">￥1200</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </p>
        </div>
      </div>

      <mt-button type="danger" @click="getMore" size="large" plain>加载更多</mt-button>
    </div>
  </div>
</template>

<script>
// import mui from '@/plugin/mui/js/mui.js'
export default {
  name: 'Goodslist',
  data () {
    return {
      page: 1, // 默认页面第一页
      getlist: [], // 商品空数组
      isload: false// 节流阀作用，默认为没有加载完毕
    }
  },
  props: [''], // 获取次参数的两种方式{{id}} ++{{$route.params.id}}
  created () {
    this.getGoodsListByList()// 初始化加载数据
  },
  methods: {
    async getGoodsListByList () {
      // const {data} = await this.$http.get('/getgoods?pageindex=' + this.page)
      const {data} = await this.$http.get('/getgoods/' + this.page)
      console.log(data)
      // 当获取到的数据的长度为0，表示数据获取完毕，不能再继续添加
      if (data.length <= 0) {
        // 为true时，表示没有更多的数据可加载了
        this.isload = true
      }
      this.getlist = this.getlist.concat(data)
    },
    getMore () {
      if (this.isload) {
        // return mui.toast('登陆成功', { duration: 'long', type: 'div' })
        return alert('没有更多数据了')
      }
      // 点击加载更多
      this.page++
      this.getGoodsListByList()
    }
  },
  components: {

  }

}
</script>

<style lang="scss" scoped>
.goods_list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  .goods_item {
    width: 48%;
    border: 1px solid #ccc;
    margin: 0 0px 10px;
    border-radius: 5px;
    .item_img {
      width: 90%;
      margin: 5px 5%;
      height: 120px;
    }
    .title {
      margin: 0 10px;
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .price,
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        margin: 0 10px;
      }
      .new {
        color: red;
      }
      .old {
        text-decoration: middle;
      }
    }
  }
}
</style>
