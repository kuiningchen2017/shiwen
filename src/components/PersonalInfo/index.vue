<template>
  <div class="content animated fadeInLeft">
    <div class="list">
      <li>
        <h3>头像</h3>
        <div class="box">
          <img src="@/assets/headimg.png">
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <h3>用户名</h3>
        <div class="box">
          <p>陌陌的妈妈</p>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <h3>昵称</h3>
        <div class="box" @click="setname">
          <p>{{this.nick}}</p>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <h3>性别</h3>
        <div class="box" @click="setsex">
          <p>{{this.sex}}</p>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <h3>出生年月</h3>
        <div class="box" @click="setdate">
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
    <div class="sex" v-if="active">
      <mt-popup v-model="active" position="bottom" class="mint-popup">
        <mt-picker :slots="slots" :show-toolbar="true"  ref="picker">
          <mt-button @click="handleConfirm" class="sure">确认</mt-button>
        </mt-picker>
      </mt-popup>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { MessageBox, DatetimePicker, Picker} from 'mint-ui'
Vue.component(DatetimePicker.name, DatetimePicker, Picker.name, Picker)
export default {
  data () {
    return {
      nick: '还是空的，快来去个有逼格的名字吧',
      birthday: '未设置',
      startDate: new Date('1968-01-01'),
      slots: [{values: ['男', '女']}],
      active: false,
      sex: '未设置'
    }
  },
  methods: {
    setname () {
      MessageBox.prompt('请输入昵称', '')
        .then(({ value, action }) => {
          this.nick = value
        })
        .catch(error => {
          console.log(error)
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
      this.birthday = `${date.getFullYear()}-${month}-${day}`
    },
    setsex () {
      this.active = true
    },
    handleConfirm () {
      this.sex = this.$refs.picker.getValues()[0]
      this.active = false
    }
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
}
</style>
