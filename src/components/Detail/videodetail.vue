<template>
  <div class="content" ref="content">
    <div class="detail">
      <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)"></video-player>
      <div class="info">
        <li class="title">
          <h2>{{this.name}}</h2>
          <em class="iconfont icon-yanjing-active">10690</em>
        </li>
        <li class="xingji">
          <h2>星级</h2>
          <p>￥<span>{{this.price}}</span></p>
        </li>
        <li class="speaker">
          <h2>主讲人：王志宏</h2>
          <h2>省级高级教师</h2>
        </li>
        <li class="ziyuan" v-if="flag" @click="goziyuan">
          <div class="left">
            <span>尊享</span>
            <p>课件资源：教学设计、PPT、Word</p>
          </div>
          <div class="right">
            <p>查看详情</p>
            <i class="iconfont icon-iconfontjiantou4"></i>
          </div>
        </li>
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
    <div class="video">
      <div class="head">
        <h2>
          <b></b>
          推荐视频
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
import { Indicator } from 'mint-ui'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
Vue.use(VideoPlayer)
export default {
  data () {
    return {
      current: 0,
      content: '',
      name: '',
      price: '',
      flag: true,
      timer: null,
      navlist: [
        {
          name: '概述',
          selector: '#general'
        },
        {
          name: '评论',
          selector: '#comment'
        }
      ],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: '',
          src: '' // url地址
        }],
        poster: '', // 你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  },
  methods: {
    onPlayerPlay (player) {
      if (!this.timer) {
        this.timer = setInterval(() => {
          console.log(player.controlBar.currentTimeDisplay.formattedTime_)
        }, 10000)
      }
    },
    onPlayerPause (player) {
      clearInterval(this.timer)
      this.timer = null
      console.log(player.controlBar.currentTimeDisplay.formattedTime_)
    },
    goAnchor (selector, index) {
      document.querySelector(selector).scrollIntoView(true)
      this.current = index
    },
    goziyuan () {
      this.$router.push('/kejian')
    }
  },
  mounted () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    axios.post(`/shishuiyuan/index/top/ledger/id/${this.$route.params.id}/key/${this.$route.params.code}`)
      .then(data => {
        console.log(data.data)
        this.playerOptions.poster = data.data.Image
        this.playerOptions.sources[0].type = `video/${data.data.type}`
        this.playerOptions.sources[0].src = data.data.Charge
        this.content = data.data.Content
        this.name = data.data.File_Name
        this.price = data.data.Price
        if (data.data.isAttachment === '0') {
          this.flag = false
        }
        Indicator.close()
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
    flex-shrink: 0;
    // height: rem750(560);
    .info {
      padding: 0 rem750(20);
      margin-bottom: rem750(14);
      li {
        @include _flex(space-between,center);
      }
      .title {
        padding-top: rem750(25);
        h2 {
          font-size: rem750(27);
          line-height: rem750(47);
        }
        em {
          font-size: rem750(20);
          padding-right: rem750(12);
          color: #676767;
        }
      }
      .xingji {
        height: rem750(49);
        p {
          color: #f00000;
          padding-right: rem750(12);
          font-weight: 600;
          span {
            font-size: rem750(27)
          }
        }
      }
      .speaker {
        height: rem750(66);
        @include _flex(flex-start,center);
        h2 {
          font-size: rem750(26);
          padding-right: rem750(30)
        }
      }
      .ziyuan {
        height: rem750(56);
        .left {
          display: flex;
          span {
            @include rect(rem750(56),rem750(36));
            display: block;
            text-align: center;
            line-height: rem750(36);
            border-radius: rem750(5);
            background: #ff0000;
            font-size: rem750(24);
            color: #fff;
          }
          p {
            font-size: rem750(25);
            line-height: rem750(36);
            padding-left: rem750(30);
          }
        }
        .right {
          display: flex;
          p {
            color: #999999;
          }
          i {
            font-size: rem750(28);
            color: #999999;
          }
        }
      }
    }
  }
  .general, .comment, .video {
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
      box-sizing: border-box;
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
      width: 100%;
      box-sizing: border-box;
      min-height: rem750(189);
      padding:rem750(27) rem750(37);
      p {
        line-height: rem750(45);
        font-size: rem750(21);
        text-indent: rem750(42)
      }
    }
    .article>p/deep/p {
      font-size: rem750(20)
    }
  }
  .comment {
    height: rem750(355);
  }
  .video {
    height: rem750(404);
  }
  .comment, .video{
    .head {
      padding: rem750(37) rem750(28) 0 rem750(20);
      width: 100%;
      box-sizing: border-box;
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
