<template>
  <div class="header">
    <mt-header title="找回密码">
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
    },
    goRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.header {
  .mint-header {
    width: 100%;
    background: #fff;
    color: #262626;
    font-size: $font-30;
    height:100%;
    padding: 0 rem750(30);
    border-bottom: rem750(1) solid #bfbfbf;
    .mint-header-button {
      .mint-button {
        color: #333333;
      }
    }
  }
}

</style>
