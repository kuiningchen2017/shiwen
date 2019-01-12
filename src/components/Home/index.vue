<template>
  <div class="content">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item of banner" :key="item.banner_id" >
        <img :src="item.banner_img_url"/>
      </mt-swipe-item>
    </mt-swipe>
    <div class="navlist">
      <router-link :to = "item.path" tag = "li" v-for = "(item, index) of navList" :key = "index">
        <img :src = "item.imgUrl" alt = "#"/>
        <p>{{ item.name }}</p>
      </router-link>
    </div>
    <div class="teacher">
      <div class="teacher-head">
        <h2 ref="title">
          <b></b>
          中原名师
        </h2>
        <span>
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
      <div class="teacher-box">
        <router-link to = "" tag = "li">
          <img src="" alt="">
          <span></span>
          <span></span>
        </router-link>
      </div>
    </div>
    <div class="lesson">
      <div class="lesson-head">
        <h2>
          <b></b>
          精品课程
        </h2>
        <span>
          更多
          <i class="iconfont icon-iconfontjiantou4"></i>
        </span>
      </div>
    </div>
    <div class="company">
      <p>&copy;2018郑州石水源教育科技有限公司&nbsp;&nbsp;豫ICP备17001731号-2</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.use(Swipe, SwipeItem)
export default {
  data () {
    return {
      banner: [

      ],
      navList: [
        {
          imgUrl: require('@/assets/icon_01.png'),
          name: '教师学院',
          path: '/teacherhome'
        },
        {
          imgUrl: require('@/assets/icon_02.png'),
          name: '翻转课堂',
          path: '/turnhome'
        },
        {
          imgUrl: require('@/assets/icon_03.png'),
          name: '亲子课堂',
          path: '/parentinghome'
        }
      ]
    }
  },
  mounted () {
    console.log(this.$refs.title.innerText)
  },
  methods: {

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
        width: rem750(110);
        height: rem750(110);
        padding-bottom: rem750(16);
      }
      p {
        font-size: $font-20;
      }
    }
  }
  .teacher {
    width:100%;
    height:rem750(412);
    background: $bg-black;
    margin-bottom: $bottom;
    flex-shrink: 0;
    .teacher-head {
      margin: rem750(28) rem750(28) 0 rem750(24);
      width: rem750(698);
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
    .teacher-box {
      background: #00f;
      width: rem750(710);
      height: rem750(325);
      margin: rem750(19) 0 0 rem750(20);
    }
  }
  .lesson {
    width:100%;
    height:rem750(390);
    background: $bg-black;
    flex-shrink: 0;
    .lesson-head {
      margin: rem750(33) 0 0 rem750(24);
      width: rem750(698);
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
