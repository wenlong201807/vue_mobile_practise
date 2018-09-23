# myvue

> A Vue.js project

## Build Setup

```bash
# install dependencies
cnpm install

# serve with hot reload at 192.168.0.124:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](ht tp://vuejs.github.io/vue-loader).

## 项目架构使用 vue-cli2x 搭建成功

- 存放在码云仓库中
- [码云仓库地址](https://gitee.com/wenlongzhu/vue_mobile_normal)
- 后台数据加载的静态资源在文件夹 static 中找，而自己的背景图，img 图的静态资源在 src 之下的 asset 中找
- 在路由传参的时候，props 中的 id 可以直接在异步调用中使用，不必写在形参位置，可以直接在任何一个函数中使用，记得前面带上 this 即可
- props: ['id'],// 获取次参数的两种方式{{id}} ++{{$route.params.id}}

## 三个小问题

- 相册页面顶部的左右滑动\*\*失效
- 点击加载更多\*没有更多数据需要有弹出层友好提示
- 添加评论信息追加新评论处有坑

* 图片预览（难）

- 手机端点击使用使用 tap 或者 touch，使用 click 有 200-300 毫秒的延迟

- 使用手机调试项目要求
  - 1.电脑手机处于同一个 wifi 中
  - 2.  项目地址使用 ip 地址，
  - 2.1 "dev": "webpack-dev-server --host 192.168.0.124 --inline --progress --config build/webpack.dev.conf.js",(--host ip 设置为 WiFi 的 ip)
  - 3.  手机与电脑通过其他工具连接上
  - 4.  手机浏览器中输入项目的地址(http://+ip+port)即可

## 存疑中心

- 使用 mui 中的初始化，因为是严格模式，会报错？？点击数量加号和减号按钮不灵活
- 在购物车页面中，同时显示多条购物车中的商品，使用 json-server 不能读取多条商品信息
-
