<template>
  <div class="content animated fadeInLeft">
    <div class="top">
      <div class="message">
        <img :src="this.headimg" >
        <div class="data">
          <h1>{{this.Nickname}}</h1>
          <!-- <p>大家好！</p> -->
        </div>
        <span class="iconfont icon-iconfontjiantou4" @click="goset"></span>
      </div>
    </div>
    <div class="center" v-if="active">
      <li  @click="goclass">
        <img src="@/assets/geren_01.png" alt="#">
        <h2>我的班级</h2>
      </li>
      <li  @click="gohomework">
        <img src="@/assets/geren_02.png" alt="#">
        <h2>我的发布</h2>
      </li>
    </div>
    <div class="list">
      <li>
        <span class="iconfont icon-xuexiao" style="color:#55b782"></span>
        <div class="box" @click="goschool">
          <h3>我的学校</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-tuijian" style="color:#dd4e53"></span>
        <div class="box" @click="gotuijian">
          <h3>我的推荐</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <div class="teacher" v-if="active">
        <li>
          <span class="iconfont icon-peixun" style="color:#f9c148"></span>
          <div class="box" @click="gotrain">
            <h3>我的培训</h3>
            <span class="iconfont icon-iconfontjiantou4"></span>
          </div>
        </li>
        <li>
          <span class="iconfont icon-dingdan" style="color:#4276e4"></span>
          <div class="box" @click="goorder">
            <h3>订单中心</h3>
            <span class="iconfont icon-iconfontjiantou4"></span>
          </div>
        </li>
        <li>
          <span class="iconfont icon-chengguo" style="color:#dd4e53"></span>
          <div class="box" @click="goresult">
            <h3>我的成果</h3>
            <span class="iconfont icon-iconfontjiantou4"></span>
          </div>
        </li>
        <li>
          <span class="iconfont icon-shoucang1" style="color:#f9c148"></span>
          <div class="box mark" @click="gofollow">
            <h3>我的关注</h3>
            <span class="iconfont icon-iconfontjiantou4"></span>
          </div>
        </li>
      </div>
      <div class="parent" v-else>
        <li>
          <span class="iconfont icon-peixun" style="color:#f9c148"></span>
          <div class="box" @click="gostudy">
            <h3>我的学习</h3>
            <span class="iconfont icon-iconfontjiantou4"></span>
          </div>
        </li>
        <li>
          <span class="iconfont icon-shoucang1" style="color:#f9c148"></span>
          <div class="box" @click="gofollow">
            <h3>我的关注</h3>
            <span class="iconfont icon-iconfontjiantou4"></span>
          </div>
        </li>
        <li>
          <span class="iconfont icon-zuoye" style="color:#55b782"></span>
          <div class="box mark" @click="gowork">
            <h3>我的任务</h3>
            <span class="iconfont icon-iconfontjiantou4"></span>
          </div>
        </li>
      </div>
    </div>
    <!-- <div class="foot">
      <li>
        <span class="iconfont icon-shoucang1" style="color:#f9c148"></span>
        <div class="box" @click="gofollow">
          <h3>我的关注</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      active: true,
      Nickname: '未设置',
      headimg: require('@/assets/headimg.png')
    }
  },
  mounted () {
    if (localStorage.getItem('token')) {
      if (this.$route.params.type === 'parent') {
        this.active = false
      }
      axios.post(`${this.GLOBAL.shishuiyuan}/api/user/getuserinfo?token=${localStorage.getItem('token')}`)
        .then(data => {
          if (data.data.code === 0) {
            if (data.data.data.User_Nickname !== '') {
              this.Nickname = data.data.data.User_Nickname
            }
            if (data.data.data.User_HeadImg !== '') {
              this.headimg = data.data.data.User_HeadImg
            }
          } else {
            this.$router.push('/login')
          }
        })
    } else {
      this.$router.push('/login')
    }
  },
  methods: {
    goset () {
      this.$router.push({name: 'personalinfo', params: {enter: this.$route.params.enter}})
    },
    goschool () {
      this.$router.push({name: 'schoolmessage', params: {enter: this.$route.params.enter}})
    },
    goclass () {
      this.$router.push({name: 'myclass', params: {enter: this.$route.params.enter}})
    },
    gotuijian () {
      this.$router.push({name: 'recommend', params: {enter: this.$route.params.enter}})
    },
    gotrain () {
      this.$router.push({name: 'mytrain', params: {enter: this.$route.params.enter}})
    },
    goorder () {
      this.$router.push({name: 'ordercenter', params: {enter: this.$route.params.enter}})
    },
    goresult () {
      this.$router.push({name: 'myresult', params: {enter: this.$route.params.enter}})
    },
    gofollow () {
      this.$router.push('/myfollow')
    },
    gohomework () {
      this.$router.push({name: 'homework', params: {enter: this.$route.params.enter}})
    },
    gostudy () {
      this.$router.push({name: 'mystudy', params: {enter: this.$route.params.enter}})
    },
    gowork () {
      this.$router.push({name: 'mywork', params: {enter: this.$route.params.enter}})
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  background: #efefef;
  .top {
    width: 100%;
    box-sizing: border-box;
    height: rem750(196);
    padding: rem750(38) rem750(30);
    background: #fff;
    margin-bottom: rem750(12);
    .message {
      height: rem750(120);
      @include _flex(space-between,center);
      img {
        width: rem750(120);
        height: rem750(120);
        padding-left: rem750(10);
        border-radius: 50%;
      }
      .data {
        width: rem750(460);
        height: 100%;
        @include _flex(space-around,space-around,column);
        h1 {
          line-height: rem750(50);
          font-weight: 400;
          font-size: $font-30;
        }
        p {
          line-height: rem750(30);
          color: #a6a6a6;
        }
      }
      span {
        color: #bcbcbc;
        font-size: rem750(26);
      }
    }
  }
  .center {
    @include rect(100%, rem750(200));
    @include _flex(space-around, center);
    background: #fff;
    flex-shrink: 0;
    margin-bottom: rem750(12);
    li {
      height: rem750(180);
      @include _flex(space-around, center, column);
      img {
        @include rect(rem750(122), rem750(122));
      }
      h2 {
        line-height: rem750(40);
        font-size: $font-32;
      }
    }
  }
  .list {
    margin-bottom: rem750(12)
  }
  .list, .foot {
    width:100%;
    box-sizing: border-box;
    padding-left: rem750(36);
    background: #fff;
    margin-bottom: rem750(12);
    li {
      height: rem750(120);
      @include _flex(space-between,center);
      .teacher {
        li{
          &:last-child {
            margin-bottom: rem750(12);
          }
        }
      }
      span {
        font-size: rem750(45);
      }
      .box {
        width: 91%;
        height: rem750(120);
        box-sizing: border-box;
        padding-right: rem750(36);
        border-bottom: rem750(1) solid #efefef;
        @include _flex(space-between,center);
        h3 {
          font-size: $font-32;
          font-weight: 400;
        }
        span {
          font-size: rem750(25);
          color: #a5a5a5;
        }
      }
      .mark {
        border: 0;
      }
    }
  }
}
</style>
