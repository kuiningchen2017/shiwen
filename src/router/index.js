import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        header: () => import('@/components/Home/header'),
        default: () => import('@/components/Home/index'),
        footer: () => import('@/components/Home/footer')
      }
    }
  ]
})
