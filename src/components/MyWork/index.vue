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
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';

</style>
