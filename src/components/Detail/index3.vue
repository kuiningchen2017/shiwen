<template>
  <div class="content animated fadeInLeftBig">
    <div class="detail">
      <img src="@/assets/logo.png" alt="#">
      <div class="audio" @click="gostart">
        <div id="aaa" v-if="flag">
          <img src="@/assets/1.png">
        </div>
        <ul class="item" v-else>
          <li ref='tip'><img src="@/assets/3.png"></li>
          <!-- <li><img src="@/assets/2.png"></li>
          <li><img src="@/assets/1.png"></li> -->
        </ul>
      </div>
    </div>
    <div class="general" id="general">
      <div class="head">
        <router-link to="#" tag="li" v-for = "(item, index) of navlist" :key = "index">
          <span :class="{ active:index==current }" @click="goAnchor(item.selector,index)">{{ item.name }}</span>
        </router-link>
      </div>
      <div class="article">
        <p>在五四文化运动中</p>
      </div>
    </div>
    <div class="book" id="book">
      <div class="head">
        <h2>
          <b></b>
          课本章节
        </h2>
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
    <div class="video" id="video">
      <div class="head">
        <h2>
          <b></b>
          推荐课程
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
import animate from 'animate.css'
Vue.use(animate)
export default {
  data () {
    return {
      current: 0,
      flag: true,
      navlist: [
        {
          name: '概述',
          selector: '#general'
        },
        {
          name: '章节',
          selector: '#book'
        },
        {
          name: '评论',
          selector: '#comment'
        }
      ]
    }
  },
  methods: {
    goAnchor (selector, index) {
      document.querySelector(selector).scrollIntoView(true)
      this.current = index
    },
    gostart () {

    }
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
    flex-shrink: 0;
    height: rem750(500);
    padding: rem750(27) rem750(30) rem750(36) rem750(20);
    box-sizing: border-box;
    @include _flex(space-between,center,column);
    img {
      width: rem750(254);
      // height: 100%;
    }
    .audio {
      position: relative;
      @include rect(rem750(50), rem750(50));
      border-radius: 50%;
      border: rem750(2) solid #1aad19;
      #aaa {
        @include rect(rem750(28), rem750(24));
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 0;
        img{
          @include rect(100%, 100%)
       }
      }
      .item {
        li{
          @include rect(rem750(28), rem750(24));
          list-style: none;
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          img {
            @include rect(100%, 100%)
          }
        }
      }
    }
  }
  .general, .book, .comment, .video {
    margin-bottom: rem750(12);
    width:100%;
    background: $bg-black;
    flex-shrink: 0;
  }
  .general {
    .head {
      width: 100%;
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
          box-sizing: border-box;
        }
        .active {
          border-bottom: rem750(5) solid #1992cf;
        }
      }

    }
    .article {
      width: rem750(676);
      min-height: rem750(135);
      padding:rem750(27) rem750(37);
      p {
        line-height: rem750(45);
        font-size: remr750(21);
        text-indent: rem750(42)
      }
    }
  }
  .book {
    height: rem750(600);
  }
  .comment {
    height: rem750(370);
  }
  .video {
    height: rem750(357);
  }
  .comment, .book, .video{
    .head {
      margin: rem750(37) rem750(28) 0 rem750(20);
      width: rem750(702);
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
      margin: rem750(23) 0 0 rem750(20);
    }
  }
}
</style>
