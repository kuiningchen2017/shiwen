<template>
  <div class="content">
    <div class="list">
      <li>
        <h3>头像</h3>
        <div class="box">
          <img src="@/assets/headimg.png">
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <h3>用户名</h3>
        <div class="box">
          <p>陌陌的妈妈</p>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <h3>昵称</h3>
        <div class="box">
          <p>还是空的，快来去个有逼格的名字吧</p>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <h3>性别</h3>
        <div class="box">
          <p>未设置</p>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <h3>出生年月</h3>
        <div class="box">
          <p>未设置</p>
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
  .list {
    padding:0 rem750(36);
    background: #fff;
    li {
      height: rem750(100);
      box-sizing: border-box;
      @include _flex(space-between,center);
      border-bottom: rem750(1) solid #efefef;
      &:last-of-type {
        border: 0;
      }
      h3 {
        font-size: $font-30;
        font-weight: 400;
      }
      .box {
        height: 100%;
        @include _flex(space-between,center);
        img {
          width: rem750(70);
          height: rem750(70);
          border-radius: 50%;
        }
        p {
          font-size: rem750(26);
          color: #9c9c9c;
        }
        span {
          padding-left: rem750(20);
          font-size: rem750(26);
          color: #a5a5a5;
        }
      }
    }
  }
}
</style>
