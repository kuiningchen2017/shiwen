<template>
  <div class="header">
    <mt-header :title="this.headtitle">
      <div @click="back" class="back" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headtitle: ''
    }
  },
  created () {
    if (this.$route.params.title === '014') {
      this.headtitle = '精准培训'
    } else if (this.$route.params.title === '023') {
      this.headtitle = '精品课程'
    } else if (this.$route.params.title === '725') {
      this.headtitle = '中原名师'
    } else if (this.$route.params.title === '926') {
      this.headtitle = '名师论道'
    } else if (this.$route.params.title === 'jxgj') {
      this.headtitle = '家校共建'
    } else if (this.$route.params.title === 'drkt') {
      this.headtitle = '第二课堂'
    } else if (this.$route.params.title === '235') {
      this.headtitle = '疑难解析'
    } else if (this.$route.params.title === '203') {
      this.headtitle = '课时设计'
    } else if (this.$route.params.title === '057') {
      this.headtitle = '音频资源'
    } else if (this.$route.params.title === '526') {
      this.headtitle = '视频资源'
    } else if (this.$route.params.title === 'zxxx') {
      this.headtitle = '资讯信息'
    } else if (this.$route.params.title === 'tbkt') {
      this.headtitle = '同步课堂'
    } else if (this.$route.params.title === '365') {
      this.headtitle = '单元设计'
    }
  },
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
    height:100%;
    background: $text-base;
    color: $text-black;
    font-size: $font-head;
    padding: 0 rem750(27);
    border-bottom: rem750(1) solid #f0f0f0;
  }
}
</style>
