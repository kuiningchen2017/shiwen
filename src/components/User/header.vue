<template>
  <div class="header">
    <mt-header title="个人中心">
      <mt-button @click="goSet" slot="right" class="iconfont icon-shezhi"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  methods: {
    goSet () {
      this.$router.push('/personalinfo')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
  .mint-header {
    width: 100%;
    height:100%;
    background: $text-base;
    color: $text-black;
    font-size: $font-head;
    padding: 0 rem750(27);
    border-bottom: rem750(1) solid #f0f0f0;
  }
</style>
