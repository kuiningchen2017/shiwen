<template>
  <div class="header">
    <span @click="back" class=" back iconfont icon-jiantou2" ></span>
    <h1 @click="goRegister">注册</h1>
  </div>
</template>
<script>
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
    span {
      font-size: $font-30;
      color: #000;
    }
  }
</style>
