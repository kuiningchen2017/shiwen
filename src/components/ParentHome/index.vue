<template>
  <div class="content animated fadeInLeft">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) of banner" :key="index">
        <li @click="see(item.News_URL,item.News_Property,item.File_ID,item.File_Code)">
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
    <div class="audio">
      <div class="head">
        <h2>
          <b></b>
          <span>音频资源</span>
        </h2>
        <span @click="goaudio">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(item,index) of audiolist" :key ="index" @click="godetail(item.File_ID, item.File_Code,'audio')">
          <img :src="item.Attachment_Path" alt="#">
          <span>{{item.File_Name}}</span>
          <span>{{item.File_SubName}}</span>
        </li>
      </div>
    </div>
    <div class="video">
      <div class="head">
        <h2>
          <b></b>
          <span>视频资源</span>
        </h2>
        <span @click="govideo">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(item,index) of videolist" :key ="index" @click="godetail(item.File_ID, item.File_Code,'video')">
          <img :src="item.Attachment_Path" alt="#">
          <span>{{item.File_Name}}</span>
          <span>{{item.File_SubName}}</span>
        </li>
      </div>
    </div>
    <div class="live">
      <div class="head">
        <h2>
          <b></b>
          <span>直播课堂</span>
        </h2>
        <span>
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <router-link to = "" tag = "li">
          <img src="" alt="">
          <span></span>
          <span></span>
        </router-link>
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
      audiolist: [],
      videolist: [],
      navList: [
        {
          imgUrl: require('@/assets/icon_12.png'),
          name: '音频资源',
          path: '/list/audio'
        },
        {
          imgUrl: require('@/assets/icon_13.png'),
          name: '视频资源',
          path: '/list/video'
        },
        {
          imgUrl: require('@/assets/icon_14.png'),
          name: '直播课堂',
          path: '123'
        },
        {
          imgUrl: require('@/assets/icon_15.png'),
          name: '资讯信息',
          path: '/list/zxxx'
        }
      ]
    }
  },
  created () {
    axios.post('/shishuiyuan/index/picture/view/id/mp3/num/3')
      .then(data => {
        console.log(data.data)
        this.banner = data.data
      })
    axios.post('/shishuiyuan/index/top/sandglass/id/Vn/num/mq/p/fist')
      .then(data => {
        console.log(data.data)
        this.audiolist = data.data
      })
    axios.post('/shishuiyuan/index/top/sandglass/id/sn/num/mq/p/fist')
      .then(data => {
        console.log(data.data)
        this.videolist = data.data
      })
  },
  methods: {
    see (url, property, id, code) {
      if (property == 0) {
        window.location.href = url
      } else if (property == 1) {
        let URL = `http://sw.shishuiyuan999.com/index/picture/del/id/${id}/key/${code}`
        window.location.href = URL
      }
    },
    goaudio () {
      let title = 'audio'
      this.$router.push({name: 'list', params: {title: title}})
    },
    govideo () {
      let title = 'video'
      this.$router.push({name: 'list', params: {title: title}})
    },
    godetail (id, code, mark) {
      if (mark === 'video') {
        this.$router.push({name: 'videodetail', params: {id: id, code: code}})
      } else if (mark === 'audio') {
        this.$router.push({name: 'audiodetail', params: {id: id, code: code}})
      }else {
        console.log('mark')
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
  .audio, .video {
    height:rem750(412);
    margin-bottom: $bottom;
  }
  .live {
    height:rem750(412);
  }
  .audio, .video, .live{
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
          @include rect(100%, rem750(210));
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
