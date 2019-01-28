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
  created () {
    if (this.$route.params.title === 'accurate') {
      this.title = '精准培训'
    } else if (this.$route.params.title === 'excellent') {
      this.title = '精品课程'
    } else if (this.$route.params.title === 'famous') {
      this.title = '中原名师'
    } else if (this.$route.params.title === 'jxgj') {
      this.title = '家校共建'
    } else if (this.$route.params.title === 'ndclass') {
      this.title = '第二课堂'
    }
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
    .back {
      font-size: $font-50;
      color:$text-back;;
    }
    h1 {
      font-size: $font-36
    }
  }
</style>
