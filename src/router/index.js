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
        header: () => import('@/components/Course/header'),
        default: () => import('@/components/Course/index')
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        header: () => import('@/components/User/header'),
        default: () => import('@/components/User/index'),
        footer: () => import('@/components/Home/footer')
      }
    },
    {
      path: '/turnuser',
      name: 'turnuser',
      components: {
        header: () => import('@/components/User/header'),
        default: () => import('@/components/User/index'),
        footer: () => import('@/components/TurnHome/footer')
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        header: () => import('@/components/Login/header'),
        default: () => import('@/components/Login/index')
      }
    },
    {
      path: '/fastlogin',
      name: 'fastlogin',
      components: {
        header: () => import('@/components/Login/header'),
        default: () => import('@/components/Login/index-fast')
      }
    },
    {
      path: '/getback',
      name: 'getback',
      components: {
        header: () => import('@/components/GetBack/header'),
        default: () => import('@/components/GetBack/index')
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        header: () => import('@/components/Register/header'),
        default: () => import('@/components/Register/index')
      }
    },
    {
      path: '/teacherhome',
      name: 'teacherhome',
      components: {
        header: () => import('@/components/TeacherHome/header'),
        default: () => import('@/components/TeacherHome/index'),
        footer: () => import('@/components/TeacherHome/footer')
      }
    },
    {
      path: '/turnhome',
      name: 'turnhome',
      components: {
        header: () => import('@/components/TurnHome/header'),
        default: () => import('@/components/TurnHome/index'),
        footer: () => import('@/components/TurnHome/footer')
      }
    },
    {
      path: '/parentinghome',
      name: 'parentinghome',
      components: {
        header: () => import('@/components/ParentingHome/header'),
        default: () => import('@/components/ParentingHome/index'),
        footer: () => import('@/components/ParentingHome/footer')
      }
    },
    {
      path: '/personalinfo',
      name: 'personalinfo',
      components: {
        header: () => import('@/components/PersonalInfo/header'),
        default: () => import('@/components/PersonalInfo/index')
      }
    }
  ]
})
