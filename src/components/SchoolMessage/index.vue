<template>
  <div class="content animated fadeInLeft">
    <div class="top">
      <img src="@/assets/school.png">
      <h1>我的学校</h1>
      <span @click="myshool"></span>
    </div>
    <div class="list">
      <li>
        <span class="iconfont icon-location"></span>
        <p>地区：河南省-郑州市-金水区-南阳路街道</p>
      </li>
      <li>
        <span class="iconfont icon-xuexiao"></span>
        <p>学校：南阳路第二小学</p>
      </li>
      <li>
        <span class="iconfont icon-wode"></span>
        <p>年级：六年级</p>
      </li>
    </div>
    <div class="guanzhu">
      <img src="@/assets/guanzhu.png">
      <h1>关注学科</h1>
      <span @click="mysubject"></span>
    </div>
    <div class="kemu">
      <li>
        <span class="iconfont icon-kemu"></span>
        <p>语文 数学 英语</p>
      </li>
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
    myshool () {
      this.$router.push('/schoolset')
    },
    mysubject () {
      this.$router.push('/guanzhuxueke')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  background: #efefef;
  .top, .guanzhu {
    width: 100%;
    box-sizing: border-box;
    height: rem750(160);
    padding: rem750(32);
    background: #fff;
    margin-bottom: rem750(12);
    @include _flex(space-between,center);
      img {
        @include rect(rem750(96), rem750(96));
      }
      h1 {
        width: rem750(540);
        line-height: rem750(50);
        font-size: $font-30;
      }
      span {
        width: 0;
        height: 0;
        border-width: rem750(12) 0 rem750(12) rem750(12);
        border-style: solid;
        border-color: transparent transparent transparent #232323;
      }
  }
  .list, .kemu{
    width:100%;
    background: #fff;
    margin-bottom: rem750(12);
    li {
      padding-left: rem750(48);
      height: rem750(94);
      @include _flex(flex-start,center);
      border-bottom: rem750(1) solid #efefef;
      span {
        font-size: $font-40;
        color: #6b6b6b;
      }
      p {
        padding-left: rem750(25);
        height: 100%;
        line-height: rem750(94);
        font-size: $font-30;
      }
    }
  }
}
</style>
