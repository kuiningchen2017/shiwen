<template>
  <div class="content">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item of banner" :key="item.News_ID">
        <li @click="see(item.News_URL)">
          <img :src="item.Attachment_Path"/>
        </li>
      </mt-swipe-item>
    </mt-swipe>
    <div class="navlist">
      <router-link :to="item.path" tag="li" v-for = "(item, index) of navList" :key = "index">
        <img :src="item.imgUrl" alt="#"/>
        <p>{{ item.name }}</p>
      </router-link>
    </div>
    <div class="course">
      <div class="head">
        <h2>
          <b></b>
          精品课程
        </h2>
        <span @click="gocourse">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(item,index) of courselist" :key ="index">
          <img :src="item.Attachment_Path" alt="#">
          <span>{{item.Resource_Name}}</span>
          <span>{{item.Teacher_showTitle}}</span>
        </li>
      </div>
    </div>
    <div class="common">
      <div class="head">
        <h2>
          <b></b>
          家校共建
        </h2>
        <span @click="gocommon">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(item,index) of commonlist" :key ="index">
          <img :src="item.Attachment_Path" alt="#">
          <span>{{item.Resource_Name}}</span>
          <span>{{item.Teacher_showTitle}}</span>
        </li>
      </div>
    </div>
    <div class="classroom">
      <div class="head">
        <h2>
          <b></b>
          第二课堂
        </h2>
        <span @click="goclassroom">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(item,index) of classroomlist" :key ="index">
          <img :src="item.Attachment_Path" alt="#">
          <span>{{item.Resource_Name}}</span>
          <span>{{item.Teacher_showTitle}}</span>
        </li>
      </div>
    </div>
    <div class="company">
     <p>&copy;2018郑州石水源教育科技有限公司&nbsp;&nbsp;豫ICP备17001731号-2</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.use(Swipe, SwipeItem)
export default {
  data () {
    return {
      banner: [],
      courselist: [],
      commonlist: [],
      classroomlist: [],
      navList: [
        {
          imgUrl: require('@/assets/icon_08.png'),
          name: '同步课堂',
          path: '123'
        },
        {
          imgUrl: require('@/assets/icon_09.png'),
          name: '疑难解析',
          path: '123'
        },
        {
          imgUrl: require('@/assets/icon_10.png'),
          name: '直播课堂',
          path: '123'
        },
        {
          imgUrl: require('@/assets/icon_11.png'),
          name: '我的学习',
          path: '123'
        }
      ]
    }
  },
  created () {
    axios.post('/shishuiyuan/index/fzkt/viewpager')
      .then(data => {
        console.log(data.data)
        this.banner = data.data
      })
    axios.post('/shishuiyuan/index/fzkt/excellent')
      .then(data => {
        console.log(data.data)
        this.courselist = data.data
      })
    axios.post('/shishuiyuan/index/fzkt/jxgj')
      .then(data => {
        console.log(data.data)
        this.commonlist = data.data
      })
    axios.post('/shishuiyuan/index/fzkt/ndclass')
      .then(data => {
        console.log(data.data)
        this.classroomlist = data.data
      })
  },
  methods: {
    see (e) {
      window.location.href = e
    },
    gocourse () {
      let title = 'excellent'
      this.$router.push({name: 'list', params: {title: title}})
    },
    gocommon () {
      let title = 'jxgj'
      this.$router.push({name: 'list', params: {title: title}})
    },
    goclassroom () {
      let title = 'ndclass'
      this.$router.push({name: 'list', params: {title: title}})
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content{
  background: $bg-base;
  .mint-swipe {
    width:100%;
    height: rem750(300);
    flex-shrink: 0;
    li {
      @include rect(100%, 100%);
      img {
        @include rect(100%, 100%);
      }
    }
  }
  .navlist {
    @include _flex(space-around,center);
    flex-shrink: 0;
    width: 100%;
    height: rem750(212);
    background: $bg-black;
    margin-bottom: $bottom;
    li {
      @include _flex(center,center,column);
      img {
        width: rem750(100);
        height: rem750(100);
        padding-bottom: rem750(16);
      }
      p {
        font-size: rem750(22);
      }
    }
  }
  .course {
    height:rem750(412);
    margin-bottom: $bottom;
  }
  .classroom {
    height:rem750(412);
  }
  .common {
    height:rem750(379);
    margin-bottom: $bottom;
  }
  .course, .classroom, .common{
    width:100%;
    background: $bg-black;
    flex-shrink: 0;
    .head {
      margin: rem750(29) rem750(28) 0 rem750(24);
      width: rem750(698);
      @include _flex(space-between,center);
      h2 {
        font-size: $font-30;
        height: rem750(40);
        font-weight: 100;
        @include _flex(center,center);
        b {
          width: rem750(6);
          height: rem750(24);
          background: #1992cf;
          border-radius: 30%;
          margin-right: rem750(8);
        }
      }
      span {
        font-size: $font-20;
        color: #4d4d4d;
        i {
          font-size: $font-18;
        }
      }
    }
    .box {
      width: rem750(710);
      margin: rem750(19) 0 0 rem750(20);
      @include _flex(space-between,flex-start);
      li {
        width: rem750(346);
        @include _flex(flex-start,flex-start,column);
        img {
          @include rect(100%, 100%);
          border-radius: rem750(10);
          margin-bottom: rem750(17);
        }
        span {
          line-height: rem750(34);
          font-size: $font-20;
          color: #090909;
          padding-left: rem750(15)
        }
      }
    }
  }
  .company {
    width:100%;
    height: rem750(55);
    p {
      line-height: rem750(55);
      text-align:center;
      font-size: rem750(12);
      color: #898989;
    }
  }
}
</style>
