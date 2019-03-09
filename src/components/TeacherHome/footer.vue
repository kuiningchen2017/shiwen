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
          path: '/teacherhome'
        },
        {
          icon: 'iconfont icon-kecheng',
          name: '课程',
          path: '/teachercourse'
        },
        {
          icon: 'iconfont icon-peixun',
          name: '培训',
          path: '/mytrain/all'
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
      this.list[3].path = '/teacheruser/parent'
    } else {
      this.list[3].path = '/teacheruser/teacher'
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';

</style>
