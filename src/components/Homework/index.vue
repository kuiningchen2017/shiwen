<template>
  <div class="content animated fadeInLeft">
    <div class="banji">
      <div class="top">
        <img src="@/assets/pic01.png" alt="#">
        <h2>三年级一班</h2>
      </div>
      <ul class="list">
        <li>
          <img src="@/assets/banner02.png" alt="#">
          <div class="right">
            <h2>北京名师教你学物理</h2>
            <p>布置时间:2019—02-22 17:30</p>
            <span>已完成:5人</span>
          </div>
        </li>
      </ul>
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
  .banji {
    .top {
      border-bottom: rem750(12) solid #f5f5f5;
      @include rect(100%, rem750(132));
      padding-left: rem750(39);
      box-sizing: border-box;
      @include _flex(flex-start, center);
      img {
        @include rect(rem750(80), rem750(80));
      }
      h2 {
        line-height: rem750(40);
        font-size: rem750(30);
        color: #333;
        padding-left: rem750(20);
      }
    }
  }
  .list {
    border-bottom: rem750(12) solid #f5f5f5;
    li {
      padding-left: rem750(50);
      @include rect(100%, rem750(202));
      box-sizing: border-box;
      @include _flex(flex-start, center);
      border-bottom: rem750(1) solid #eaeaea;
      img {
        @include rect(rem750(250), rem750(150));
        border-radius: rem750(10);
      }
      div {
        padding-left: rem750(20);
        height: 100%;
        h2 {
          padding-top: rem750(26);
          line-height: rem750(57);
          font-size: rem750(30);
        }
        p {
          line-height: rem750(40);
          font-size: rem750(24);
          color: #b2b2b2;
        }
        span {
          line-height: rem750(33);
          font-size: rem750(24);
          color: #b2b2b2;
        }
      }
    }
  }
}
</style>
