<template>
  <div class="footer">
    <div v-if="flag"  @click="remove">
      <span class="iconfont icon-xing"></span>
      <p>已关注</p>
    </div>
    <div v-else  @click="guanzhu">
      <span class="iconfont icon-shoucang"></span>
      <p >关注</p>
    </div>
    <div>
      <span class="iconfont icon-xiaoxi"></span>
      <p>咨询</p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      flag: false
    }
  },
  methods: {
    guanzhu () {
      this.flag = true
    },
    remove () {
      this.flag = false
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.footer {
  div {
    width:rem750(150);
    @include _flex(space-around , center);
    .icon-xing {
      color: #d81e06
    }
    span {
      color: #000;
      font-size: rem750(34);
    }
    p {
      width:rem750(100);
      line-height:rem750(30);
      color: #2e2e2e;
      font-size: rem750(24);
    }
  }
}
</style>
