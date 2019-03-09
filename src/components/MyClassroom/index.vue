<template>
  <div class="content animated fadeInLeft">
    <div class="center">
      <li>
        <div class="first">
          <img src="@/assets/geren_01.png" alt="#">
          <h2>我的班级</h2>
        </div>
        <div class="last">
          <p>我的班级</p>
        </div>
      </li>
      <li>
        <div  class="first">
          <img src="@/assets/geren_02.png" alt="#">
         <h2>发布任务</h2>
        </div>
        <div  class="last">
          <p>发布任务</p>
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
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  background: #efefef;
  .center {
    li {
      @include rect(100%, rem750(200));
      padding: 0 rem750(40);
      background: #fff;
      box-sizing: border-box;
      @include _flex(space-between, center);
      margin-top: rem750(12);
      .first{
        @include _flex(space-around, center, column);
        img {
          @include rect(rem750(100), rem750(80));
        }
        h2 {
          height: rem750(40);
          line-height: rem750(40);
          padding-top: rem750(30);
          font-size: $font-32;
        }
      }
      .last {
        @include rect(rem750(520), rem750(180));
        p {
          height: rem750(45);
          line-height: rem750(45);
          font-size: rem750(26)
        }
      }
    }
  }
}
</style>
