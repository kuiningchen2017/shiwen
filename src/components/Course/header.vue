<template>
  <div class="header">
    <p>课本</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
  .header {
    @include _flex(center,center);
    p {
      font-size: $font-34;
      color: #000;
    }
  }
</style>
