<template>
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item , index) in lunbotu" :key="index">
        <!-- <img class="swipe_img" :src="item.url" :alt="index+1"> -->
        <img :src="item[imgname]" :alt="index+1" :class="[isfull?'img_full':'img_normal']">
      </mt-swipe-item>
      <!-- <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item> -->
    </mt-swipe>
  </div>
</template>

<script>
// import mui from '@/plugin/mui/js/mui.js'
export default {
  name: 'Swiper',
  data () {
    return {

    }
  },
  props: ['lunbotu', 'imgname', 'isfull'],
  // 将来，谁使用这个 轮播图组件，就必须为其传递一个lunbotu的数组。同时，只能收到img属性的图片作为轮播图展示出来
  created () {

  },
  methods: {

  },
  components: {

  }

}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 140px;
  // 在父元素中让图片居中显示
  text-align: center;
  .mint-swipe-item {
    .img_full {
      // 如果宽高都是100%，则图片撑满整个父元素
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .img_normal {
      // 高度最大，宽度自适应
      height: 100%;
    }
    &:nth-child(1) {
      background-color: azure;
    }
    &:nth-child(2) {
      background-color: honeydew;
    }
    &:nth-child(3) {
      background-color: pink;
    }
  }
}
</style>
