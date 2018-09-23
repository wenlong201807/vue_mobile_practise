<template>
  <div class="shopcarContainer">
    <!-- 商品列表区域 -->
    <div class="goods_list">
      <div class="mui-card" v-for="item of goodslist" :key="item.id">
        {{item.id}}
        <div class="mui-card-content">
          <div class="mui-card-content-inner goods_item">
            <!-- 开关 -->
            <mt-switch v-model="selectedObj[item.id]" @change="changeSelected(item.id,selectedObj[item.id])"></mt-switch>
            <!-- 图片 -->
            <img class="item_img" :src="item.thumb_path" alt="我是图片">
            <!-- 信息区域 -->
            <div class="">
              <!-- 当文字不够多时，宽度长会变小 -->
              <h1 class="item_title">标题{{item.title}}--{{countObj[item.id]}}</h1>
              <div class="info">
                <div class="goods_info">
                  <span class="price">￥{{item.sell_price}}</span>
                  <!-- 中间部分引入 -->
                  <nobox :initcount="countObj[item.id]" :id="item.id"></nobox>
                  <span @click.prevent="del(item.id)">删除</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {{JSON.stringify(selectedObj)}}
      <!-- 结算区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <!-- 左侧 -->
            <div class="left">
              <p>总计(不含运费)</p>
              <p>
                已勾选商品
                <span class="danger"> 0--{{selectedcount}}</span> 件，总价
                <span class="danger">￥ 0--{{amount}}</span>
              </p>
            </div>
            <!-- 右侧 -->
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
    <h1>ShopcarContainer</h1>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import nobox from '@/components/sub_components/shopcar_nobox.vue'
export default {
  name: 'ShopcarContainer',
  data () {
    return {
      goodslist: []// 商品列表
    }
  },
  computed: {
    ...mapGetters(['idstr', 'selectedObj', 'countObj', 'selectedcount', 'amount'])
  },
  methods: {
    ...mapMutations(['delFromCart', 'changeSelectState']),
    async getGoodsList () {
      // 如果购物车中没有商品，则不发送请求
      // if (this.idstr.length <= 0) return
      const {data} = await this.$http.get('/shopcarlist/' + this.idstr)
      console.log('data', data)
      // 无法渲染到页面上*可以打印到控制台
      this.goodslist = data
      console.log('赋值给data中的', this.goodslist)
    },
    // 未生效
    del (id) {
      // 删除商品
      // console.log(id) // underfined
      // 删除页面中的数据***另外还需要删除loaclstroge中的数据
      this.goodslist.some((item, i) => {
        if (item.id === id) {
          this.goodslist.splice(i, 1)
          return true
        }
      })
      this.delFromCart(id)
    },
    // 点击是否被选中状态**默认是选中状态
    changeSelected (id, select) {
      // 更改开关的状态
      // console.log(id, '---', select)
      this.changeSelectState({id, selected: select})
    }
  },
  created () {
    this.getGoodsList()
  },
  components: {
    nobox
  }
}
</script>

<style lang="scss" scoped>
.shopcarContainer {
  background-color: #eee;
  overflow: hidden;
  // 商品列表区域
  .goods_item {
    display: flex;
    .item_img {
      width: 50px;
      height: 60px;
      margin: 0px 5px;
      border: 1px solid #ccc;
    }
    .item_title {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .goods_info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          font-weight: bold;
          font-size: 16px;
          color: red;
        }
      }
    }
  }
  // 结算区域
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .danger {
      font-size: 13px;
      color: red;
    }
  }
}
</style>
