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
          icon: 'iconfont icon-home-',
          name: '首页',
          path: '/home'
        },
        {
          icon: 'iconfont icon-kecheng',
          name: '课程',
          path: '/course'
        },
        {
          icon: 'iconfont icon-geren',
          name: '我的',
          path: '/user'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.footer {
  padding:0 rem750(20);
  // li {
  //   @include _flex(space-around, center, column);
  //   &.router-link-active {
  //     color:$bg-side;
  //   }
  //   span {
  //     font-size: $font-50;
  //     padding-bottom: rem750(10)
  //   }
  // }
}
</style>
