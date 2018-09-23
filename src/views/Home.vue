<template>
  <div class="home">
    <h1>home</h1>
  </div>
</template>

<script>
import axios from 'axios'
// import { MessageBox } from 'mint-ui'
// import Row from '@/components/Row'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  created () { // 初始化数据
    // axios.get('http://localhost:3698/users', {
    //   params: {
    //     ID: 12345
    //   }
    // })
    //   .then((response) => {
    //     // console.log( response)
    //     // this.userList.push(...response.data)
    //     this.userList = response.data
    //   })
    //   .catch((e) => {
    //     this.$message({
    //       type: 'info',
    //       message: `数据加载失败` + e
    //     })
    //   })
  },
  methods: {
    // 子组件向父组件传递的**修改数据
    saveUser (e) {
      console.log(e)
      let index = this.userList.findIndex(item => e.id === item.id)
      this.userList.splice(index, 1, [e])
    },
    submitAdd () {
      // console.log(this.form)
      // this.id = Date.now()
      // axios
      //   .post('http://localhost:3698/users/', this.form)
      //   .then(res => {
      //     this.$message({
      //       type: 'info',
      //       message: `数据添加成功`
      //     })
      //     this.userList.push(res.data)
      //     this.addDialogVisible = false
      //   })
      //   .catch(() => {
      //     this.$confirm('添加失败')
      //   })
    },
    showAddDialog () {
      this.addDialogVisible = true
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done()
        })
        .catch(() => {})
    },
    delUser (id) {
      console.log(id)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.delete('http://localhost:3698/users/' + id)
          .then((res) => { // ellint-disable-line
            console.log(res)
            let delIndex = this.userList.findIndex(item => item.id === id)
            if (delIndex >= 0) {
              this.userList.splice(delIndex, 1)
            }
            this.$message({
              type: 'info',
              message: `数据删除成功`
            })
          })
          .catch((e) => {
            this.$message({
              type: 'info',
              message: `数据删除之后加载失败` + e
            })
          })
      }).catch((e) => {
        this.$message({
          type: 'info',
          message: `取消删除成功` + e
        })
      })
    },

    // handleClick: function () {
    //   this.$toast('Hello world!')
    // },
    open_close () {
      // console.log( this.value_btn)
      // MessageBox({
      //   title: 'Notice',
      //   message: 'Are you sure?',
      //   showCancelButton: true
      // })
    }

  },
  components: {

    // Row
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/mixin';
.hello {
  // color: red;
  font-size: 36px;
  // @include header;
  .mytable {
    font-size: 25px;
  }
}
</style>
