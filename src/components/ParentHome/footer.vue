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
          path: '/parenthome'
        },
        {
          icon: 'iconfont icon-kecheng',
          name: '课程',
          path: '/parentcourse'
        },
        {
          icon: 'iconfont icon-talk',
          name: '在线',
          path: '/online'
        },
        {
          icon: 'iconfont icon-geren',
          name: '我的',
          path: '/parentuser'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';

</style>
