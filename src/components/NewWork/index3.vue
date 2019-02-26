<template>
  <div class="content animated fadeInLeft">
    <div class="top">
      <div class="jindu">
        <div class="num">
          <p>1</p>
          <b></b>
          <b></b>
          <p>2</p>
          <b></b>
          <b></b>
          <p>3</p>
        </div>
        <div class="word">
          <p>选择资源</p>
          <p>选择班级</p>
          <p>完成</p>
        </div>
      </div>
    </div>
    <li>已经布置成功啦!</li>
    <div class="next">
      <li @click="gonext">
        查看详情
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
    gonext () {
      this.$router.push('/homework')
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content {
  .top {
    .jindu {
      @include rect(100%, rem750(114));
      border-bottom: rem750(6) solid #f5f5f5;
      .num {
        padding: rem750(23) rem750(93) 0 rem750(89);
        @include rect(100%, rem750(51));
        box-sizing: border-box;
        @include _flex(space-between, center);
        p {
          @include rect(rem750(28), rem750(28));
          line-height: rem750(28);
          text-align: center;
          border-radius: 50%;
          color: #fff;
          background: $bg-side;
        }
        b {
          @include rect(rem750(121), rem750(2));
          background: $bg-side;
        }
      }
      .word {
        padding: 0 rem750(81) 0 rem750(60);
        @include rect(100%, rem750(50));
        box-sizing: border-box;
        @include _flex(flex-start, center);
        p {
          line-height: rem750(50);
          font-size: rem750(22);
          &:first-child {
            padding-right: rem750(178);
          }
          &:nth-child(2) {
            padding-right: rem750(204);
          }
        }
      }
    }
  }
  li {
    @include rect(100%, rem750(200));
    line-height: rem750(200);
    text-align: center;
    font-size: rem750(40);
    color: #ccc;
  }
  .next {
    @include rect(100%, rem750(162));
    @include _flex(center, center);
    li {
      @include rect(rem750(148), rem750(58));
      border-radius: rem750(10);
      background: $bg-side;
      color: #fff;
      line-height: rem750(58);
      font-size: rem750(24);
      text-align: center;
    }
  }
}
</style>
