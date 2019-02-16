<template>
  <div class="content">
    <div class="detail">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item of banner" :key="item.banner_id" >
          <img :src="item"/>
        </mt-swipe-item>
      </mt-swipe>
      <div class="title">
        <li>
          <span>教师：{{this.teacher}}<i>{{this.subname}}</i></span>
          <em class="iconfont icon-yanjing-active">10690</em>
        </li>
        <li>星级</li>
      </div>
    </div>
    <div class="general" id="general">
      <div class="head">
        <router-link to="#" tag="li" v-for = "(item, index) of navlist" :key = "index">
          <span :class="{ active:index==current }" @click="goAnchor(item.selector,index)">{{ item.name }}</span>
        </router-link>
      </div>
      <div class="article">
        <p  v-html="this.content"></p>
      </div>
    </div>
    <div class="video" id="video">
      <div class="head">
        <h2>
          <b></b>
          视频
        </h2>
        <span>
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
    </div>
    <div class="course" id="course">
      <div class="head">
        <h2>
          <b></b>
          课件
        </h2>
        <span>
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
    </div>
    <div class="comment" id="comment">
      <div class="head">
        <h2>
          <b></b>
          评论
        </h2>
        <span>
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
    </div>
    <div class="teacher" id="teacher">
      <div class="head">
        <h2>
          <b></b>
          推荐讲师
        </h2>
        <span>
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.use(Swipe, SwipeItem)
export default {
  data () {
    return {
      current: 0,
      navlist: [
        {
          name: '概述',
          selector: '#general'
        },
        {
          name: '视频',
          selector: '#video'
        },
        {
          name: '课件',
          selector: '#course'
        },
        {
          name: '评论',
          selector: '#comment'
        }
      ],
      banner: [],
      teacher: '',
      subname: '',
      content: ''
    }
  },
  methods: {
    goAnchor (selector, index) {
      document.querySelector(selector).scrollIntoView(true)
      this.current = index
    }
  },
  mounted () {
    axios.post(`/shishuiyuan/index/mod/trait/nu/${this.$route.params.id}/p/${this.$route.params.code}`)
      .then(data => {
        console.log(data.data)
        this.banner = data.data.Image
        this.teacher = data.data.File_Name
        this.subname = data.data.File_SubName
        this.content = data.data.Content
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content{
  background: $bg-base;
  .detail {
    width: 100%;
    background: $bg-black;
    height: rem750(440);
    flex-shrink: 0;
    .mint-swipe {
      @include rect(100%, rem750(300));
      img {
        @include rect(100%, 100%)
      }
    }
    .title {
      @include rect(100%, rem750(140));
      box-sizing: border-box;
      padding-left: rem750(20);
      padding-right: rem750(40);
      @include _flex(space-around,space-between,column);
      li {
        @include _flex(space-between,center);
        span {
          font-size:rem750(25);
          color: #2e2e2e;
          i {
            padding-left: rem750(20);
            font-style: normal;
            color: #666666;
            font-size: rem750(18)
          }
        }
        em {
          font-size: rem750(20)
        }
      }
    }
  }
  .general, .course, .video, .teacher, .comment {
    margin-bottom: rem750(12);
    width:100%;
    background: $bg-black;
    flex-shrink: 0;
  }
  .general {
    .head {
      width: 100%;
      box-sizing: border-box;
      height: rem750(80);
      padding-left: rem750(30);
      background: #f2f2f2;
      display: flex;
      li {
        @include _flex(center,center,column);
        padding-right: rem750(50);
        span {
          font-size: rem750(25);
          color: #2e2e2e;
          line-height: rem750(47);
        }
        .active {
          border-bottom: rem750(5) solid #1992cf;
        }
      }
    }
    .article {
      width: 100%;
      box-sizing: border-box;
      min-height: rem750(189);
      padding:rem750(27) rem750(37);
      p {
        line-height: rem750(45);
        font-size: remr750(21);
        text-indent: rem750(42)
      }
    }
  }
  .comment {
    height: rem750(370);
  }
  .course, .video, .teacher {
    height: rem750(430)
  }
  .comment, .course, .video, .teacher{
    .head {
      width: 100%;
      box-sizing: border-box;
      padding: rem750(37) rem750(28) 0 rem750(20);
      @include _flex(space-between,center);
      h2 {
        font-size: $font-30;
        height: rem750(40);
        // font-weight: 100;
        @include _flex(center,center);
        b {
          width: rem750(6);
          height: rem750(24);
          background: $bg-side;
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
      margin: rem750(23) 0 0 rem750(20);
    }
  }
}
</style>
