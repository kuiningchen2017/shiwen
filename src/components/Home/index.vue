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
      <router-link :to = "item.path" tag = "li" v-for = "item of navList" :key = "item.Teacher_ID">
        <img :src = "item.imgUrl" alt = "#"/>
        <p>{{ item.name }}</p>
      </router-link>
    </div>
    <div class="teacher">
      <div class="head">
        <h2 ref="teacher">
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
    <div class="course">
      <div class="head">
        <h2 ref="course">
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
    <div class="theory">
      <div class="head">
        <h2>
          <b></b>
          名师论道
        </h2>
        <span>
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
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
      navList: [
        {
          imgUrl: require('@/assets/icon_01.png'),
          name: '教师学院',
          path: '/teacherhome'
        },
        {
          imgUrl: require('@/assets/icon_02.png'),
          name: '翻转课堂',
          path: '/turnhome'
        },
        {
          imgUrl: require('@/assets/icon_03.png'),
          name: '亲子课堂',
          path: '/parenthome'
        }
      ]
    }
  },
  created () {
    axios.post('/shishuiyuan/index/index/viewpager')
      .then(data => {
        console.log(data.data)
        this.banner = data.data
      })
      .catch(err => {
        console.log(err)
      })
    axios.post('/shishuiyuan/index/index/famous')
      .then(data => {
        console.log(data.data)
        this.teacherlist = data.data
      })
    axios.post('/shishuiyuan/index/index/excellent')
      .then(data => {
        console.log(data.data)
        this.courselist = data.data
      })
  },
  methods: {
    see (e) {
      window.location.href = e
    },
    goteacher () {
      this.$router.push({name: 'teacherlist', params: {title: this.$refs.teacher.innerText}})
    },
    gocourse () {
      this.$router.push({name: 'courselist', params: {title: this.$refs.course.innerText}})
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
        width: rem750(110);
        height: rem750(110);
        padding-bottom: rem750(16);
      }
      p {
        font-size: $font-20;
      }
    }
  }
  .teacher, .course {
    @include rect(100%, rem750(412));
    margin-bottom: $bottom;
  }
  .theory {
    @include rect(100%, rem750(388))
  }
  .teacher, .course, .theory {
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
