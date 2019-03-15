<template>
  <div class="content animated fadeInLeft">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) of banner" :key="index">
        <img :src="item.img"/>
      </mt-swipe-item>
    </mt-swipe>
    <div class="box">
      <div class="head">
        <li>
          <img src="@/assets/sanjiao.png"/>
          <h2>精彩预告</h2>
        </li>
        <li>
          <p>更多</p>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </li>
      </div>
      <div class="detail">
        <img src="@/assets/banner_02.png" alt="#">
        <div class="jieshao">
          <p>如何上好一节优质课</p>
          <li>
            <dt>
              <span class="iconfont icon-yanjing-active"></span>
              <b>19356</b>
            </dt>
            <dt>
              <b>60</b>
              <span class="iconfont icon-xiaoxi"></span>
            </dt>
          </li>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="head">
        <li>
          <img src="@/assets/sanjiao.png"/>
          <h2>精彩回放</h2>
        </li>
        <li></li>
      </div>
      <div class="detail">
        <img src="@/assets/banner_01.png" alt="#">
        <div class="jieshao">
          <p>跨专业名师的逆袭之路</p>
          <li>
            <dt>
              <span class="iconfont icon-yanjing-active"></span>
              <b>17496</b>
            </dt>
            <dt>
              <b>15</b>
              <span class="iconfont icon-xiaoxi"></span>
            </dt>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banner: [
        {img: require('@/assets/banner_01.png')},
        {img: require('@/assets/banner_02.png')}
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content {
  .mint-swipe {
    @include rect(100%, rem750(380));
    flex-shrink: 0;
    img {
      @include rect(100%, 100%)
    }
  }
  .box {
    border-top: rem750(20) solid #f3f4f5;
    @include rect(100%, rem750(564));
    .head {
      @include rect(100%, rem750(80));
      box-sizing: border-box;
      padding: 0 rem750(29);
      @include _flex(space-between, center);
      li {
        @include _flex(space-between, center);
        &:first-child {
          @include rect(rem750(150), 100%);
          h2 {
            font-size: rem750(30);
            font-weight: 700;
          }
        }
        &:last-child {
          @include rect(rem750(66), 100%);
          p {
            font-size: rem750(22);
            line-height: rem750(80);
            color: $text-more;
          }
          span {
            font-size: rem750(20);
            line-height: rem750(80);
            color: $text-more
          }
        }
      }
    }
    .detail {
      img {
        @include rect(100%, rem750(380))
      }
      .jieshao {
        margin-top: rem750(8);
        border-top: rem750(1) solid #f3fafd;
        @include rect(100%, rem750(95));
        p {
          line-height: rem750(49);
          padding-left: rem750(30);
          // text-align: center;
          font-size: rem750(26);
        }
        li {
          @include rect(100%, rem750(30));
          box-sizing: border-box;
          padding: 0 rem750(30);
          @include _flex(space-between, center);
          dt {
            @include _flex(space-between, center);
            span {
              @include rect(rem750(30),rem750(30));
              font-size: rem750(25);
              line-height: rem750(30);
              text-align: center;
            }
            b {
              line-height: rem750(30);
              font-size: rem750(18);
              padding: 0 rem750(10);
              font-weight: 100;
              color: $text-more
            }
          }
        }
      }
    }
  }
}
</style>
