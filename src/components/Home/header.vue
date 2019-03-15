<template>
  <div class="header">
    <h1>师问</h1>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox, Toast } from 'mint-ui'
export default {
  mounted () {
    let url = this.$route.query
    let data = JSON.stringify(url)
    if (data !== '{}') {
      localStorage.setItem('invite_join_class_id', url.invite_join_class_id)
      if (localStorage.getItem('token')) {
        axios.post(`${this.GLOBAL.shishuiyuan}/api/myclass/invitejoin?token=${localStorage.getItem('token')}&invite_join_class_id=${localStorage.getItem('invite_join_class_id')}`)
          .then(data => {
            console.log(data.data)
            MessageBox.confirm('确认加入此班级')
              .then(action => {
                if (action === 'confirm') {
                  axios.post(`${this.GLOBAL.shishuiyuan}/api/myclass/invitejoinconfirm?token=${localStorage.getItem('token')}&invite_join_class_id=${localStorage.getItem('invite_join_class_id')}&status=1`)
                    .then(data => {
                      console.log(data.data)
                      if (data.data.code === 0) {
                        Toast('加入成功')
                      } else {
                        Toast('加入失败')
                      }
                      localStorage.removeItem('invite_join_class_id')
                    })
                }
              })
              .catch(err => {
                axios.post(`${this.GLOBAL.shishuiyuan}/api/myclass/invitejoinconfirm?token=${localStorage.getItem('token')}&invite_join_class_id=${localStorage.getItem('invite_join_class_id')}&status=2`)
                  .then(data => {
                    console.log(data.data)
                    localStorage.removeItem('invite_join_class_id')
                  })
              })
          })
      } else {
        this.$router.push('/login')
      }
    } else {
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.header {
  @include _flex(center,center);
  h1 {
    font-size: $font-36;
    letter-spacing: rem750(8);
  }
}
</style>
