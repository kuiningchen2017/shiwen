<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  },
  mounted () {
    console.log(localStorage.getItem('type'))
    if (localStorage.getItem('type') === '0') {
      this.$router.push('/user/parent')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';

</style>
