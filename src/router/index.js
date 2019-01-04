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
    },
    {
      path: '/course',
      name: 'course',
      components: {
        header: () => import('@/components/course/header'),
        default: () => import('@/components/course/index')
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        header: () => import('@/components/user/header'),
        default: () => import('@/components/user/index')
      }
    },
    {
      path: '/teacherhome',
      name: 'teacherhome',
      components: {
        header: () => import('@/components/teacherHome/header'),
        default: () => import('@/components/teacherHome/index'),
        footer: () => import('@/components/teacherHome/footer')
      }
    },
    {
      path: '/turnhome',
      name: 'turnhome',
      components: {
        header: () => import('@/components/turnhome/header'),
        default: () => import('@/components/turnhome/index'),
        footer: () => import('@/components/turnhome/footer')
      }
    },
    {
      path: '/parentinghome',
      name: 'parentinghome',
      components: {
        header: () => import('@/components/parentinghome/header'),
        default: () => import('@/components/parentinghome/index'),
        footer: () => import('@/components/parentinghome/footer')
      }
    }
  ]
})
