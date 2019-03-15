<template>
  <div class="content" ref="content">
    <div class="detail">
      <div class="img">
        <img :src="this.img" alt="#">
        <p class="look">观看次数：{{this.pageview}}</p>
      </div>
      <div class="right">
        <li>
          <h2>{{this.name}}</h2>
          <div class="stars">
            <div class="gray">
              <img src="@/assets/star-gray.png" v-for="(item, index) of arr" :key="index">
            </div>
            <div class="light">
              <img src="@/assets/star-true.png" v-for="(item, number) of stars" :key="number">
            </div>
          </div>
        </li>
        <li><h2>{{this.grade}}</h2></li>
        <li><h2>{{this.press}}</h2></li>
        <li><h2>主讲人:{{this.teacher}}</h2></li>
        <!-- <li><h2><b>￥{{this.price}}</b></h2></li> -->
      </div>
    </div>
    <div class="general" id="general">
      <div class="head">
        <router-link to="#" tag="li" v-for = "(item, index) of navlist" :key = "index">
          <span :class="{ active:index==current }" @click="goAnchor(item.selector,index)">{{ item.name }}</span>
        </router-link>
      </div>
      <div class="article">
        <p v-html="this.content"></p>
      </div>
    </div>
    <div class="book" id="book">
      <div class="head">
        <h2>
          <b></b>
          {{this.kbzj}}
        </h2>
      </div>
      <div class="box">
        <div class="section">
          <ul class="title" v-for="item of catalog" :key="item.Relation_TableID2">
            <li v-if="order">{{item.CD_Name}}&nbsp;{{item.Relation_text}}</li>
            <ul class="jie">
              <li v-for="(items, index) of item.list" :key="index" @click="godetail(item.islist,items.File_ID,items.File_Code)">{{items.File_Name}}</li>
            </ul>
          </ul>
        </div>
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
    <div class="video" id="video">
      <div class="head">
        <h2>
          <b></b>
          推荐课程
        </h2>
        <span @click="golist">
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="box1">
        <li v-for = "(items,index) of tuijianlist" :key ="index" @click="detail(items.File_ID, items.File_Code)">
          <img :src="items.Attachment_Path" alt="#">
          <span>{{items.File_Name}}</span>
          <!-- <span>{{items.File_SubName}}</span> -->
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Indicator } from 'mint-ui'
export default {
  data () {
    return {
      current: 0,
      img: '',
      content: '',
      name: '',
      press: '',
      grade: '',
      teacher: '',
      price: '',
      pageview: '',
      kbzj: '课本章节',
      catalog: [],
      order: true,
      tuijianlist: [],
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
    godetail (num, id, code) {
      console.log(num, id, code)
      if (num === 1) {
        this.$router.push({name: 'videodetail', params: {id: id, code: code}})
      }
    },
    detail (id, code) {
      console.log(id, code)
      this.$router.push({name: 'booksdetail', params: {id: id, code: code}})
    },
    gocommentlist () {
      this.$router.push({name: 'commentlist', params: {id: this.$route.params.id, code: this.$route.params.code}})
    },
    golist () {
      if (this.$route.params.title === '203' || this.$route.params.title === '365' || this.$route.params.title === 'tbkt') {
        this.$router.push({name: 'list', params: {title: this.$route.params.title}})
      } else {
        this.$router.push(`${this.$route.params.title}`)
      }
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
    if (this.$route.params.title === '365') {
      this.navlist[1].name = '单元'
      this.kbzj = '课本单元'
    }
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/paper/listing/keys/${this.$route.params.code}/pid/${this.$route.params.id}`)
      .then(data => {
        console.log(data.data)
        this.title = data.data.File_Name
        this.content = data.data.Content
        this.img = data.data.Attachment_Path
        this.name = data.data.File_Name
        this.grade = data.data.CD_Name
        this.press = data.data.File_SubName
        this.price = data.data.Resource_Price
        this.catalog = data.data.catalog
        this.pageview = data.data.pageview
        var startNum = data.data.star
        var stars = []
        for (var i = 0; i < startNum; i++) {
          stars.push(i)
        }
        this.stars = stars
        if (this.catalog.length === 0) {
          Indicator.close()
        } else {
          if (this.catalog[0].CD_Order === 0) {
            this.order = false
          }
          Indicator.close()
        }
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/top/refer/id/${this.$route.params.id}/key/${this.$route.params.code}`)
      .then(data => {
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
    Indicator.close()
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
    height: rem750(417);
    padding: rem750(27) rem750(30) rem750(36) rem750(20);
    box-sizing: border-box;
    @include _flex(space-between,center);
    .img {
      position: relative;
      height: rem750(320);
      img {
        width: rem750(254);
        height: 100%;
      }
      .look {
        position: absolute;
        @include rect(rem750(254), rem750(35));
        background: rgba(0, 0, 0, .5);
        line-height: rem750(35);
        text-align: center;
        color: #fff;
        font-size: rem750(22);
        bottom: 0;
      }
    }
    .right {
      width: rem750(423);
      height: 100%;
      box-sizing: border-box;
      li {
        @include rect(100%, rem750(72));
        @include _flex(space-between,center);
        // &:last-child {
        //   @include rect(100%, rem750(52));
        //   @include _flex(flex-end,center);
        //   h2 {
        //     span {
        //       color: #f00000;
        //       font-size: rem750(24);
        //     }
        //     b {
        //       color: #b3b3b3;
        //       font-size: rem750(20);
        //     }
        //   }
        // }
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
        h2 {
          font-size: rem750(27);
          line-height: rem750(72);
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
        font-size: remr750(28);
      }
    }
    .article>p/deep/p {
      font-size: rem750(28)
    }
  }
  .book {
    max-height: rem750(500);
  }
  .comment {
    height: rem750(390);
  }
  .video {
    height: rem750(550);
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
      @include rect(100%, rem750(413));
      padding: rem750(39) rem750(32) 0;
      box-sizing: border-box;
      overflow: scroll;
      .section {
        height: auto;
        .title {
          li {
            height: rem750(57);
            line-height: rem750(57);
            text-align: center;
            background: #f2f2f2;
            font-size: rem750(28);
            font-weight: 600;
          }
          .jie {
            li {
              height: rem750(60);
              line-height: rem750(60);
              text-align: center;
              background: #fff;
              font-weight: 100;
              font-size: rem750(24);
              border-bottom: rem750(2) solid #f2f2f2;
              &:last-child {
                border: 0;
              }
            }
          }
        }
      }
    }
    .box1 {
      width: 100%;
      box-sizing: border-box;
      padding: rem750(19) rem750(50) 0 rem750(50);
      @include _flex(space-between,flex-start);
      li {
        width: rem750(300);
        @include _flex(flex-start,flex-start,column);
        img {
          @include rect(100%, rem750(380));
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
