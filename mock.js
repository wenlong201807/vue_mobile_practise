// 用mockjs模拟生成数据
var Mock = require('mockjs')

module.exports = () => {
  // 使用 Mock
  var data = Mock.mock({
    'lunbo|4': [
      {
        'id|+1': 1,
        url: '...',
        img: '暂时不显示'
      }
    ],
    'users|5': [
      {
        'id|+1': 1,
        name: '@cname',
        phone: '184@natural(11122333,99988777)',
        address: '@county(true)'
      }
    ],
    'messagelist|20': [
      {
        'id|+1': 1,
        title: '@ctitle(12)',
        add_time: '@datetime("yyyy-MM-dd HH:mm:ss")',
        zhaiyao: '@ctitle(20)',
        click: '@natural(1,100)',
        img_url: '../../../../static/yuantiao.jpg'
      }
    ],
    'messageinfo|20': [
      {
        'id|+1': 1,
        title: '@ctitle(12)',
        add_time: '@datetime("yyyy-MM-dd HH:mm:ss")',
        content: '@ctitle(200)',
        click: '@natural(1,100)'
      }
    ],
    'getcmt|20': [
      {
        // 'id|+1': 1,
        user_name: '@cname()',
        add_time: '@datetime("yyyy-MM-dd HH:mm:ss")',
        content: '@ctitle(20)'
      }
    ],
    'postcommont|20': [
      {
        'id|+1': 1
      }
    ],
    'phototitle|20': [
      {
        'id|+1': 1,
        title: '@ctitle()'
      }
    ],
    'getcategory|20': [
      {
        'id|+1': 0,
        img_url: '../../static/phone.jpg',
        title: '@ctitle()'
      }
    ],
    'getcategorylist|20': [
      {
        'id|+1': 0,
        img_url: '../../static/phone.jpg',
        title: '@ctitle()',
        zhaiyao: '@ctitle(15)'
      }
    ],
    'getimginfo|20': [
      {
        'id|+1': 0,
        img_url: '../../static/phone.jpg',
        title: '@ctitle()',
        click: '@natural(1,10)',
        add_time: '@datetime("yyyy-MM-dd HH:mm:ss")',
        content: '@ctitle(150)'
      }
    ],
    'getgoods|120': [
      {
        'id|+1': 1,
        img_url: '../../static/phone.jpg',
        click: '@natural(1,10)',
        title: '@ctitle()',
        zhaiyao: '@ctitle(15)',
        sell_price: '@natural(100,9999)',
        market_price: '@natural(100,9999)',
        stock_quantity: '@natural(100,9999)'
      }
    ],
    'getgoodsinfodetail|120': [
      {
        'id|+1': 1,
        add_time: '@Date()',
        goods_no: 'SD@natural(100,9999)',
        title: '@ctitle()',
        sell_price: '@natural(100,999)',
        market_price: '@natural(100,9999)',
        stock_quantity: '@natural(100,9999)'
      }
    ],
    'goodsinfoimg|120': [
      {
        'id|+1': 1,
        src: '../../static/phone.jpg'
      }
    ],
    'goodsdesc|120': [
      {
        'id|+1': 1,
        title: '@ctitle(7)',
        content: '@ctitle(70)'
      }
    ],
    'shopcarlist|120': [
      {
        'id|+1': 1,
        title: '@ctitle(7)',
        cou: '@natural(1,99)',
        sell_price: '@natural(100,999)',
        thumb_path: '../../static/phone.jpg'
      }
    ],
    'course|227': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1000,
        course_name: '@ctitle(5,10)',
        author: '@cname',
        college: '@ctitle(6)',
        'category_Id|1-6': 1
      }
    ],
    'course_category|6': [
      {
        'id|+1': 1,
        pid: -1,
        cName: '@ctitle(4)'
      }
    ]
  })
  // 返回的data会作为json-server的数据
  return data
}
