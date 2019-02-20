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
      <li>
        <span class="iconfont icon-yanzheng"></span>
        <input type="number" ref="code" placeholder="请输入验证码">
        <!-- <div class="cancel">
          <img src="@/assets/close.png" v-if="flag" class="close" @click="goclear">
        </div> -->
        <input type="button" class="getNumber" v-model="codeMsg" @click="getCode" :disabled="codeDisabled" />
      </li>
      <button @click="login">登录</button>
      <div class="other">
        <p @click="getback">忘记密码</p>
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
      codeDisabled: false,
      // 倒计时秒数
      countdown: 60,
      // 按钮上的文字
      codeMsg: '获取验证码',
      // 定时器
      timer: null
    }
  },
  methods: {
    goclear () {
      this.$refs.tel.value = ''
    },
    txt () {
      this.flag = true
    },
    textblur () {
      this.flag = false
    },
    getback () {
      this.$router.push('./getback')
    },
    getCode () {
      // 验证码60秒倒计时
      if (!this.timer) {
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
    login () {
      if (this.$refs.tel.value === '' && this.$refs.code.value === '') {
        Toast('请输入手机号和验证码')
        return false
      } else if (this.$refs.tel.value === '' && this.$refs.code.value !== '') {
        Toast('请输入手机号')
        return false
      } else if (this.$refs.code.value === '' && this.$refs.tel.value !== '') {
        Toast('请输入验证码')
        return false
      } else {
        axios.post('/daxunxun/users/login', {
          username: this.username,
          password: this.password
        }).then(data => {
          console.log(data)
          if (data.data === 0) {
            Toast('登录失败')
          } else if (data.data === 1) {
            Toast('登录成功')
            sessionStorage.setItem('islogin', 'ok')
            this.$router.go(-1)
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
      width: rem750(128);
      height: rem750(180);
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
      .getNumber {
        width: rem750(160);
        height: rem750(52);
        border: 1px solid #0a7998;
        border-radius: rem750(10);
        padding-left: 0;
        color: $bg-side;
        font-size: $font-18;
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
      @include _flex(flex-end,center);
      p {
        line-height: rem750(50);
        font-size: rem750(26);
      }
    }
  }
}
</style>
