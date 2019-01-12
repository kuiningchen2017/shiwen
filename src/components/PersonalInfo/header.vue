<template>
  <div class="header">
    <mt-header title="个人信息">
      <div @click="back" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
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
