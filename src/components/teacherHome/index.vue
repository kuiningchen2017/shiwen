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
    <div class="train">
      <div class="head">
        <h2>
          <b></b>
          精准培训
        </h2>
        <span @click="gotrain">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(item,index) of trainlist" :key ="index">
          <img :src="item.Attachment_Path" alt="#">
          <span>{{item.Resource_Name}}</span>
          <span>{{item.Teacher_showTitle}}</span>
        </li>
      </div>
    </div>
    <div class="teacher">
      <div class="head">
        <h2>
          <b></b>
          中原名师
        </h2>
        <span @click="goteacher">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(item,index) of teacherlist" :key ="index">
          <img :src="item.Attachment_Path" alt="#">
          <span>{{item.Teacher_Name}}</span>
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
      teacherlist: [],
      courselist: [],
      trainlist: [],
      navList: [
        {
          imgUrl: require('@/assets/icon_04.png'),
          name: '同步课堂',
          path: '123'
        },
        {
          imgUrl: require('@/assets/icon_05.png'),
          name: '疑难解析',
          path: '123'
        },
        {
          imgUrl: require('@/assets/icon_06.png'),
          name: '直播课堂',
          path: '123'
        },
        {
          imgUrl: require('@/assets/icon_07.png'),
          name: '我的学习',
          path: '123'
        }
      ]
    }
  },
  created () {
    axios.post('/shishuiyuan/index/jsxy/viewpager')
      .then(data => {
        console.log(data.data)
        this.banner = data.data
      })
    axios.post('/shishuiyuan/index/jsxy/famous')
      .then(data => {
        console.log(data.data)
        this.teacherlist = data.data
      })
    axios.post('/shishuiyuan/index/jsxy/excellent')
      .then(data => {
        console.log(data.data)
        this.courselist = data.data
      })
    axios.post('/shishuiyuan/index/jsxy/accurate')
      .then(data => {
        console.log(data.data)
        this.trainlist = data.data
      })
  },
  methods: {
    see (e) {
      window.location.href = e
    },
    goteacher () {
      let title = 'famous'
      this.$router.push({name: 'teacherlist', params: {title: title}})
    },
    gocourse () {
      let title = 'excellent'
      this.$router.push({name: 'list', params: {title: title}})
    },
    gotrain () {
      let title = 'accurate'
      this.$router.push({name: 'list', params: {title: title}})
    }
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
  .train {
    height:rem750(412);
    margin-bottom: $bottom;
  }
  .teacher {
    height:rem750(412);
  }
  .course, .train, .teacher{
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
