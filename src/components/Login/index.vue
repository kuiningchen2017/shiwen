<template>
  <div class="content animated fadeInLeft">
    <div class="img">
      <img src="@/assets/logo.png" alt="#">
    </div>
    <div class="box">
      <li>
        <span class="iconfont icon-geren"></span>
        <input type="number" ref="tel" @focus="txt" @blur="textblur" placeholder="手机号">
        <div class="cancel">
          <img src="@/assets/close.png" v-if="flag" class="close" @click="goclear">
        </div>
      </li>
      <li v-if="active">
        <span class="iconfont icon-mima"></span>
        <input type="password" ref="password" @focus="password" @blur="passwordblur" placeholder="请输入大于6位数字字母">
        <div class="cancel">
          <img src="@/assets/close.png" v-if="mark" class="close" @click="clear">
        </div>
        <img class="change" src="@/assets/yan.png" @click="goChange">
      </li>
      <li v-else>
        <span class="iconfont icon-mima"></span>
        <input type="text" ref="password" @focus="password" @blur="passwordblur" placeholder="请输入大于6位数字字母">
        <div class="cancel">
          <img src="@/assets/close.png" v-if="mark" class="close" @click="clear">
        </div>
        <img class="change" src="@/assets/yan01.png" @click="change">
      </li>
      <button @click="login">登录</button>
      <div class="other">
        <p @click="gofast">手机号快捷登录</p>
        <p @click="getback">找回密码</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
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
      const telExg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/
      if (!telExg.test(this.$refs.tel.value)) {
        Toast('手机号格式不对')
        this.flag = true
      } else {
        this.flag = false
      }
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
    gofast () {
      this.$router.push('./fastlogin')
    },
    login () {
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
        axios.post(`${this.GLOBAL.shishuiyuan}/api/user/login?phone=${this.$refs.tel.value}&password=${this.$refs.password.value}`)
          .then(data => {
            console.log(data.data)
            var res = data.data
            Toast(res.message)
            if (res.code === 0) {
              localStorage.setItem('token', res.data.User_Token)
              localStorage.setItem('type', res.data.User_Type)
              localStorage.setItem('userID', res.data.User_ID)
              if (localStorage.getItem('invite_join_class_id')) {
                this.$router.push(`/home?invite_join_class_id=${localStorage.getItem('invite_join_class_id')}`)
              } else {
                if (res.data.User_Type === 0 || res.data.User_Type === 5) {
                  // this.$router.push('/user/parent/one')
                  this.$router.go(-1)
                } else {
                  // this.$router.push('/user/teacher/one')
                  this.$router.go(-1)
                }
              }
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
      width: rem750(128);
      height: rem750(180);
    }
  }
  .box {
    padding:0 rem750(70);
    li {
      width:100%;
      height: rem750(59);
      margin-bottom: rem750(60);
      border-bottom: 1px solid #dbdbdb;
      @include _flex(start,center);
      span {
        color: #c2c2c2;
        font-size: rem750(45)
      }
      input {
        width: rem750(500);
        height: rem750(50);
        padding-left: rem750(30);
        font-size: rem750(30)
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
        width: rem750(40);
        height: rem750(30)
      }
    }
    button {
      width:100%;
      height: rem750(90);
      border-radius: rem750(45);
      background: $bg-side;
      color: #fff;
      font-size: $font-30;
      margin-bottom: rem750(36);
    }
    .other {
      @include _flex(space-between,center);
      p {
        line-height: rem750(50);
        font-size: rem750(26);
      }
    }
  }
}
</style>
