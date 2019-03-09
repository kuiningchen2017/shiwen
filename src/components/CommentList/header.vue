<template>
  <div class="header">
    <mt-header title="更多评论">
      <div @click="back" class="back" slot="left">
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

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.header {
  .mint-header {
    width: 100%;
    height: 100%;
    background: $text-base;
    color: $text-black;
    font-size: $font-head;
    letter-spacing: rem750(8);
    padding: 0 rem750(27);
    border-bottom: rem750(1) solid #f0f0f0;
  }
}
</style>
