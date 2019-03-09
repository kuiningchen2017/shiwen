<template>
  <div class="footer">
    <div v-if="flag" @click="remove">
      <span class="iconfont icon-xing"></span>
      <p>已关注</p>
    </div>
    <div v-else @click="guanzhu">
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
  border-top: rem750(1) solid #f0f0f0;
  padding: 0 rem750(40);
  div {
    @include rect(rem750(160), rem750(70));
    @include _flex(space-around , center);
    .icon-xing {
      color: #d81e06
    }
    span {
      color: $text-black;
      font-size: $font-40;
    }
    .icon-xiaoxi {
      font-size: rem750(45);
      margin-top: rem750(5)
    }
    p {
      width:rem750(110);
      height: rem750(50);
      line-height:rem750(50);
      padding-left: rem750(10);
      color: #2e2e2e;
      font-size: rem750(30);
      letter-spacing: rem750(4)
    }
  }
}
</style>
