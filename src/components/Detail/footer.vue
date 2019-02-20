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
    <div class="buy">
      立即购买
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
    width:rem750(180);
    @include _flex(center , center);
    .icon-xing {
      color: #d81e06
    }
    span {
      color: #000;
      font-size: $font-34
    }
    p {
      width:rem750(90);
      line-height:rem750(40);
      color: #2e2e2e;
      font-size: rem750(30);
    }
  }
  .buy {
    width: rem750(300);
    height: rem750(76);
    background: #b3b3b3;
    border-radius: rem750(38);
    color: #fff;
    font-size: $font-30;
  }
}
</style>
