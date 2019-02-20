<template>
  <div class="content" ref="content">
    <div class="detail">
      <img :src="this.img" alt="#">
      <div class="right">
        <li>
          <h2>{{this.name}}</h2>
          <div>星级</div>
        </li>
        <li>
          <h2>{{this.grade}}</h2>
        </li>
        <li>
          <h2>{{this.press}}</h2>
        </li>
        <li>
          <h2>主讲人:{{this.teacher}}</h2>
        </li>
        <li>
          <h2>
            <span>￥</span>
            <b>{{this.price}}</b>
          </h2>
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
        <p v-html="this.content"></p>
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
import axios from 'axios'
export default {
  data () {
    return {
      current: 0,
      img: '',
      content: '',
      name: '',
      press: '人民教育出版社',
      grade: '',
      teacher: '',
      price: '',
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
    }
  },
  mounted () {
    axios.post(`/shishuiyuan/index/paper/listing/keys/${this.$route.params.code}/pid/${this.$route.params.id}`)
      .then(data => {
        console.log(data.data)
        this.title = data.data.File_Name
        this.content = data.data.Content
        this.img = data.data.Attachment_Path
        this.name = data.data.File_Name
        this.grade = data.data.CD_Name
        this.teacher = data.data.File_SubName
        this.price = data.data.Resource_Price
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
    height: rem750(417);
    padding: rem750(27) rem750(30) rem750(36) rem750(20);
    box-sizing: border-box;
    @include _flex(space-between,center);
    img {
      width: rem750(254);
      height: 100%;
    }
    .right {
      width: rem750(423);
      height: 100%;
      box-sizing: border-box;
      padding-top: rem750(14);
      li {
        @include rect(100%, rem750(72));
        @include _flex(space-between,center);
        &:last-child {
          @include rect(100%, rem750(52));
          @include _flex(flex-end,center);
          h2 {
            span {
              color: #f00000;
              font-size: rem750(24);
            }
            b {
              color: #f00000;
              font-size: rem750(30);
            }
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
      width: rem750(710);
      margin: rem750(23) 0 0 rem750(20);
    }
  }
}
</style>
