<template>
  <div class="header">
    <span @click="back" class=" back iconfont icon-jiantou2" ></span>
    <h1>注册</h1>
    <i></i>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'
Vue.use(Header)
export default {
  methods: {
    back () {
      this.$router.go(-1)
    },
    goRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
  .header {
    padding:0 rem750(27);
    box-sizing: border-box;
    border-bottom: rem750(1) solid #ccc;
    @include _flex(space-between,center);
    .back {
      font-size: $font-50;
      color:$text-back;;
    }
    h1 {
      font-size: $font-36
    }
  }
</style>
