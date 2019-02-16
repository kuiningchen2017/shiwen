<template>
  <div class="content animated fadeInLeft">
    <li>
      <span class="iconfont icon-location"></span>
      <p>地区:</p>
      <div class="area">
        <div>
          <p>河南省</p>
          <span class="iconfont icon-arrow"></span>
        </div>
        <div>
          <p>郑州市</p>
          <span class="iconfont icon-arrow"></span>
        </div>
        <div>
          <p>金水区</p>
          <span class="iconfont icon-arrow"></span>
        </div>
        <div>
          <p>南阳路街道</p>
          <span class="iconfont icon-arrow"></span>
        </div>
      </div>
    </li>
    <li>
      <span class="iconfont icon-xuexiao"></span>
      <p>学校:</p>
      <div class="school">
        <div>
          <p>南阳路第二小学</p>
          <span class="iconfont icon-arrow"></span>
        </div>
      </div>
    </li>
    <li>
      <span class="iconfont icon-wode"></span>
      <p>年级:</p>
      <div class="grade">
        <div>
          <p>六年级</p>
          <span class="iconfont icon-arrow"></span>
        </div>
        <div>
          <p>教师</p>
          <span class="iconfont icon-arrow"></span>
        </div>
      </div>
    </li>
    <div class="choose">
      <button>返回</button>
      <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  @include rect(100%, 100%);
  padding: rem750(23) rem750(48);
  box-sizing: border-box;
  li {
    @include _flex(space-around,center);
    margin-bottom: rem750(54);
    height: rem750(57);
    &:first-child {
      height: rem750(160);
    }
    span {
      font-size: $font-40;
      color: #000;
    }
    p {
      font-size: $font-30;
      line-height: rem750(57);
    }
    .area, .school, .grade {
      @include rect(rem750(517), 100%);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      div {
        border: rem750(1) solid #eaeaea;
        border-radius: rem750(10);
        box-sizing: border-box;
        padding: 0 rem750(16) 0 rem750(25);
        @include _flex(space-between, center);
        p {
          color: #676767;
          font-size: $font-30;
        }
        span {
          color: #4f4f4f;
        }
      }
    }
    .area>div {
      @include rect(rem750(247), rem750(57));
      margin-top: rem750(23);
      p {
        width: rem750(160);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .school>div {
      @include rect(100%, 100%);
    }
    .grade>div {
      @include rect(rem750(247), rem750(57));
    }
  }
  .choose {
    @include rect(100%, rem750(76));
    box-sizing: border-box;
    padding: rem750(0) rem750(60);
    @include _flex(space-between,center);
    button {
      @include rect(rem750(242), 100%);
      border-radius: rem750(38);
      line-height: rem750(76);
      font-size: rem750(30);
      text-align: center;
      color: #fff;
      background: #b0b1b1;
      &:last-child {
        background: #4379f5;
      }
    }
  }
}
</style>
