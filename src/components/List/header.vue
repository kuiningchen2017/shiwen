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
    if (this.$route.params.title === 'jzpx') {
      this.title = '精准培训'
    } else if (this.$route.params.title === 'jpkc') {
      this.title = '精品课程'
    } else if (this.$route.params.title === 'zyms') {
      this.title = '中原名师'
    } else if (this.$route.params.title === 'msld') {
      this.title = '名师论道'
    } else if (this.$route.params.title === 'jxgj') {
      this.title = '家校共建'
    } else if (this.$route.params.title === 'ndclass') {
      this.title = '第二课堂'
    } else if (this.$route.params.title === 'ynjx') {
      this.title = '疑难解析'
    } else if (this.$route.params.title === 'ksjx') {
      this.title = '课时教学'
    } else if (this.$route.params.title === 'kjzy') {
      this.title = '课件资源'
    } else if (this.$route.params.title === 'audio') {
      this.title = '音频资源'
    } else if (this.$route.params.title === 'video') {
      this.title = '视频资源'
    } else if (this.$route.params.title === 'zxxx') {
      this.title = '资讯信息'
    }
    console.log(this.$route.params)
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
    padding:0 rem750(27) 0 rem750(10);
    box-sizing: border-box;
    @include _flex(space-between,center);
    .back {
      font-size: $font-50;
      color:$text-back;;
    }
    h1 {
      font-size: $font-36
    }
    i {
      @include rect(rem750(55), rem750(10))
    }
  }
</style>
