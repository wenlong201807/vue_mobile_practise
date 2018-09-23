<template>
  <div>
    <h3>评论子空间**{{newsid}}</h3>
    <hr>
    <textarea class="text_content" maxlength="120" v-model="msg" placeholder="(最多吐槽120个字)"></textarea>
    <mt-button type="primary" size="large" @click="postMsg">发表评论</mt-button>

    <!-- 评论列表区 -->
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in cmtlist" :key="index">
        <div class="cmt-item-title">第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;&nbsp;发表时间：{{item.add_time}}</div>
        <div class="cmt-item-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="primary" size="large" @click="loadmore" plain>加载更多</mt-button>
  </div>
</template>

<script>
// mintui 按需导入
import {Toast} from 'mint-ui'

export default {
  name: 'Commont',
  data () {
    return {
      page: 1, // 默认第一页
      cmtlist: [], // 默认为空数组
      msg: '' // 即将发表评论的字符串，默认为空
    }
  },
  props: ['newsid'], // 获取次参数的两种方式{{id}} ++{{$route.params.id}}
  created () {
    this.getCommentByPage()
  },
  methods: {
    async getCommentByPage () {
      const {data} = await this.$http.get('/getcmt/?_page=' + this.page)
      // console.log(data)
      this.cmtlist = this.cmtlist.concat(data)
      // console.log(this.cmtlist)
    },
    loadmore () {
      // 点击加载更多
      this.page++
      this.getCommentByPage()
    },
    async postMsg () {
      // 如果用户没有写内容，则不能发表
      if (this.msg.trim().length <= 0) return Toast('请填写评论内容')
      console.log(this.msg)
      // 发表评论的逻辑
      // 1.再次调用this.getCommentByPage()
      // const {data} = await this.$http.post('/postcommont/' + this.newsid, {content: this.msg.trim()})
      // console.log(data)
      // if(data.status === 0){
      // 2. 评论之前，清空原来的评论**只能显示当前的
      //  this.cmtlist = []
      //  this.getCommentByPage()
      // 3.为了防止重新调用 this.getCommentByPage()方式导致会把之前的所有评论，我们在客户端，手动拼接到现有评论之前
      // this.cmtlist.unshift({
      //   user_name:"匿名用户",
      //   add_time:new Date(),
      //   content:this.msg.trim()
      // })
      // }
    }
  }

}
</script>

<style lang="scss" scoped>
.text_content {
  font-size: 13px;
  margin: 0;
}
.cmt-list {
  margin-top: 5px;
  .cmt-item {
    line-height: 30px;
    margin-bottom: 7px;
    .cmt-item-title {
      font-size: 14px;
      background-color: #ccc;
    }
    .cmt-item-body {
      font-size: 13px;
      text-indent: 2em;
    }
  }
}
</style>
