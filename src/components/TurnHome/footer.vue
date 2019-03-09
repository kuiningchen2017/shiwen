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
          path: '/turnhome'
        },
        {
          icon: 'iconfont icon-kecheng',
          name: '课程',
          path: '/turncourse'
        },
        {
          icon: 'iconfont icon-peixun',
          name: '在线',
          path: '/online'
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
    if (localStorage.getItem('type') === '0') {
      this.list[3].path = '/turnuser/parent'
    } else {
      this.list[3].path = '/turnuser/teacher'
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';

</style>
