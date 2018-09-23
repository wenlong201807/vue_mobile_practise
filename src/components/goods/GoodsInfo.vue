<template>
  <div class="googsinfo">
    <!-- <h3>商品详情{{id}}</h3> -->
    <!-- 要实现动画的小球 -->
    <transition @before-enter='beforeEnter' @enter='enter' @after-enter='afterEnter'>

      <div class="ball" v-show='flag'>1</div>
    </transition>
    <!-- 轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotu="goodsinfolunbotu" :imgname="'src'"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价
            <span>￥
              <del>{{goodsinfo.market_price}}</del>
            </span> &nbsp;&nbsp; 销售价
            <span class="sell_price">￥{{goodsinfo.sell_price}}</span>
          </p>
          <p>
            购买数量:
            <!-- 注意：这里的max是父组件传给子组件的库存量 -->
            <!-- 由于 goodsinfo.sell_price是异步动态获取的，需要消耗时间，而组件标签先于数据渲染到页面上，因此会找不到-->
            <goodsinfonobox :max="goodsinfo.sell_price" @func="getSelectCount"></goodsinfonobox>
          </p>
          <div>
            <mt-button type="primary" size="small">立即购买</mt-button> &nbsp;
            <mt-button type="danger" size="small" @click='addToCart'>加入购物车</mt-button>
          </div>
        </div>
      </div>

    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存情况：{{goodsinfo.sell_price}}件</p>
          <p>上架时间：{{goodsinfo.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer button_culom">
        <!-- 使用编程式来进行路由的跳转：js代码的方式进行路由跳转 -->
        <mt-button type="primary" size="large" @click="goDesc" plain>图文介绍</mt-button> &nbsp;
        <mt-button type="danger" size="large" @click="goComment" plain>商品评论</mt-button>
      </div>
    </div>

  </div>
</template>

<script>
import {mapMutations} from 'vuex'
// import mui from '@/plugin/mui/js/mui.js'
import Swiper from '@/components/sub_components/Swiper'
import goodsinfonobox from '@/components/sub_components/goodsinfo_nobox'
export default {
  name: 'Goodslist',
  data () {
    return {
      goodsinfolunbotu: [], // 商品的轮播图
      goodsinfo: {}, // 商品的详情
      flag: false, // 小球显示与隐藏的状态
      selectedCount: 1// 用户选择的商品购买数量，默认选中了一个商品
    }
  },
  props: ['id'], // 获取次参数的两种方式{{id}} ++{{$route.params.id}}
  created () {
    this.getlunbotu()
    this.getGoodsInfoById()
  },

  methods: {
    ...mapMutations(['addToCar']),
    async getlunbotu () {
      const {data} = await this.$http.get('/goodsinfoimg/' + this.id)
      // console.log(data)
      // if (data.status === 0) {
      this.goodsinfolunbotu = data
      // }
    },
    async getGoodsInfoById () {
      const {data} = await this.$http.get('/getgoodsinfodetail/' + this.id)
      // console.log(data)
      // 根据ID 获取商品的参数
      // if(data.status === 0)return this.goodsinfo=data
      this.goodsinfo = data
      console.log('666', this.goodsinfo)
    },
    goDesc () {
      // 点击按钮，跳转到商品的描述页面
      // this.$route  是专门用来获取路由中参数的
      // this.$router  是专门用来实现编程式导航的
      // console.log(this)
      // 第一种方式
      // this.$router.push('/home/goodsdesc/' + this.goodsinfo.id)
      // 第二种方式
      this.$router.push({
        name: 'GoodsDesc',
        params: {id: this.goodsinfo.id}
      })
    },
    goComment () {
      this.$router.push('/home/goodscomment/' + this.goodsinfo.id)
    },
    addToCart () {
      // 将数量添加到购物车
      this.flag = !this.flag
      // 调用mutations  中的addToCar
      // 第一种方法
      // this.$store.commit('addToCar', {id: this.id, count: this.selectedCount})
      // 第二种方法
      // 直接调用mapMutations中映射出来的方法
      this.addToCar({id: this.id, count: this.selectedCount, selected: true, price: this.goodsinfo.sell_price})
    },
    beforeEnter (el) {
      // 入场动画开始之前，设置小球的起始状态
      el.style.transform = 'translate(0, 0)'
    },
    enter (el, done) {
      // transition 过渡效果   transform 变换  translate 位移
      // 让小球可以有动态过渡效果
      // el.offsetHeight

      //  动态获取小球的横纵坐标
      const ballPos = el.getBoundingClientRect()
      // console.log(ballPos)
      // 动态获取徽标的横纵坐标[注意：这里获取徽标的位置，和双向数据绑定没有任何关系，所以，可以直接使用普通的dom操作]
      // dom操作的优势，不论要操作的元素属于哪个组件，只要这个元素属于document，那么就能够直接获取到
      const badgePos = document.getElementById('badge').getBoundingClientRect()
      // console.log(badge)

      const left = badgePos.left - ballPos.left
      const top = badgePos.top - ballPos.top

      // 入场动画接收之后，小球的终止状态
      // el.style.transform = 'translate(96px, 405px)'
      el.style.transform = 'translate(' + left + 'px, ' + top + 'px)'
      // 设置小球的过渡效果
      // el.style.transition = 'all 1s ease'
      el.style.transition = 'all 0.5s cubic-bezier(.18,-0.64,.65,1.11)'
      // 当入场动画完成之后，需要手动调用一下done回调函数，直接跳过小球的出场动画
      done()
    },
    afterEnter (el) {
      // 入场动画完成之后的回调函数
      this.flag = !this.flag
    },
    getSelectCount (c) {
      // 获取选择的商品数量
      console.log('子组件传递给父组件的数量值', c)
      //  把用户选择的最新的数量值，保存到data中，方便用户点击加入购物车按钮的时候，把数量值同步到徽标中
      this.selectedCount = c
    }

  },
  components: {
    Swiper, goodsinfonobox
  }

}
</script>

<style lang="scss" scoped>
.googsinfo {
  background-color: #eee;
  overflow: hidden;
}

.sell_price {
  font-size: 16px;
  font-weight: bold;
  color: red;
}
.button_culom {
  flex-direction: column;
}
// 要实现动画的小球
.ball {
  position: absolute;
  top: 340px;
  left: 141px;
  z-index: 99;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  text-align: center;
  font-size: 14px;
  line-height: 15px;
  color: white;
  background-color: red;
  // 小球最后跳动的终点位置
  // transform: translate(96px, 405px);
}
</style>
