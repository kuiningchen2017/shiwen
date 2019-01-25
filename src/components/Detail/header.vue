<template>
  <div class="header">
    <span @click="back" class=" back iconfont icon-jiantou2" ></span>
    <h1>详情</h1>
    <i></i>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
  .header {
    padding:0 rem750(27);
    box-sizing: border-box;
    @include _flex(space-between,center);
    span {
      font-size: $font-30;
      color: #000;
    }
  }
</style>
