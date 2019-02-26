<template>
  <div class="content animated fadeInLeft">
    <ul>
      <li>
        <div class="pic">
          <img src="@/assets/pic01.png" alt="#">
        </div>
        <p>六年级一班</p>
        <span @click="goclass"></span>
      </li>
      <li>
        <div class="pic">
          <img src="@/assets/pic02.png" alt="#">
        </div>
        <p>六年级一班</p>
        <span @click="goclass"></span>
      </li>
      <li>
        <div class="pic">
          <img src="@/assets/pic03.png" alt="#">
        </div>
        <p>六年级一班</p>
        <span @click="goclass"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goclass () {
      this.$router.push('/classmessage/code')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  ul {
    li {
      padding: 0 rem750(34) 0 rem750(39);
      box-sizing: border-box;
      border-bottom: rem750(10) solid #f5f5f5;
      height: rem750(127);
      @include _flex(space-between, center);
      .pic>img {
        @include rect(rem750(80), rem750(80))
      }
      p {
        line-height: rem750(30);
        font-size: rem750(26);
        width: rem750(540);
      }
      span {
        width: 0;
        height: 0;
        border-width: rem750(12) 0 rem750(12) rem750(12);
        border-style: solid;
        border-color: transparent transparent transparent #232323;
      }
    }
  }
}
</style>
