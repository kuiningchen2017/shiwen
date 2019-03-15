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
          <em class="iconfont icon-yanjing-active">{{this.pageview}}</em>
        </li>
        <li>
          <div class="stars">
            <div class="gray">
              <img src="@/assets/star-gray.png" v-for="(item, index) of arr" :key="index">
            </div>
            <div class="light">
              <img src="@/assets/star-true.png" v-for="(item, number) of stars" :key="number">
            </div>
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
      <div class="box">
        <li v-for = "(ite,index) of videolist" :key ="index" @click="godetail(ite.File_ID, ite.File_Code, 'video')">
          <img :src="ite.Attachment_Path" alt="#">
          <span>{{ite.File_Name}}</span>
          <span>{{ite.File_SubName}}</span>
        </li>
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
                    <img src="@/assets/star-gray.png" v-for="(item, index) of arr" :key="index">
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
    <div class="teacher" id="teacher">
      <div class="head">
        <h2>
          <b></b>
          推荐讲师
        </h2>
        <span @click="golist">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box">
        <li v-for = "(items,index) of tuijianlist" :key ="index" @click="godetail(items.File_ID, items.File_Code, 'teacher')">
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
import { Swipe, SwipeItem, Indicator } from 'mint-ui'
Vue.use(Swipe, SwipeItem)
export default {
  data () {
    return {
      current: 0,
      pageview: '',
      tuijianlist: [],
      videolist: [],
      arr: [1, 2, 3, 4, 5],
      stars: [],
      starts: [],
      commentlist: [],
      show: false,
      navlist: [
        {
          name: '简介',
          selector: '#general'
        },
        {
          name: '视频',
          selector: '#video'
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
    },
    godetail (id, code, mark) {
      if (mark === 'teacher') {
        this.$router.push({name: 'teacherdetail', params: {id: id, code: code}})
      } else {
        this.$router.push({name: 'videodetail', params: {id: id, code: code}})
      }
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
    axios.post(`${this.GLOBAL.shishuiyuan}/index/mod/trait/nu/${this.$route.params.id}/p/${this.$route.params.code}`)
      .then(data => {
        console.log(data.data)
        this.banner = data.data.Image
        this.teacher = data.data.File_Name
        this.subname = data.data.File_SubName
        this.content = data.data.Content
        this.videolist = data.data.video
        this.pageview = data.data.pageview
        var startNum = data.data.star
        var stars = []
        for (var i = 0; i < startNum; i++) {
          stars.push(i)
        }
        this.stars = stars
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
          font-size:rem750(30);
          color: #2e2e2e;
          i {
            padding-left: rem750(20);
            font-style: normal;
            color: #666666;
            font-size: rem750(26)
          }
        }
        em {
          color: #666;
          font-size: rem750(24)
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
  }
  .general, .video, .teacher, .comment {
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
        font-size: remr750(28);
      }
    }
    .article>p/deep/p {
      font-size: rem750(28)
    }
  }
  .comment {
    height: rem750(390);
  }
  .video, .teacher {
    height: rem750(430)
  }
  .comment, .video, .teacher{
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
</style>
