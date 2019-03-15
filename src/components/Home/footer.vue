<template>
  <div class="footer">
    <router-link :to="item.path" tag="li" v-for = "(item, index) of list" :key = "index">
      <span :class = "item.icon"></span>
      <p>{{ item.name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          icon: 'iconfont icon-shouye',
          name: '首页',
          path: '/home'
        },
        {
          icon: 'iconfont icon-kecheng',
          name: '课本',
          path: '/course'
        },
        {
          icon: 'iconfont icon-geren',
          name: '我的',
          path: ''
        }
      ]
    }
  },
  mounted () {
    if (localStorage.getItem('type') === '3') {
      this.list[2].path = '/user/teacher/one'
    } else {
      this.list[2].path = '/user/parent/one'
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.footer {
  padding:0 rem750(20);
}
</style>
