<template>
  <div class="content">
    <div class="top">
      <div class="message">
        <img src="@/assets/headimg.png" >
        <div class="data">
          <h1>师问</h1>
          <p>大家好！</p>
        </div>
        <span class="iconfont icon-iconfontjiantou4"></span>
      </div>
      <div class="nav">
        <li>
          <h1>0</h1>
          <span>关注</span>
        </li>
        <li>
          <h1>2</h1>
          <span>积分</span>
        </li>
        <li>
          <h1>2</h1>
          <span>优惠券</span>
        </li>
      </div>
    </div>
    <div class="list">
      <li>
        <span class="iconfont icon-xuexiao"></span>
        <div class="box">
          <h3>我的学校</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-banji"></span>
        <div class="box">
          <h3>我的班级</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-tuijian"></span>
        <div class="box">
          <h3>我的推荐</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-peixun"></span>
        <div class="box mark">
          <h3>我的培训</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
    </div>
    <div class="foot">
      <li>
        <span class="iconfont icon-dingdan"></span>
        <div class="box">
          <h3>订单中心</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-chengguo"></span>
        <div class="box mark">
          <h3>我的成果</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  background: #efefef;
  .top {
    width: rem750(690);
    height: rem750(250);
    padding: rem750(38) rem750(30) 0 rem750(30);
    background: #fff;
    margin-bottom: rem750(12);
    .message {
      height: rem750(120);
      padding-bottom: rem750(38);
      @include _flex(space-between,center);
      img {
        width: rem750(120);
        height: rem750(120);
        padding: 0 rem750(10);
        border-radius: 50%;
      }
      .data {
        width: rem750(534);
        height: 100%;
        @include _flex(space-around,flex-start,column);
        padding-left: rem750(8);
        h1 {
          line-height: rem750(50);
          font-weight: 400;
          font-size: $font-30;
        }
        p {
          line-height: rem750(30);
          color: #a6a6a6;
        }
      }
      span {
        color: #bcbcbc;
        font-size: rem750(26);
      }
    }
    .nav {
      width: 100%;
      height: rem750(93);
      @include _flex(space-around,center);
      h1 {
        @include _flex(center,center);
        font-size: rem750(26);
        padding-bottom: rem750(10);
      }
      span {
        font-size: rem750(24);
        color: #7d7d7d;
      }
    }
  }
  .list {
    margin-bottom: rem750(12)
  }
  .list, .foot {
    padding-left: rem750(36);
    background: #fff;
    li {
      height: rem750(100);
      @include _flex(space-between,center);
      span {
        font-size: $font-40;
        color: #9c9c9c;
      }
      .box {
        width: rem750(614);
        height: rem750(100);
        box-sizing: border-box;
        padding-right: rem750(36);
        border-bottom: rem750(1) solid #efefef;
        @include _flex(space-between,center);
        h3 {
          font-size: $font-30;
          font-weight: 400;
        }
        span {
          font-size: rem750(25);
          color: #a5a5a5;
        }
      }
      .mark {
        border: 0;
      }
    }
  }
}
</style>
