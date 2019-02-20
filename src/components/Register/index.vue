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
      <li>
        <span class="iconfont icon-yanzheng"></span>
        <input type="text" ref="code" placeholder="请输入验证码">
        <!-- <mt-field v-model="imgcode" placeholder="请输入验证码"> -->
          <div id='imgcode'></div>
        <!-- </mt-field> -->
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
      mark: false,
      imgcode: ''
    }
  },
  mounted () {
    this.getGVerify('imgcode')
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
    },
    getGVerify: function (id) {
      const that = this
      function GVerify (options) { // 创建一个图形验证码对象，接收options对象为参数
        this.options = { // 默认options参数值
          id: '', // 容器Id
          canvasId: 'verifyCanvas', //  canvas的ID
          width: '100', // 默认canvas宽度
          height: '30', // 默认canvas高度
          type: 'blend', // 图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
          code: ''
        }
        if (Object.prototype.toString.call(options) === '[object Object]') { // 判断传入参数类型
          for (var i in options) { // 根据传入的参数，修改默认参数值
            this.options[i] = options[i]
          }
        } else {
          this.options.id = options
        }
        this.options.numArr = '0,1,2,3,4,5,6,7,8,9'.split(',')
        this.options.letterArr = getAllLetter()
        this._init()
        this.refresh()
      }
      GVerify.prototype = {
        /** 版本号 **/
        version: '1.0.0',
        /** 初始化方法 **/
        _init: function () {
          var con = document.getElementById(this.options.id)
          var canvas = document.createElement('canvas')
          /* this.options.width = con.offsetWidth > 0 ? con.offsetWidth : "100";
          this.options.height = con.offsetHeight > 0 ? con.offsetHeight : "30"; */
          canvas.id = this.options.canvasId
          canvas.width = this.options.width
          canvas.height = this.options.height
          canvas.style.cursor = 'pointer'
          canvas.innerHTML = '您的浏览器版本不支持canvas'
          con.appendChild(canvas)
          var parent = this
          canvas.onclick = function () {
            parent.refresh()
          }
        },
        /** 生成验证码 **/
        refresh: function () {
          this.options.code = ''
          var canvas = document.getElementById(this.options.canvasId)
          if (canvas.getContext) {
            var ctx = canvas.getContext('2d')
          }
          ctx.textBaseline = 'middle'
          ctx.fillStyle = randomColor(180, 240)
          ctx.fillRect(0, 0, this.options.width, this.options.height)
          if (this.options.type === 'blend') { // 判断验证码类型
            var txtArr = this.options.numArr.concat(this.options.letterArr)
          } else if (this.options.type === 'number') {
            txtArr = this.options.numArr
          } else {
            txtArr = this.options.letterArr
          }
          for (var i = 1; i <= 4; i++) {
            var txt = txtArr[randomNum(0, txtArr.length)]
            this.options.code += txt
            ctx.font = '20px SimHei'
            // ctx.font = randomNum(this.options.height/2, this.options.height) + 'px SimHei'; //随机生成字体大小
            ctx.fillStyle = randomColor(50, 160) // 随机生成字体颜色
            /* ctx.shadowOffsetX = randomNum(-3, 3);
            ctx.shadowOffsetY = randomNum(-3, 3); */
            ctx.shadowBlur = randomNum(-3, 3)
            ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
            var x = this.options.width / 5 * i
            var y = this.options.height / 2
            var deg = randomNum(-30, 30)
            /** 设置旋转角度和坐标原点 **/
            ctx.translate(x, y)
            ctx.rotate(deg * Math.PI / 180)
            ctx.fillText(txt, 0, 0)
            /** 恢复旋转角度和坐标原点 **/
            ctx.rotate(-deg * Math.PI / 180)
            ctx.translate(-x, -y)
          }
          that.adminImgCode = this.options.code
          /** 绘制干扰线 **/
          for (var j = 0; j < 4; j++) {
            ctx.strokeStyle = randomColor(40, 180)
            ctx.beginPath()
            ctx.moveTo(randomNum(0, this.options.width / 2), randomNum(0, this.options.height / 2))
            ctx.lineTo(randomNum(0, this.options.width / 2), randomNum(0, this.options.height))
            ctx.stroke()
          }
          /** 绘制干扰点 **/
          for (var n = 0; n < this.options.width / 4; n++) {
            ctx.fillStyle = randomColor(0, 255)
            ctx.beginPath()
            ctx.arc(randomNum(0, this.options.width), randomNum(0, this.options.height), 1, 0, 2 * Math.PI)
            ctx.fill()
          }
        },
        /** 验证验证码 **/
        validate: function (code) {
          var verifyCode = code.toLowerCase()
          var vCode = this.options.code.toLowerCase()
          if (verifyCode === vCode) {
            return true
          } else {
            return false
          }
        }
      }
      /** 生成字母数组 **/
      function getAllLetter () {
        var letterStr = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'
        return letterStr.split(',')
      }
      /** 生成一个随机数 **/
      function randomNum (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
      }
      /** 生成一个随机色 **/
      function randomColor (min, max) {
        var r = randomNum(min, max)
        var g = randomNum(min, max)
        var b = randomNum(min, max)
        return 'rgb(' + r + ',' + g + ',' + b + ')'
      }
      return new GVerify(id)
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
