<template>
  <div class="header">
    <mt-header title="我的推荐">
      <div @click="back" class="back" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="headbox">
      <li>
        <p @click="code" :class="{ active: active }">推荐二维码</p>
        <span v-show="active"></span>
      </li>
      <span></span>
      <li>
        <p @click="list" :class="{ active: flage }">推荐列表</p>
        <span v-show="flage"></span>
      </li>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'
Vue.use(Header)
export default {
  data () {
    return {
      active: true,
      flage: false
    }
  },
  methods: {
    back () {
      this.$router.push('/user')
    },
    code () {
      this.$router.push('/recommend/code')
      this.active = true
      this.flage = false
    },
    list () {
      this.$router.push('/recommend/list')
      this.active = false
      this.flage = true
    }
  },
  mounted () {
    if (this.$route.path === '/recommend/list') {
      this.active = false
      this.flage = true
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
  .headbox {
    @include rect(100%,rem750(90));
    @include _flex(center, center);
    background: #fff;
    position: relative;
    z-index: 1001;
    top:0;
    li {
      @include rect(rem750(374), 100%);
      @include _flex(space-between, center,column);
      p {
        height: rem750(86);
        line-height: rem750(100);
        text-align: center;
        font-size: rem750(30);
        color: #979797;
      }
      span {
        @include rect(rem750(41), rem750(4));
        background: $bg-side;
      }
      .active {
        color: $bg-side;
      }
    }
    span {
      @include rect(rem750(2), rem750(28));
      background: $bg-base;
    }
  }
}
</style>
