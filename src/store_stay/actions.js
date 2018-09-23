import axios from 'axios'

export default {
  queryShopList (context, q) {
    axios
      .get('http://localhost:3000/enter?_page=1&_limit=5&q=' + q, {})
      .then(res => {
        context.commit('AddShopList', res.data)
      })
  }
}
