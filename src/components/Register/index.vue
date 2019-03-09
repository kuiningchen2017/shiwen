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
      <li>
        <span class="iconfont icon-yanzheng"></span>
        <input type="text" ref="imgCode" placeholder="请输入图形验证码">
        <div class="imgCode">
          <img :src="this.captchaApi" @click="getCaptcha">
        </div>
      </li>
      <li>
        <span class="iconfont icon-yanzheng"></span>
        <input type="number" ref="numCode" placeholder="请输入短信验证码">
        <input type="button" class="getNumber" v-model="codeMsg" @click="getCode" :disabled="codeDisabled" />
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

      <button @click="reg">注册</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Header, Field, Toast, Button } from 'mint-ui'
Vue.use(Header, Field, Button)
axios.defaults.withCredentials = true
export default {
  data () {
    return {
      flag: false,
      active: true,
      mark: false,
      codeDisabled: false,
      imgcode: '',
      // 倒计时秒数
      countdown: 60,
      // 按钮上的文字
      codeMsg: '获取验证码',
      // 定时器
      timer: null,
      captchaApi: ''
    }
  },
  mounted () {
    this.getCaptcha()
  },
  computed: {

  },
  methods: {
    getCaptcha () {
      var captchaApi = `http://sw.shishuiyuan999.com/api/utility/getcaptcha?_rand=${(new Date()).getTime()}`
      this.captchaApi = captchaApi
    },
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
      const passwordExg = /^[a-zA-Z0-9] {6,}$/
      if (!passwordExg.test(this.$refs.password.value)) {
        Toast('请输入大于6位数字字母')
        this.mark = true
      } else {
        this.mark = false
      }
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
    getCode () {
      if (this.codeDisabled) {
        return false
      } else {
        axios.get(`${this.GLOBAL.shishuiyuan}/api/sms/send?phone=${this.$refs.tel.value}&captcha=${this.$refs.imgCode.value}`)
          .then(data => {
            var result = data.data
            Toast(result.message)
            console.log(result)
          })
      }
      // 验证码60秒倒计时
      if (!this.timer) {
        console.log('111')
        this.timer = setInterval(() => {
          if (this.countdown > 0 && this.countdown <= 60) {
            this.countdown--
            if (this.countdown !== 0) {
              this.codeMsg = '重新发送(' + this.countdown + ')'
              this.codeDisabled = true
            } else {
              clearInterval(this.timer)
              this.codeMsg = '获取验证码'
              this.countdown = 60
              this.timer = null
              this.codeDisabled = false
            }
          }
        }, 1000)
      }
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
        axios.post(`${this.GLOBAL.shishuiyuan}/api/user/register?phone=${this.$refs.tel.value}&captcha=${this.$refs.imgCode.value}&sms_code=${this.$refs.numCode.value}&password=${this.$refs.password.value}`)
          .then(data => {
            console.log(data.data)
            var res = data.data
            Toast(res.message)
            if (res.code === 0) {
              localStorage.setItem('token', res.data.User_Token)
              localStorage.setItem('type', res.data.User_Type)
              localStorage.setItem('userID', res.data.User_ID)
              if (res.data.User_Type === 0) {
                this.$router.push('/user/parent')
              } else {
                this.$router.push('/user/teacher')
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
      .imgCode>img {
        @include rect(rem750(150), rem750(60))
      }
      .change {
        width: rem750(40);
        height: rem750(30)
      }
      .getNumber {
        width: rem750(160);
        height: rem750(52);
        border: 1px solid #0a7998;
        border-radius: rem750(10);
        padding-left: 0;
        color: $bg-side;
        font-size: $font-22;
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
  }
}
</style>
