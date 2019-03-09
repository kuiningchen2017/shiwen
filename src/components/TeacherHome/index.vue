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
        <li v-for = "(item,index) of courselist" :key ="index" @click="godetail(item.File_ID, item.File_Code, 'video')">
          <img :src="item.Attachment_Path" alt="#">
          <span>{{item.File_Name}}</span>
          <span>{{item.File_SubName}}</span>
        </li>
      </div>
    </div>
    <div class="train">
      <div class="head">
        <h2>
          <b></b>
          <span>精准培训</span>
        </h2>
        <span @click="golist('014')">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(item,index) of trainlist" :key ="index" @click="godetail(item.File_ID, item.File_Code, 'video')">
          <img :src="item.Attachment_Path" alt="#">
          <span>{{item.File_Name}}</span>
          <span>{{item.File_SubName}}</span>
        </li>
      </div>
    </div>
    <div class="teacher">
      <div class="head">
        <h2>
          <b></b>
          <span>中原名师</span>
        </h2>
        <span @click="golist('725')">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(item,index) of teacherlist" :key ="index" @click="godetail(item.File_ID, item.File_Code, 'teacher')">
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
          <span>家校共建</span>
        </h2>
        <span @click="golist('jxgj')">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(item,index) of commonlist" :key ="index" @click="godetails(item.News_URL,item.News_Property,item.File_ID,item.File_Code)">
          <img :src="item.Attachment_Path" alt="#">
          <span>{{item.File_SubName}}</span>
          <!-- <span>{{item.File_SubName}}</span> -->
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
      trainlist: [],
      teacherlist: [],
      commonlist: [],
      navList: [
        {
          imgUrl: require('@/assets/icon_04.png'),
          name: '单元设计',
          path: '/list/365'
        },
        {
          imgUrl: require('@/assets/icon_05.png'),
          name: '课时设计',
          path: '/list/203'
        },
        {
          imgUrl: require('@/assets/icon_06.png'),
          name: '在线直播',
          path: '/live'
        },
        {
          imgUrl: require('@/assets/icon_07.png'),
          name: '我的课堂',
          path: '/myclassroom'
        }
      ]
    }
  },
  created () {
    axios.post(`${this.GLOBAL.shishuiyuan}/index/picture/view/id/wcc/num/3`)
      .then(data => {
        console.log(data.data)
        this.banner = data.data
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/top/sandglass/id/AB/num/mq/p/0`)
      .then(data => {
        console.log(data.data)
        this.courselist = data.data
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/top/sandglass/id/zy/num/mq/p/0`)
      .then(data => {
        console.log(data.data)
        this.trainlist = data.data
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/mod/gaste/id/pm/num/mt/p/0`)
      .then(data => {
        console.log(data.data)
        this.teacherlist = data.data
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/asked/view/id/gk/num/mt/p/0`)
      .then(data => {
        console.log(data.data)
        this.commonlist = data.data
      })
  },
  methods: {
    godetails (url, property, id, code) {
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
    godetail (id, code, mark) {
      if (mark === 'video') {
        this.$router.push({name: 'videodetail', params: {id: id, code: code}})
      } else {
        this.$router.push({name: 'teacherdetail', params: {id: id, code: code}})
      }
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
  .course, .train, .teacher {
    height:rem750(412);
    margin-bottom: $bottom;
  }
  .common {
    height:rem750(379);
  }
  .course, .train, .teacher, .common{
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
