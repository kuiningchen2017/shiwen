<template>
  <div class="header">
    <mt-header>
      <div @click="back" class="back" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
      <mt-button slot="right"><h1 @click="goRegister">注册</h1></mt-button>
    </mt-header>
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
