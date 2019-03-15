<template>
  <div class="content animated fadeInLeft">
    <div class="list">
      <li>
        <h3>头像</h3>
        <div class="box" @click.stop="uploadHeadImg">
          <img :src="this.headimg">
          <span class="iconfont icon-iconfontjiantou4">
            <input type="file" @change="handleFile" class="hiddenInput" style="display:none">
          </span>
        </div>
      </li>
      <li>
        <h3>用户名</h3>
        <div class="box">
          <p>{{this.account}}</p>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <h3>昵称</h3>
        <div class="box" @click.stop="setname">
          <p>{{this.Nickname}}</p>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <h3>性别</h3>
        <div class="box" @click.stop="setsex">
          <p>{{this.sex}}</p>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <h3>出生年月</h3>
        <div class="box" @click.stop="setdate">
          <p>{{this.birthday}}</p>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
        <mt-datetime-picker
          ref="date"
          type="date"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
          @confirm="handleConfirm"
          :startDate="startDate">
        </mt-datetime-picker>
      </li>
    </div>
    <div class="cancel" @click="cancel"> 退出登录</div>
    <div class="sex" v-if="active">
      <mt-popup v-model="active" position="bottom" class="mint-popup">
        <mt-picker :slots="slots" :show-toolbar="true"  ref="picker">
          <mt-button @click="sure" class="sure">确认</mt-button>
        </mt-picker>
      </mt-popup>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { MessageBox, DatetimePicker, Picker, Toast } from 'mint-ui'
Vue.component(DatetimePicker.name, DatetimePicker, Picker.name, Picker)
export default {
  data () {
    return {
      headimg: require('@/assets/headimg.png'),
      account: '',
      Nickname: '未设置',
      birthday: '未设置',
      startDate: new Date('1968-01-01'),
      slots: [{values: ['男', '女']}],
      active: false,
      sex: '未设置'
    }
  },
  methods: {
    // 打开图片上传
    uploadHeadImg () {
      this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显示
    handleFile (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      let data = new FormData()
      data.append('file', file)
      axios.post(`${this.GLOBAL.shishuiyuan}/api/utility/uploadfile?token=${localStorage.getItem('token')}`, data)
        .then(data => {
          let res = data.data.data
          this.headimg = res.full_path
          if (data.data.code === 0) {
            axios.post(`${this.GLOBAL.shishuiyuan}/api/user/setuseravatar?token=${localStorage.getItem('token')}&origin_name=${res.origin_name}&path=${res.path}`)
              .then(data => {
                Toast(data.data.message)
              })
          }
        })
    },
    setname () {
      MessageBox.prompt('请输入昵称', '')
        .then(({ value, action }) => {
          axios.post(`${this.GLOBAL.shishuiyuan}/api/user/setuserinfo?token=${localStorage.getItem('token')}&nickname=${value}`)
            .then(data => {
              Toast(data.data.message)
              if (data.data.code === 0) {
                this.Nickname = value
              }
            })
        })
    },
    setdate () {
      this.$refs.date.open()
    },
    handleConfirm (data) {
      const date = new Date(data)
      var month = date.getMonth() + 1
      if (month < 10) {
        month = '0' + month
      }
      var day = date.getDate()
      if (day < 10) {
        day = '0' + day
      }
      let birthday = `${date.getFullYear()}-${month}-${day}`
      axios.post(`${this.GLOBAL.shishuiyuan}/api/user/setuserinfo?token=${localStorage.getItem('token')}&birthday=${birthday}`)
        .then(data => {
          Toast(data.data.message)
          if (data.data.code === 0) {
            this.birthday = `${date.getFullYear()}-${month}-${day}`
          }
        })
    },
    setsex () {
      this.active = true
    },
    sure () {
      let sex = this.$refs.picker.getValues()[0]
      this.active = false
      let num = ''
      if (sex === '男') {
        num = 1
      } else {
        num = 2
      }
      console.log(num)
      axios.post(`${this.GLOBAL.shishuiyuan}/api/user/setuserinfo?token=${localStorage.getItem('token')}&sex=${num}`)
        .then(data => {
          Toast(data.data.message)
          if (data.data.code === 0) {
            this.sex = sex
          }
        })
    },
    cancel () {
      localStorage.clear()
      this.$router.push('/home')
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/api/user/getuserinfo?token=${localStorage.getItem('token')}`)
      .then(data => {
        if (data.data.code === 0) {
          this.account = data.data.data.User_Account
          if (data.data.data.User_Nickname !== '') {
            this.Nickname = data.data.data.User_Nickname
          }
          if (data.data.data.User_HeadImg !== '') {
            this.headimg = data.data.data.User_HeadImg
          }
          if (data.data.data.User_Sex !== 0) {
            if (data.data.data.User_Sex === 1) {
              this.sex = '男'
            } else {
              this.sex = '女'
            }
          }
          if (data.data.data.User_BirthDate !== '') {
            this.birthday = data.data.data.User_BirthDate
          }
        }
      })
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  background: #efefef;
  .list {
    padding:0 rem750(36);
    background: #fff;
    li {
      height: rem750(100);
      box-sizing: border-box;
      @include _flex(space-between,center);
      border-bottom: rem750(1) solid #efefef;
      &:last-of-type {
        border: 0;
      }
      h3 {
        font-size: $font-30;
        font-weight: 400;
      }
      .box {
        height: 100%;
        @include _flex(space-between,center);
        img {
          width: rem750(70);
          height: rem750(70);
          border-radius: 50%;
        }
        p {
          font-size: rem750(26);
          color: #9c9c9c;
        }
        span {
          padding-left: rem750(20);
          font-size: rem750(26);
          color: #a5a5a5;
        }
      }
    }
  }
  .cancel {
    margin-top: rem750(200);
    margin-left: rem750(75);
    @include rect(rem750(600), rem750(90));
    line-height: rem750(90);
    text-align: center;
    border-radius: rem750(45);
    background: $bg-side;
    color: #fff;
    font-size: $font-30;
    margin-bottom: rem750(36);
  }
}
</style>
