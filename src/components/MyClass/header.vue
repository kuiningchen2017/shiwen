<template>
  <div class="header">
    <mt-header title="我的班级">
      <div @click="back" class="back" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
      <mt-button slot="right">
        <span @click="add">添加新班级</span>
      </mt-button>
    </mt-header>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'
Vue.use(Header)
export default {
  methods: {
    back () {
      this.$router.go(-1)
    },
    add () {
      this.$router.push('/addclass')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
  .mint-header {
    width: 100%;
    height:100%;
    background: $text-base;
    color: $text-black;
    font-size: $font-head;
    padding: 0 rem750(27);
    border-bottom: rem750(1) solid #f0f0f0;
    .mint-button {
      span {
        font-size: rem750(26);
        color: #515151;
      }
    }
  }
</style>
