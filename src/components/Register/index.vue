<template>
  <div class="content animated fadeInLeft">
    <div class="img">
      <img src="@/assets/logo.png" alt="#">
    </div>
    <div class="box">
      <li>
        <span class="iconfont icon-geren"></span>
        <input type="number" ref="tel" @focus="txt" @blur="textblur" placeholder="请输入手机号">
        <div class="cancel">
          <img src="@/assets/close.png" v-if="flag" class="close" @click="goclear">
        </div>
      </li>
      <li v-if="active">
        <span class="iconfont icon-mima"></span>
        <input type="password" ref="password" @focus="password" @blur="passwordblur" placeholder="请输入6-32位密码">
        <div class="cancel">
          <img src="@/assets/close.png" v-if="mark" class="close" @click="clear">
        </div>
        <img class="change" src="@/assets/yan.png" @click="goChange">
      </li>
      <li v-else>
        <span class="iconfont icon-mima"></span>
        <input type="text" ref="password" @focus="password" @blur="passwordblur" placeholder="请输入6-32位密码">
        <div class="cancel">
          <img src="@/assets/close.png" v-if="mark" class="close" @click="clear">
        </div>
        <img class="change" src="@/assets/yan01.png" @click="change">
      </li>
      <button @click="reg">注册</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Header, Field, Toast, Button } from 'mint-ui'
Vue.use(Header, Field, Button)
export default {
  data () {
    return {
      flag: false,
      active: true,
      mark: false
    }
  },
  methods: {
    goclear () {
      this.$refs.tel.value = ''
    },
    clear () {
      this.$refs.password.value = ''
    },
    txt () {
      this.flag = true
    },
    textblur () {
      this.flag = false
    },
    password () {
      this.mark = true
    },
    passwordblur () {
      this.mark = false
    },
    goChange () {
      this.active = false
    },
    change () {
      this.active = true
    },
    getback () {
      this.$router.push('./getback')
    },
    reg () {
      if (this.$refs.tel.value === '' && this.$refs.password.value === '') {
        Toast('请输入手机号和密码')
        return false
      } else if (this.$refs.tel.value === '' && this.$refs.password.value !== '') {
        Toast('请输入手机号')
        return false
      } else if (this.$refs.password.value === '' && this.$refs.tel.value !== '') {
        Toast('请输入密码')
        return false
      } else {
        var username = this.$refs.text.value
        console.log(username)
        var password = this.$refs.password.value
        console.log(password)
        axios.post('/daxunxun/users/login', {
          username: this.username,
          password: this.password
        }).then(data => {
          console.log(data)
          if (data.data === 0) {
            Toast('注册失败')
          } else if (data.data === 1) {
            Toast('注册成功')
            this.$router.push('/login')
          } else if (data.data === 2) {
            Toast('没有该用户')
          } else {
            Toast('密码错误')
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content {
  .img {
    width:100%;
    height: rem750(325);
    @include _flex(center,center);
    padding-bottom: rem750(37);
    img {
      width: rem750(155);
      height: rem750(146);
    }
  }
  .box {
    padding:0 rem750(74);
    li {
      width:100%;
      height: rem750(59);
      margin-bottom: rem750(60);
      border-bottom: 1px solid #dbdbdb;
      @include _flex(start,center);
      span {
        color: #c2c2c2;
        font-size: $font-30
      }
      input {
        width: rem750(500);
        height: rem750(40);
        padding-left: rem750(30);
      }
      .cancel {
        width: rem750(30);
        height: rem750(30);
        .close {
          width: 100%;
          height:100%;
        }
      }
      .change {
        width: rem750(32);
        height: rem750(20);
        padding-left: rem750(30);
      }
    }
    button {
      width:100%;
      height: rem750(90);
      border-radius: rem750(45);
      background: #4768f3;
      color: #fff;
      font-size: $font-30;
      margin-bottom: rem750(36);
    }
  }
}
</style>
