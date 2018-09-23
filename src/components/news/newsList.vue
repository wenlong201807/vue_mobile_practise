<template>
  <div class="newslist">
    <h1>新闻列表组件</h1>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item ,index) in newslist" :key="index">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{item.add_time | dateFormat}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Newslist',
  data () {
    return {
      newslist: [] // 默认在页面中挂在一个空数组，表示新闻列表
    }
  },
  created () {
    this.getNewsList()
  },
  methods: {
    async getNewsList () {
      // 获取新闻列表
      const {data} = await this.$http.get('/messagelist')
      console.log(data)
      // 此处应该还需要判断，如果数据传递成功
      this.newslist = data
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.mui-media-body {
  h1 {
    font-size: 14px;
  }
  .mui-ellipsis {
    display: flex;
    justify-content: space-between;
    align-items: end;
    font-size: 12px;
    color: burlywood;
  }
}
</style>
