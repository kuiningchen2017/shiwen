<template>
  <div class="header">
    <span @click="back" class=" back iconfont icon-jiantou2" ></span>
    <h1>{{this.title}}</h1>
    <i></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  mounted () {
    this.title = this.$route.params.title
    console.log(this.$route.params.title)
  },
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
    padding:0 rem750(27);
    box-sizing: border-box;
    @include _flex(space-between,center);
    span {
      font-size: $font-30;
      color: #000;
    }
  }
</style>
