<template>
  <div class="header">
    <h1>师问</h1>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.header {
  @include _flex(center,center);
  h1 {
    font-size: $font-36;
    letter-spacing: rem750(8);
  }
}
</style>
