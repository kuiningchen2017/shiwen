<template>
  <div class="header">
    <mt-header title="我的培训">
      <div @click="back" class="back" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'
Vue.use(Header)
export default {
    beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  },
  methods: {
    back () {
      // var type = ''
      // if (localStorage.getItem('type') === '3') {
      //   type = 'teacher'
      // } else {
      //   type = 'parent'
      // }
      // if (this.$route.params.enter === 'one') {
      //   this.$router.push({name: 'user', params: {type: type}})
      // } else if (this.$route.params.enter === 'two') {
      //   this.$router.push({name: 'teacheruser', params: {type: type}})
      // } else if (this.$route.params.enter === 'three') {
      //   this.$router.push({name: 'turnuser', params: {type: type}})
      // } else if (this.$route.params.enter === 'four') {
      //   this.$router.push({name: 'parentuser', params: {type: type}})
      // }
      this.$router.go(-1)
    }
  },
  mounted () {
    if (!localStorage.getItem('token')) {
      this.$router.push('/login')
    } else if (localStorage.getItem('token') && localStorage.getItem('type') !== '3') {
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
