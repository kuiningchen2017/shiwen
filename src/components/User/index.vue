<template>
  <div class="content animated fadeInLeft">
    <div class="top">
      <div class="message">
        <img src="@/assets/headimg.png" >
        <div class="data">
          <h1>师问</h1>
          <p>大家好！</p>
        </div>
        <span class="iconfont icon-iconfontjiantou4"></span>
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
        <div class="box">
          <h3>我的培训</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-zuoye"></span>
        <div class="box mark">
          <h3>作业布置</h3>
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
        <div class="box">
          <h3>我的成果</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-shoucang1"></span>
        <div class="box mark">
          <h3>我的关注</h3>
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
    width: 100%;
    box-sizing: border-box;
    height: rem750(196);
    padding: rem750(38) rem750(30);
    background: #fff;
    margin-bottom: rem750(12);
    .message {
      height: rem750(120);
      @include _flex(space-between,center);
      img {
        width: rem750(120);
        height: rem750(120);
        padding-left: rem750(10);
        border-radius: 50%;
      }
      .data {
        width: rem750(460);
        height: 100%;
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
  }
  .list {
    margin-bottom: rem750(12)
  }
  .list, .foot {
    width:100%;
    box-sizing: border-box;
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
        width: 91%;
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
