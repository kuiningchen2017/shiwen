<template>
  <div class="content animated fadeInLeft">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) of banner" :key="index">
        <li @click="godetails(item.News_URL,item.News_Property,item.File_ID,item.File_Code)">
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
          <span>精品课程</span>
        </h2>
        <span @click="golist('023')">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(item,index) of courselist" :key ="index" @click="godetail(item.File_ID, item.File_Code)">
          <img :src="item.Attachment_Path" alt="#">
          <span>{{item.File_Name}}</span>
          <span>{{item.File_SubName}}</span>
        </li>
      </div>
    </div>
    <div class="common">
      <div class="head">
        <h2>
          <b></b>
          <span>疑难解析</span>
        </h2>
        <span @click="golist('235')">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(item,index) of commonlist" :key ="index" @click="godetail(item.File_ID, item.File_Code)">
          <img :src="item.Attachment_Path" alt="#">
          <span>{{item.File_Name}}</span>
          <span>{{item.File_SubName}}</span>
        </li>
      </div>
    </div>
    <div class="classroom">
      <div class="head">
        <h2>
          <b></b>
          <span>第二课堂</span>
        </h2>
        <span @click="golist('018')">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(item,index) of classroomlist" :key ="index" @click="godetail(item.File_ID, item.File_Code)">
          <img :src="item.Attachment_Path" alt="#">
          <span>{{item.File_Name}}</span>
          <span>{{item.File_SubName}}</span>
        </li>
      </div>
    </div>
    <div class="company">
      <p>&copy;河南师问教育科技有限公司&nbsp;&nbsp;豫ICP备19001139号</p>
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
          path: '/list/tbkt'
        },
        {
          imgUrl: require('@/assets/icon_09.png'),
          name: '疑难解析',
          path: '/list/235'
        },
        {
          imgUrl: require('@/assets/icon_10.png'),
          name: '直播课堂',
          path: '/liveclassroom'
        },
        {
          imgUrl: require('@/assets/icon_11.png'),
          name: '我的任务',
          path: '/mywork/three'
        }
      ]
    }
  },
  created () {
    axios.post(`${this.GLOBAL.shishuiyuan}/index/picture/view/id/mvb/num/3`)
      .then(data => {
        console.log(data.data)
        this.banner = data.data
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/top/sandglass/id/AB/num/mq/p/0`)
      .then(data => {
        console.log(data.data)
        this.courselist = data.data
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/top/sandglass/id/ad/num/mq/p/0`)
      .then(data => {
        console.log(data.data)
        this.commonlist = data.data
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/top/sandglass/id/tp/num/mq/p/0`)
      .then(data => {
        console.log(data.data)
        this.classroomlist = data.data
      })
  },
  methods: {
    godetails (url, property, id, code) {
      console.log(url, property, id, code)
      if (property === '0') {
        window.location.href = url
      } else if (property === '1') {
        let URL = `http://sw.shishuiyuan999.com/index/picture/del/id/${id}/key/${code}`
        window.location.href = URL
      }
    },
    golist (type) {
      let title = type
      this.$router.push({name: 'list', params: {title: title}})
    },
    godetail (id, code) {
      this.$router.push({name: 'videodetail', params: {id: id, code: code}})
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
        width: rem750(120);
        height: rem750(120);
        padding-bottom: rem750(16);
      }
      p {
        font-size: $font-nav;
      }
    }
  }
  .course {
    height:rem750(412);
    margin-bottom: $bottom;
  }
  .common {
    height:rem750(412);
    margin-bottom: $bottom;
  }
  .classroom {
    height:rem750(412);
  }
  .course, .classroom, .common{
    width:100%;
    background: $bg-black;
    flex-shrink: 0;
    .head {
      padding: rem750(29) rem750(28) 0 rem750(24);
      width: 100%;
      box-sizing: border-box;
      @include _flex(space-between,center);
      h2 {
        font-size: $font-30;
        height: rem750(40);
        @include _flex(center,center);
        b {
          width: rem750(6);
          height: rem750(24);
          background: $bg-side;
          border-radius: 30%;
          margin-right: rem750(8);
        }
        span {
          line-height: rem750(40);
          color: $text-black;
          font-size: $font-title;
        }
      }
      span {
        font-size: $font-20;
        color: $text-more;
        i {
          font-size: $font-18;
        }
      }
    }
    .box {
      width: 100%;
      box-sizing: border-box;
      padding: rem750(19) rem750(20) 0 rem750(20);
      @include _flex(space-between,flex-start);
      li {
        width: rem750(346);
        @include _flex(flex-start,flex-start,column);
        img {
          @include rect(100%,  rem750(210));
          border-radius: rem750(10);
          margin-bottom: rem750(17);
        }
        span {
          line-height: rem750(40);
          font-size: $font-26;
          color: $text-black;
          padding-left: rem750(15);
          width: rem750(320);
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
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
