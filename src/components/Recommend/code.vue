<template>
  <div class="center animated fadeInLeft">
    <img src="@/assets/code.png" alt="#">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.center {
  margin-top: rem750(90);
  @include rect(100%, 100%);
  border-top: rem750(4) solid #f0f0f0;
  img {
    @include rect(100%, 100%)
  }
}
</style>
