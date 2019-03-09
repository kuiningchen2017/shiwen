<template>
  <div class="content animated fadeInLeftBig">
    <div class="detail">
      <div class="img">
        <img :src="this.img" alt="#">
        <p class="look iconfont icon-erji">&nbsp;{{this.pageview}}</p>
      </div>
      <div class="audio-wrapper">
        <audio ref="audio">
          <source :src="this.url" type="audio/mp3">
        </audio>
        <!-- <div class="audio-left" @click="player">
          <img id="audioPlayer"  v-if="active" src="@/assets/pause.png">
          <img id="audioPlayer" v-else src="@/assets/start.gif">
        </div> -->
        <div class="audio-left" @click="player" v-if="active">
          <img id="audioPlayer" src="@/assets/pause.png">
        </div>
        <div class="audio-left" @click="paused" v-else>
          <img id="audioPlayer" src="@/assets/start.gif">
        </div>
        <div class="audio-right">
          <p>{{this.title}}</p>
          <div class="progress-bar-bg" id="progressBarBg"><span id="progressDot"></span>
            <div class="progress-bar" id="progressBar"></div>
          </div>
          <div class="audio-time"><span class="audio-length-current" id="audioCurTime">00:00</span><span class="audio-length-total">00:00</span></div>
        </div>
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
    </div>
    <div class="video" id="video">
      <div class="head">
        <h2>
          <b></b>
          推荐音频
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
import axios from 'axios'
import { Indicator } from 'mint-ui'
import $ from 'jquery'
export default {
  data () {
    return {
      num: 0,
      current: 0,
      active: true,
      img: '',
      pageview: '',
      url: '',
      title: '',
      content: '',
      tuijianlist: [],
      navlist: [
        {
          name: '概述',
          selector: '#general'
        },
        {
          name: '评论',
          selector: '#comment'
        }
      ]
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
  methods: {
    goAnchor (selector, index) {
      document.querySelector(selector).scrollIntoView(true)
      this.current = index
    },
    godetail (id, code) {
      console.log(id, code)
      this.$router.push({name: 'audiodetail', params: {id: id, code: code}})
    },
    golist () {
      this.$router.push({name: 'list', params: {title: this.classA}})
    },
    gocommentlist () {
      this.$router.push({name: 'commentlist', params: {id: this.$route.params.id, code: this.$route.params.code}})
    },
    paused () {
      var audio = this.$refs.audio
      this.active = true
      if (!audio.paused) {
        // 点击暂停当前音频
        audio.pause()
      }
    },
    player () {
      var that = this
      var audio = that.$refs.audio
      if (that.num === 0) {
        // 第一次点击
        audio.load()
        that.active = false
        that.num++
        audio.oncanplaythrough = function () {
          // 监听音频播放时间并更新进度条
          audio.addEventListener('timeupdate', function () {
            updateProgress(audio)
          }, false)
          // 监听播放完成事件
          audio.addEventListener('ended', function () {
            audioEnded()
          }, false)
          // 改变播放/暂停图片
          if (audio.paused) {
            // 开始播放当前点击的音频
            audio.play()
          }
          // 点击进度条跳到指定点播放
          // PS：此处不要用click，否则下面的拖动进度点事件有可能在此处触发，此时e.offsetX的值非常小，会导致进度条弹回开始处（简直不能忍！！）
          $('#progressBarBg').on('mousedown', function (e) {
            // 只有音乐开始播放后才可以调节，已经播放过但暂停了的也可以
            if (!audio.paused || audio.currentTime !== 0) {
              var pgsWidth = $('.progress-bar-bg').width()
              var rate = e.offsetX / pgsWidth
              audio.currentTime = audio.duration * rate
              updateProgress(audio)
            }
          })
          /**
          * 音频播放时间换算
          * @param {number} value - 音频当前播放时间，单位秒
          */
          function transTime (value) {
            var time = ''
            var h = parseInt(value / 3600)
            value %= 3600
            var m = parseInt(value / 60)
            var s = parseInt(value % 60)
            if (h > 0) {
              time = formatTime(h + ':' + m + ':' + s)
            } else {
              time = formatTime(m + ':' + s)
            }
            return time
          }
          /**
          * 格式化时间显示，补零对齐
          * eg：2:4  -->  02:04
          * @param {string} value - 形如 h:m:s 的字符串
          */
          function formatTime (value) {
            var time = ''
            var s = value.split(':')
            var i = 0
            for (; i < s.length - 1; i++) {
              time += s[i].length === 1 ? ('0' + s[i]) : s[i]
              time += ':'
            }
            time += s[i].length === 1 ? ('0' + s[i]) : s[i]
            return time
          }
          /**
          * 更新进度条与当前播放时间
          * @param {object} audio - audio对象
          */
          function updateProgress (audio) {
            var value = audio.currentTime / audio.duration
            $('#progressBar').css('width', value * 100 + '%')
            $('#progressDot').css('left', value * 100 + '%')
            $('#audioCurTime').html(transTime(audio.currentTime))
            $('.audio-length-total').html(transTime(audio.duration))
          }
          /**
          * 播放完成时把进度调回开始的位置
          */
          function audioEnded () {
            $('#progressBar').css('width', 0)
            $('#progressDot').css('left', 0)
            $('#audioCurTime').html(transTime(0))
            // $('#audioPlayer').attr('src', require('@/assets/pause.png'))
            that.active = true
          }
          dragProgressDotEvent(audio)
          /**
          * 鼠标拖动进度点时可以调节进度
          * @param {*} audio
          */
          function dragProgressDotEvent (audio) {
            var dot = document.getElementById('progressDot')
            var position = {
              oriOffestLeft: 0, // 移动开始时进度条的点距离进度条的偏移值
              oriX: 0, // 移动开始时的x坐标
              maxLeft: 0, // 向左最大可拖动距离
              maxRight: 0 // 向右最大可拖动距离
            }
            var flag = false // 标记是否拖动开始
            // 鼠标按下时
            dot.addEventListener('mousedown', down, false)
            dot.addEventListener('touchstart', down, false)
            // 开始拖动
            document.addEventListener('mousemove', move, false)
            document.addEventListener('touchmove', move, false)
            // 拖动结束
            document.addEventListener('mouseup', end, false)
            document.addEventListener('touchend', end, false)
            function down (event) {
              if (!audio.paused || audio.currentTime !== 0) { // 只有音乐开始播放后才可以调节，已经播放过但暂停了的也可以
                flag = true
                position.oriOffestLeft = dot.offsetLeft
                position.oriX = event.touches ? event.touches[0].clientX : event.clientX // 要同时适配mousedown和touchstart事件
                position.maxLeft = position.oriOffestLeft // 向左最大可拖动距离
                position.maxRight = document.getElementById('progressBarBg').offsetWidth - position.oriOffestLeft // 向右最大可拖动距离
                // 禁止默认事件（避免鼠标拖拽进度点的时候选中文字）
                if (event && event.preventDefault) {
                  event.preventDefault()
                } else {
                  event.returnValue = false
                }
                // 禁止事件冒泡
                if (event && event.stopPropagation) {
                  event.stopPropagation()
                } else {
                  window.event.cancelBubble = true
                }
              }
            }
            function move (event) {
              if (flag) {
                var clientX = event.touches ? event.touches[0].clientX : event.clientX // 要同时适配mousemove和touchmove事件
                var length = clientX - position.oriX
                if (length > position.maxRight) {
                  length = position.maxRight
                } else if (length < -position.maxLeft) {
                  length = -position.maxLeft
                }
                var pgsWidth = $('.progress-bar-bg').width()
                var rate = (position.oriOffestLeft + length) / pgsWidth
                audio.currentTime = audio.duration * rate
                updateProgress(audio)
                // console.log(audio.paused)
                // if (audio.paused) {
                //   that.active = false
                // }
              }
            }
            function end () {
              flag = false
            }
          }
        }
      } else {
        // 改变播放/暂停图片
        if (audio.paused) {
          // 开始播放当前点击的音频
          that.active = false
          audio.play()
        }
      }
    }
  },
  mounted () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/top/ledger/id/${this.$route.params.id}/key/${this.$route.params.code}`)
      .then(data => {
        console.log(data.data)
        this.url = data.data.Charge
        this.title = data.data.File_Name
        this.content = data.data.Content
        this.img = data.data.Image
        this.pageview = data.data.pageview
        Indicator.close()
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/top/refer/id/${this.$route.params.id}/key/${this.$route.params.code}`)
      .then(data => {
        this.classA = data.data.classA
        for (let i in data.data) {
          if (i <= 1) {
            this.tuijianlist.push(data.data[i])
          }
        }
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
    height: rem750(500);
    padding: rem750(27) rem750(30) rem750(36) rem750(20);
    box-sizing: border-box;
    @include _flex(space-between,center,column);

    .img {
      position: relative;
      img {
        @include rect(rem750(300),rem750(300));
        border-radius: rem750(10)
      }
      .look {
        position: absolute;
        @include rect(rem750(80), rem750(35));
        background: rgba(0, 0, 0, .5);
        line-height: rem750(35);
        text-align: center;
        color: #fff;
        font-size: rem750(22);
        bottom: 0;
        right: 0;
      }
    }
    .audio-wrapper {
      background-color: #fcfcfc;
      margin: rem750(10) auto;
      @include rect(rem750(600), rem750(120));
      border: rem750(1) solid #e0e0e0;
      @include _flex(space-between,center);
      .audio-left {
        width: 18%;
        height: 100%;
        @include _flex(center,center);
        img {
          @include rect(rem750(70), rem750(70));
        }
      }
      .audio-right {
        width: 80%;
        height: 100%;
        margin-right: 2%;
        p {
          font-size: rem750(28);
          height: 35%;
          line-height: 144%;
          margin: rem750(8) 0;
          padding-left: rem750(10);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: rem750(450);
        }
        .progress-bar-bg {
          background-color: #d9d9d9;
          position: relative;
          height: rem750(5);
          span {
            content: " ";
            @include rect(rem750(15), rem750(15));
            border-radius: 50%;
            -moz-border-radius: 50%;
            -webkit-border-radius: 50%;
            background-color: #09bb07;
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: rem750(-8);
            margin-left: rem750(-5);
          }
          .progress-bar {
            background-color: #09bb07;
            width: 0;
            height: rem750(5);
          }
        }
        .audio-time {
          overflow: hidden;
          margin-top: rem750(5);
          height: rem750(30);
          @include _flex(space-between, center);
          span {
            font-size: rem750(24);
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
}
</style>
