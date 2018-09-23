<template>
  <div>
    <h3 class="title">{{photoinfo.title}}</h3>
    <p class="time_num">
      <span>发表时间：{{photoinfo.add_time}}</span>
      <span>点击{{photoinfo.click}}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->

    <!-- 内容区域 -->
    <div>{{photoinfo.content}}</div>
    <!-- 评论子组件 -->
    <!-- 注意前后端传值时，这里为了前后统一，必须使用同一个id名字 -->
    <commont :newsid="id"></commont>
  </div>
</template>

<script>
// 导入评论子组件
import commont from '@/components/sub_components/commom.vue'
export default {
  name: 'Photoinfo',
  data () {
    return {
      photoinfo: {}// 图片信息的空数组
    }
  },
  props: ['id'], // 获取次参数的两种方式{{id}} ++{{$route.params.id}}
  created () {
    this.getPhotoInfo()
  },
  methods: {
    async getPhotoInfo () {
      const {data} = await this.$http.get('/getimginfo/' + 3)
      console.log(data)
      this.photoinfo = data
    }
  },
  mounted () {

  },
  components: {
    commont
  }

}
</script>

<style lang="scss" scoped>
.title {
  font-size: 15px;
  margin: 15px auto;
  // color: aqua;
  text-align: center;
}
.time_num {
  display: flex;
  padding: 0px 15px;
  justify-content: space-between;
}
</style>
