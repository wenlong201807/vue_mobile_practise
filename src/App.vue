<template>
  <div class="homeuse">
    <!-- 头部固定渔区 -->
    <mt-header class="fix_header" fixed title="茶余饭后的瞎搞">
      <span @click="back" slot="left">
        <mt-button icon="back" v-show="flag">返回</mt-button>
      </span>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--路由的容器坑 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部固定区域 -->
    <nav class="mui-bar mui-bar-tab fix_foot">
      <router-link class="mui-tab-item " to="/home">
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
          <span class="mui-badge" id="badge">{{totalcount}}</span>
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
import {mapGetters} from 'vuex'
// import axios from 'axios'
// import { MessageBox } from 'mint-ui'
// import Row from '@/components/Row'
export default {
  name: 'Homeuse',
  data () {
    return {
      flag: true // 默认显示返回按钮
    }
  },
  computed: {
    ...mapGetters(['totalcount'])
  },
  methods: {
    back () {
      this.$router.go(-1)
      // console.log(this)
    }
  },
  watch: {
    // 当页面刷新的时候，不会触发watch中监听的路由地址的变化
    '$route.path': function (newval, oldval) {
      if (newval === '/home') {
        this.flag = false
      } else {
        this.flag = true
      }
    }
  },
  created () {
    // 当刷新时候，页面加到在桌面上之前触发的
    if (this.$route.path === '/home') {
      this.flag = false
    } else {
      this.flag = true
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
  margin: 50px 0 60px;
  overflow: hidden;
  .fix_header {
    height: 50px;
    font-size: 16px;
    z-index: 99;
  }
  .fix_footer {
    height: 60px;
  }

  // @include header;
}
// 中甲那部分 组件的动画效果
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
