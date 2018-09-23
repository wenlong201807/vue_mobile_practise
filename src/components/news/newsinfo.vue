<template>
  <div>
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="title_intr">
      <span>发表时间：{{newsinfo.add_time}}</span>
      <span>点击{{newsinfo.click}}次</span>
    </p>
    <hr>
    <div class="content">
      <!-- v-html="newsinfo.content"**若为html格式，需要使用这一行的方式渲染 -->
      {{newsinfo.content}}
    </div>
    <!-- 创建评论子空间 -->
    <commont :newsid="id"></commont>
  </div>
</template>

<script>
import commont from '@/components/sub_components/commom.vue'
export default {
  name: 'Newsinfo',
  data () {
    return {
      newsinfo: []// 新闻详情
    }
  },
  props: ['id'], // 获取次参数的两种方式{{id}} ++{{$route.params.id}}
  created () {
    this.getNewsInfo()
  },
  methods: {
    async getNewsInfo () {
      // 根据id获取新闻的性情
      const {data} = await this.$http.get('/messageinfo/' + this.id)
      // console.log(data)
      this.newsinfo = data
    }
  },
  components: {
    commont
  }

}
</script>

<style lang="scss" scoped>
.title {
  font-size: 15px;
  color: red;
  text-align: center;
}
.title_intr {
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
}
.content {
  text-align: center;
  padding: 10px 10px;
}
</style>
