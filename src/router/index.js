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
      path: '/list/:title',
      name: 'list',
      components: {
        header: () => import('@/components/List/header'),
        default: () => import('@/components/List/index')
      }
    },
    {
      path: '/videodetail/:id/:code',
      name: 'videodetail',
      components: {
        header: () => import('@/components/Detail/header'),
        default: () => import('@/components/Detail/videodetail'),
        footer: () => import('@/components/Detail/footer')
      }
    },
    {
      path: '/audiodetail/:id/:code',
      name: 'audiodetail',
      components: {
        header: () => import('@/components/Detail/header'),
        default: () => import('@/components/Detail/audiodetail'),
        footer: () => import('@/components/Detail/footer')
      }
    },
    {
      path: '/booksdetail/:id/:code',
      name: 'booksdetail',
      components: {
        header: () => import('@/components/Detail/header'),
        default: () => import('@/components/Detail/booksdetail'),
        footer: () => import('@/components/Detail/footer')
      }
    },
    {
      path: '/teacherdetail/:id/:code',
      name: 'teacherdetail',
      components: {
        header: () => import('@/components/Detail/header'),
        default: () => import('@/components/Detail/teacherdetail'),
        footer: () => import('@/components/Detail/footer1')
      }
    },
    {
      path: '/schoolmessage',
      name: 'schoolmessage',
      components: {
        header: () => import('@/components/SchoolMessage/header'),
        default: () => import('@/components/SchoolMessage/index')
      }
    },
    {
      path: '/schoolset',
      name: 'schoolset',
      components: {
        header: () => import('@/components/Schoolset/header'),
        default: () => import('@/components/Schoolset/index')
      }
    },
    {
      path: '/guanzhuxueke',
      name: 'guanzhuxueke',
      components: {
        header: () => import('@/components/GuanzhuSubject/header'),
        default: () => import('@/components/GuanzhuSubject/index')
      }
    },
    {
      path: '/myclass',
      name: 'myclass',
      components: {
        header: () => import('@/components/myclass/header'),
        default: () => import('@/components/myclass/index')
      }
    },
    {
      path: '/recommend',
      name: 'recommend',
      redirect: '/recommend/code',
      components: {
        header: () => import('@/components/Recommend/header'),
        default: () => import('@/components/Recommend/index')
      },
      children: [
        {
          path: 'code',
          component: () => import('@/components/Recommend/code')
        },
        {
          path: 'list',
          component: () => import('@/components/Recommend/list')
        }
      ]
    },
    {
      path: '/mytrain',
      name: 'mytrain',
      redirect: '/mytrain/all',
      components: {
        header: () => import('@/components/MyTrain/header'),
        default: () => import('@/components/MyTrain/index')
      },
      children: [
        {
          path: 'all',
          component: () => import('@/components/MyTrain/all')
        },
        {
          path: 'study',
          component: () => import('@/components/MyTrain/study')
        },
        {
          path: 'over',
          component: () => import('@/components/MyTrain/over')
        }
      ]
    },
    {
      path: '/ordercenter',
      name: 'ordercenter',
      redirect: '/ordercenter/all',
      components: {
        header: () => import('@/components/ordercenter/header'),
        default: () => import('@/components/ordercenter/index')
      },
      children: [
        {
          path: 'all',
          component: () => import('@/components/ordercenter/all')
        },
        {
          path: 'pay',
          component: () => import('@/components/ordercenter/pay')
        },
        {
          path: 'comment',
          component: () => import('@/components/ordercenter/comment')
        }
      ]
    },
    {
      path: '/myresult',
      name: 'myresult',
      redirect: '/myresult/video',
      components: {
        header: () => import('@/components/myresult/header'),
        default: () => import('@/components/myresult/index')
      },
      children: [
        {
          path: 'video',
          component: () => import('@/components/myresult/video')
        },
        {
          path: 'kejian',
          component: () => import('@/components/myresult/kejian')
        }
      ]
    },
    {
      path: '/myfollow',
      name: 'myfollow',
      components: {
        header: () => import('@/components/myfollow/header'),
        default: () => import('@/components/myfollow/index')
      }
    },
    {
      path: '/homework',
      name: 'homework',
      components: {
        header: () => import('@/components/homework/header'),
        default: () => import('@/components/homework/index')
      }
    }
  ]
})
