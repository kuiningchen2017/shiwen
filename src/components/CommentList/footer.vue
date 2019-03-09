<template>
  <div class="footer">
    <P @click="gocomment">发表评论</P>
  </div>
</template>

<script>
export default {
  methods: {
    gocomment () {
      this.$router.push({name: 'comments', params: {id: this.$route.params.id, code: this.$route.params.code}})
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.footer {
  border-top: rem750(1) solid #bab7b7;
  p {
    height: rem750(80);
    line-height: rem750(80);
    font-size: rem750(40);
    color: #333;
  }
}
</style>
