<template>
  <div class="homeuse">
    <!-- 头部固定渔区 -->
    <mt-header class="fix_header" fixed title="茶余饭后的瞎搞">
      <span slot="left">
        <mt-button icon="back">返回</mt-button>
      </span>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--路由的容器坑 -->
    <router-view></router-view>
    <!-- 底部固定区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact ">
        </span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon  mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
// import axios from 'axios'
// import { MessageBox } from 'mint-ui'
// import Row from '@/components/Row'
export default {
  name: 'Homeuse',
  data () {
    return {

    }
  },
  components: {

    // Row
  }
}
</script>

<style lang="scss" scoped>
// @import '~@/style/mixin';
.homeuse {
  // 将固定在顶部与底部的位置留下，而不影响其他的布局
  margin: 50px 0 100px;

  // @include header;
}
</style>
