<template>
  <div class="HomeContainer">
    <!-- 轮播图子空间 -->
    <!-- <swiper :lunbotu="lunbotu"></swiper> -->
    <swiper :lunbotu="lunbotu" :imgname="'url'" :isfull="true"></swiper>
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item , index) in lunbotu" :key="index">
        <img class="swipe_img" :src="item.url" :alt="index+1">
      </mt-swipe-item>
    </mt-swipe> -->
    <!-- 第二部分，九宫格布局 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img class="sm_img" src="../../assets/images/menu1.png" alt="tu" title="tu">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img class="sm_img" src="../../assets/images/menu2.png" alt="tu" title="tu">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img class="sm_img" src="../../assets/images/menu3.png" alt="tu" title="tu">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img class="sm_img" src="../../assets/images/menu4.png" alt="tu" title="tu">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img class="sm_img" src="../../assets/images/menu5.png" alt="tu" title="tu">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img class="sm_img" src="../../assets/images/menu6.png" alt="tu" title="tu">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>

    </ul>
  </div>
</template>

<script>
// import axios from 'axios'
// import { MessageBox } from 'mint-ui'
import Swiper from '@/components/sub_components/Swiper'
export default {
  name: 'HomeContainer',
  data () {
    return {
      lunbotu: [] // 轮播图的数组
    }
  },
  created () {
    this.getlunbotu() // 调用轮播图的
  },
  methods: {
    async getlunbotu () {
      // 获取轮播图的方法
      const {data} = await this.$http.get('/lunbo')
      console.log(data)
      this.lunbotu.push(...data)
      console.log(this.lunbotu)
    }
  },
  components: {
    Swiper
  }
}
</script>

<style lang="scss" scoped>
// 六宫各部分小图
.sm_img {
  height: 60px;
  width: 60px;
}
// 去掉背景色
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 13px;
}
</style>
