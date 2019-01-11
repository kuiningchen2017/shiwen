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
      this.$router.push('')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
  .mint-header {
    width: 100%;
    height:100%;
    background: #fff;
    color: #101010;
    font-size: $font-34;
    padding: 0 rem750(36);
    border-bottom: rem750(1) solid #f0f0f0;
    .mint-header-button {
      .mint-button {
        color: #000;
        font-size: $font-34
      }
    }
  }
</style>
