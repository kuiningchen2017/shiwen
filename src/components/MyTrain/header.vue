<template>
  <div class="header">
    <mt-header title="我的培训">
      <div @click="back" class="back" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="headbox">
      <li>
        <p @click="total" :class="{ active: all }">全部</p>
        <span v-show="all"></span>
      </li>
      <li>
        <p @click="wait" :class="{ active: study}">待学习</p>
        <span v-show="study"></span>
      </li>
      <li>
        <p @click="complete" :class="{ active: over }">已完成</p>
        <span v-show="over"></span>
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
      all: true,
      study: false,
      over: false
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    total () {
      this.$router.push('/mytrain/all')
      this.all = true
      this.study = false
      this.over = false
    },
    wait () {
      this.$router.push('/mytrain/study')
      this.all = false
      this.study = true
      this.over = false
    },
    complete () {
      this.$router.push('/mytrain/over')
      this.all = false
      this.study = false
      this.over = true
    }
  },
  mounted () {
    if (this.$route.path === '/mytrain/study') {
      this.all = false
      this.study = true
      this.over = false
    } else if (this.$route.path === '/mytrain/over') {
      this.all = false
      this.study = false
      this.over = true
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
    @include _flex(space-between, center);
    padding: 0 rem750(100);
    box-sizing: border-box;
    background: #fff;
    position: relative;
    top:0;
    z-index: 1001;
    li {
      height: rem750(90);
      @include _flex(space-between, center, column);
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
  }
}
</style>
