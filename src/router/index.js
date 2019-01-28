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
        header: () => import('@/components/TeacherHome/header'),
        default: () => import('@/components/TurnHome/index'),
        footer: () => import('@/components/TurnHome/footer')
      }
    },
    {
      path: '/parenthome',
      name: 'parenthome',
      components: {
        header: () => import('@/components/TeacherHome/header'),
        default: () => import('@/components/ParentHome/index'),
        footer: () => import('@/components/ParentHome/footer')
      }
    },
    {
      path: '/course',
      name: 'course',
      components: {
        header: () => import('@/components/Course/header'),
        default: () => import('@/components/Course/index'),
        footer: () => import('@/components/Home/footer')
      }
    },
    {
      path: '/teachercourse',
      name: 'teachercourse',
      components: {
        header: () => import('@/components/Course/header'),
        default: () => import('@/components/Course/index'),
        footer: () => import('@/components/TeacherHome/footer')
      }
    },
    {
      path: '/turncourse',
      name: 'turncourse',
      components: {
        header: () => import('@/components/Course/header'),
        default: () => import('@/components/Course/index'),
        footer: () => import('@/components/TurnHome/footer')
      }
    },
    {
      path: '/parentcourse',
      name: 'parentcourse',
      components: {
        header: () => import('@/components/Course/header'),
        default: () => import('@/components/Course/index'),
        footer: () => import('@/components/ParentHome/footer')
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
      path: '/teacheruser',
      name: 'teacheruser',
      components: {
        header: () => import('@/components/User/header'),
        default: () => import('@/components/User/index'),
        footer: () => import('@/components/TeacherHome/footer')
      }
    },
    {
      path: '/parentuser',
      name: 'parenutser',
      components: {
        header: () => import('@/components/User/header'),
        default: () => import('@/components/User/index'),
        footer: () => import('@/components/ParentHome/footer')
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
      path: '/personalinfo',
      name: 'personalinfo',
      components: {
        header: () => import('@/components/PersonalInfo/header'),
        default: () => import('@/components/PersonalInfo/index')
      }
    },
    {
      path: '/teacherlist/:title',
      name: 'teacherlist',
      components: {
        header: () => import('@/components/List/header'),
        default: () => import('@/components/List/index')
      }
    },
    {
      path: '/list/:title',
      name: 'list',
      components: {
        header: () => import('@/components/List/header'),
        default: () => import('@/components/List/index1')
      }
    },
    {
      path: '/videodetail',
      name: 'videodetail',
      components: {
        header: () => import('@/components/Detail/header'),
        default: () => import('@/components/Detail/index'),
        footer: () => import('@/components/Detail/footer')
      }
    },
    {
      path: '/audiodetail',
      name: 'audiodetail',
      components: {
        header: () => import('@/components/Detail/header'),
        default: () => import('@/components/Detail/index3'),
        footer: () => import('@/components/Detail/footer')
      }
    },
    {
      path: '/booksdetail',
      name: 'booksdetail',
      components: {
        header: () => import('@/components/Detail/header'),
        default: () => import('@/components/Detail/index1'),
        footer: () => import('@/components/Detail/footer')
      }
    },
    {
      path: '/teacherdetail',
      name: 'teacherdetail',
      components: {
        header: () => import('@/components/Detail/header'),
        default: () => import('@/components/Detail/index2'),
        footer: () => import('@/components/Detail/footer1')
      }
    }
  ]
})
