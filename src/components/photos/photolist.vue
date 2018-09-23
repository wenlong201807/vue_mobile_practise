<template>
  <div>

    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <span @click="changeCategory(item.id)" v-for="(item,index) in category" :key="index" class="['mui-control-item' item.id===0?'mui-active':'']">
            {{item.title}}
          </span>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="lazyul">
      <router-link tag="li" :to="'/home/photoinfo/'+item.id" v-for="(item,index) in photolist" :key="index">
        <img :v-lazy="item.img_url">
        <div class="info">
          <h1 class="info_title">{{item.title}}</h1>
          <div class="info_content">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>

// 未使用严格模式***难点
// import mui from '../../plugin/mui/js/mui.js'
// mui('.mui-scroll-wrapper').scroll({
//   deceleration: 0.0005 // flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// })
export default {
  name: 'Photolist',
  data () {
    return {
      category: [], // 默认空数组
      photolist: []// 图片列表
    }
  },
  props: [''], // 获取次参数的两种方式{{id}} ++{{$route.params.id}}
  created () {
    // this.getPhotoCategory()
    // this.getPhotoByCategory(0)
  },
  methods: {
    async getPhotoCategory () {
      const {data} = await this.$http.get('/phototitle')
      console.log(data)
      // 如果成功返回，则把全部这一项手动添加到数组中
      if (data > 0) {
        data.unshift({title: '全部', id: '0'})
      }
      this.category = data
    },
    async getPhotoByCategory (id) {
      // 根据图片的id获取图片数据
      const {data} = await this.$http.get('/getcategorylist/' + id)
      console.log(data)
      this.photolist = data
    },
    changeCategory (id) {
      // 点击不同类型的图片，显示对应的图片类型的信息
      this.getPhotoByCategory(id)
    }

  },
  mounted () {
    // 第三方插件都放在这里初始化
    // mui('.mui-scroll-wrapper').scroll({
    //   deceleration: 0.0005 // flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    // })
  }

}
</script>

<style lang="scss" scoped>
.mui-slider {
  touch-action: pan-x;
}
// 懒加载部分
.lazyul {
  margin: 0;
  padding: 10px;
  li {
    position: relative;
    text-align: center;
    background-color: #ccc;
    box-shadow: 0 0 10px #eee;
    & + li {
      margin-top: 10px;
    }
    img {
      vertical-align: middle;
      width: 100%;
    }
    img[lazy='loading'] {
      width: 40px;
      height: 300px;
      margin: 0px auto 10px;
    }
  }
}
// 懒加载部分之下的的文字
.info {
  position: absolute;
  bottom: 0;
  max-height: 50px;
  overflow: hidden;
  color: #fff;
  background: rgba(111, 117, 122, 0.5);
  .info_title {
    font-size: 14px;
  }
  .info_content {
    font-size: 13px;
    text-align: left;
    text-indent: 2em;
  }
}
</style>
