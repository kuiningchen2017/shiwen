<template>
  <div class="header">
    <mt-header title="课本">
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

<style lang="scss" scoped>
@import '@/style/base/index.scss';
  .mint-header {
    width: 100%;
    height:100%;
    background: $text-base;
    color: $text-black;
    font-size: $font-head;
    letter-spacing: rem750(8);
    padding: 0 rem750(27);
    border-bottom: rem750(1) solid #f0f0f0;
  }
</style>
