<template>
  <div class="content" ref="content">
    <div class="detail">
      <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)"></video-player>
      <div class="info">
        <li class="title">
          <h2>{{this.File_Name}}</h2>
          <em class="iconfont icon-yanjing-active">{{this.pageview}}</em>
        </li>
        <li class="xingji">
          <div class="stars">
            <div class="gray">
              <img src="@/assets/star-gray.png" v-for="(item, index) of arr" :key="index">
            </div>
            <div class="light">
              <img src="@/assets/star-true.png" v-for="(item, number) of stars" :key="number">
            </div>
          </div>
          <!-- <p>￥<span>{{this.price}}</span></p> -->
        </li>
        <li class="speaker">
          <h2>主讲人：{{this.teacher_name}}</h2>
          <h2>{{this.teacher_title}}</h2>
        </li>
        <li class="ziyuan" v-if="flag" @click="gokejian">
          <div class="left">
            <span>尊享</span>
            <p>教学资源：教学设计、PPT、Word</p>
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
        <span @click="gocommentlist">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="commentbox">
        <div class="show" v-if="show">
          <p>暂无评论，快去发表你的看法吧！</p>
        </div>
        <div class="list" v-else>
          <li v-for="(item, index) of commentlist" :key="index">
            <div class="top">
              <img :src ="item.image" alt="#">
              <div class="right">
                <div class="title">
                  <h3>{{item.name}}</h3>
                  <p>{{item.date}}</p>
                </div>
                <div class="stars">
                  <div class="gray">
                    <img src="@/assets/star-gray.png" v-for="(item, num) of arr" :key="num">
                  </div>
                  <div class="light">
                    <img src="@/assets/star-true.png" v-for="(item, number) of starts[index]" :key="number">
                  </div>
                </div>
              </div>
            </div>
            <div class="commentlist">
              <p>{{item.content}}</p>
            </div>
          </li>
        </div>
      </div>
    </div>
    <div class="video">
      <div class="head">
        <h2>
          <b></b>
          推荐视频
        </h2>
        <span @click="golist">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(items,index) of tuijianlist" :key ="index" @click="godetail(items.File_ID, items.File_Code)">
          <img :src="items.Attachment_Path" alt="#">
          <span>{{items.File_Name}}</span>
          <span>{{items.File_SubName}}</span>
        </li>
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
      File_Name: '',
      price: '',
      pageview: '',
      teacher_name: '',
      teacher_title: '',
      flag: false,
      timer: null,
      tuijianlist: [],
      classA: '',
      arr: [1, 2, 3, 4, 5],
      stars: [],
      starts: [],
      commentlist: [],
      show: false,
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
      totalTime: '',
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
      this.totalTime = player.controlBar.durationDisplay.duration_
      if (localStorage.getItem('token')) {
        axios.post(`${this.GLOBAL.shishuiyuan}/api/userlearn/recordlog?token=${localStorage.getItem('token')}&file_id=${this.$route.params.id}&learn_time=0&total_time=${this.totalTime}`)
          .then(data => {})
        if (!this.timer) {
          this.timer = setInterval(() => {
            var current = player.controlBar.currentTimeDisplay.formattedTime_
            var learnTime = ''
            if (current.split(':').length === 2) {
              learnTime = (current.split(':')[0] * 60) + (current.split(':')[1] * 1)
            } else if (current.split(':').length === 3) {
              learnTime = (current.split(':')[0] * 3600) + (current.split(':')[1] * 60) + (current.split(':')[2] * 1)
            }
            axios.post(`${this.GLOBAL.shishuiyuan}/api/userlearn/recordlog?token=${localStorage.getItem('token')}&file_id=${this.$route.params.id}&learn_time=${learnTime}&total_time=${this.totalTime}`)
              .then(data => {})
          }, 10000)
        }
      }
    },
    onPlayerPause (player) {
      clearInterval(this.timer)
      this.timer = null
      if (localStorage.getItem('token')) {
        var current = player.controlBar.currentTimeDisplay.formattedTime_
        var learnTime = ''
        if (current.split(':').length === 2) {
          learnTime = (current.split(':')[0] * 60) + (current.split(':')[1] * 1)
        } else if (current.split(':').length === 3) {
          learnTime = (current.split(':')[0] * 3600) + (current.split(':')[1] * 60) + (current.split(':')[2] * 1)
        }
        console.log(learnTime)
        axios.post(`${this.GLOBAL.shishuiyuan}/api/userlearn/recordlog?token=${localStorage.getItem('token')}&file_id=${this.$route.params.id}&learn_time=${learnTime}&total_time=${this.totalTime}`)
          .then(data => {
            console.log(data.data)
          })
      }
    },
    goAnchor (selector, index) {
      document.querySelector(selector).scrollIntoView(true)
      this.current = index
    },
    gokejian () {
      this.$router.push({name: 'kejian', params: {id: this.$route.params.id, code: this.$route.params.code}})
    },
    godetail (id, code) {
      console.log(id, code)
      this.$router.push({name: 'videodetail', params: {id: id, code: code}})
    },
    golist () {
      this.$router.push({name: 'list', params: {title: this.classA}})
    },
    gocommentlist () {
      this.$router.push({name: 'commentlist', params: {id: this.$route.params.id, code: this.$route.params.code}})
    }
  },
  watch: {
    '$route.path' (newVal, oldVal) {
      console.log(newVal, oldVal)
      if (newVal !== oldVal) {
        window.location.reload()
      }
    }
  },
  mounted () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/top/ledger/id/${this.$route.params.id}/key/${this.$route.params.code}/token/${localStorage.getItem('token')}`)
      .then(data => {
        console.log(data.data)
        this.playerOptions.poster = data.data.Image
        this.playerOptions.sources[0].type = `video/${data.data.type}`
        this.playerOptions.sources[0].src = data.data.Charge
        this.content = data.data.Content
        this.File_Name = data.data.File_Name
        this.teacher_name = data.data.File_SubName
        this.price = data.data.Price
        this.pageview = data.data.pageview
        var startNum = data.data.star
        if (data.data.filetype === 1) {
          this.flag = true
        }
        var stars = []
        for (var i = 0; i < startNum; i++) {
          stars.push(i)
        }
        this.stars = stars
        if (data.data.teacher_title !== 0) {
          this.teacher_title = data.data.teacher_title
        }
        if (data.data.isAttachment === '0') {
          this.flag = false
        }
        Indicator.close()
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/top/refer/id/${this.$route.params.id}/key/${this.$route.params.code}`)
      .then(data => {
        console.log(data.data)
        this.classA = data.data.classA
        for (let i in data.data) {
          if (i <= 1) {
            this.tuijianlist.push(data.data[i])
          }
        }
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/discuss/list/id/${this.$route.params.id}/num/fd/key/${this.$route.params.code}/p/0`)
      .then(data => {
        console.log(data.data)
        if (data.data.length === 0) {
          this.show = true
        } else {
          for (var i = 0; i < 2; i++) {
            if (data.data[i] === undefined) {
              return false
            } else {
              this.commentlist.push(data.data[i])
              var res = data.data[i].star
              var startNum = res
              var starts = []
              for (var n = 0; n < startNum; n++) {
                starts.push(n)
              }
              this.starts.push(starts)
            }
          }
        }
      })
  },
  destroyed () {
    clearInterval(this.timer)
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
        height: rem750(50);
        .stars {
          height: rem750(40);
          position: relative;
          @include _flex(flex-start,center);
          img{
            @include rect(rem750(30), rem750(30));
            padding: rem750(5);
          }
          .light, .gray {
            display: flex;
          }
          .light {
            position:absolute;
            top: 0;
          }
        }
        p {
          color: #b3b3b3;
          padding-right: rem750(12);
          font-weight: 600;
          span {
            font-size: rem750(20)
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
        font-size: rem750(28);
      }
    }
    .article>p/deep/p {
      font-size: rem750(28)
    }
  }
  .comment {
    height: rem750(390);
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
    .commentbox {
      .show {
        @include rect(100%, rem750(310));
        @include _flex(center, center);
        p {
          color: rgb(97, 95, 95);
          font-size: rem750(30)
        }
      }
      .list {
        @include rect(100%, rem750(310));
        padding: 0 rem750(40);
        overflow: hidden;
        box-sizing: border-box;
        li {
          border-bottom: rem750(2) solid #f8f8f8;
          .top {
            height: rem750(106);
            padding: 0;
            @include _flex(space-between, center);
            img {
              @include rect(rem750(60), rem750(60));
              border-radius: 50%
            }
            .right {
              width: rem750(570);
              .title {
                @include _flex(space-between, center);
                h3 {
                  height: rem750(40);
                  line-height: rem750(40);
                  font-size: rem750(28);
                }
                p {
                  padding-top: rem750(15);
                  font-size: rem750(24);
                  color: rgb(92, 91, 91);
                }
              }
              .stars {
                height: rem750(40);
                position: relative;
                @include _flex(flex-start,center);
                img{
                  @include rect(rem750(30), rem750(30));
                  padding: rem750(5);
                }
                .light, .gray {
                  display: flex;
                }
                .light {
                  position:absolute;
                  top: 0;
                }
              }
            }
          }
          .commentlist {
            width: 100%;
            p {
              line-height: rem750(38);
              font-size: rem750(28);
              color: #000;
              padding-left: rem750(100);
              width: rem750(550);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
}
</style>
