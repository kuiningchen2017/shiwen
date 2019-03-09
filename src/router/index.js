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
      path: '/user/:type',
      name: 'user',
      components: {
        header: () => import('@/components/User/header'),
        default: () => import('@/components/User/teacher'),
        footer: () => import('@/components/Home/footer')
      }
    },
    {
      path: '/teacheruser/:type',
      name: 'teacheruser',
      components: {
        header: () => import('@/components/User/header'),
        default: () => import('@/components/User/teacher'),
        footer: () => import('@/components/TeacherHome/footer')
      }
    },
    {
      path: '/turnuser/:type',
      name: 'turnuser',
      components: {
        header: () => import('@/components/User/header'),
        default: () => import('@/components/User/teacher'),
        footer: () => import('@/components/TurnHome/footer')
      }
    },
    {
      path: '/parentuser/:type',
      name: 'parentuser',
      components: {
        header: () => import('@/components/User/header'),
        default: () => import('@/components/User/teacher'),
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
      path: '/booksdetail/:title/:id/:code',
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
      path: '/commentlist/:id/:code',
      name: 'commentlist',
      components: {
        header: () => import('@/components/CommentList/header'),
        default: () => import('@/components/CommentList/index'),
        footer: () => import('@/components/CommentList/footer')
      }
    },
    {
      path: '/comments/:id/:code',
      name: 'comments',
      components: {
        header: () => import('@/components/Comments/header'),
        default: () => import('@/components/Comments/index')
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
        header: () => import('@/components/MyClass/header'),
        default: () => import('@/components/MyClass/index')
      }
    },
    {
      path: '/myclassroom',
      name: 'myclassroom',
      components: {
        header: () => import('@/components/MyClassroom/header'),
        default: () => import('@/components/MyClassroom/index')
      }
    },
    {
      path: '/classmessage',
      name: 'classmessage',
      redirect: '/classmessage/code',
      components: {
        header: () => import('@/components/ClassMessage/header'),
        default: () => import('@/components/ClassMessage/index')
      },
      children: [
        {
          path: 'code',
          component: () => import('@/components/ClassMessage/code')
        },
        {
          path: 'teacher',
          component: () => import('@/components/ClassMessage/teacher')
        },
        {
          path: 'students',
          component: () => import('@/components/ClassMessage/students')
        }
      ]
    },
    {
      path: '/addclass',
      name: 'addclass',
      components: {
        header: () => import('@/components/AddClass/header'),
        default: () => import('@/components/AddClass/index')
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
      path: '/mystudy',
      name: 'mystudy',
      redirect: '/mystudy/all',
      components: {
        header: () => import('@/components/MyStudy/header'),
        default: () => import('@/components/MyStudy/index')
      },
      children: [
        {
          path: 'all',
          component: () => import('@/components/MyStudy/all')
        },
        {
          path: 'study',
          component: () => import('@/components/MyStudy/study')
        },
        {
          path: 'over',
          component: () => import('@/components/MyStudy/over')
        }
      ]
    },
    {
      path: '/mywork',
      name: 'mywork',
      redirect: '/mywork/all',
      components: {
        header: () => import('@/components/MyWork/header'),
        default: () => import('@/components/MyWork/index')
      },
      children: [
        {
          path: 'all',
          component: () => import('@/components/MyWork/all')
        },
        {
          path: 'study',
          component: () => import('@/components/MyWork/study')
        },
        {
          path: 'over',
          component: () => import('@/components/MyWork/over')
        }
      ]
    },
    {
      path: '/ordercenter',
      name: 'ordercenter',
      redirect: '/ordercenter/all',
      components: {
        header: () => import('@/components/OrderCenter/header'),
        default: () => import('@/components/OrderCenter/index')
      },
      children: [
        {
          path: 'all',
          component: () => import('@/components/OrderCenter/all')
        },
        {
          path: 'pay',
          component: () => import('@/components/OrderCenter/pay')
        },
        {
          path: 'comment',
          component: () => import('@/components/OrderCenter/comment')
        }
      ]
    },
    {
      path: '/myresult',
      name: 'myresult',
      redirect: '/myresult/video',
      components: {
        header: () => import('@/components/MyResult/header'),
        default: () => import('@/components/MyResult/index')
      },
      children: [
        {
          path: 'video',
          component: () => import('@/components/MyResult/video')
        },
        {
          path: 'kejian',
          component: () => import('@/components/MyResult/kejian')
        }
      ]
    },
    {
      path: '/myfollow',
      name: 'myfollow',
      components: {
        header: () => import('@/components/MyFollow/header'),
        default: () => import('@/components/MyFollow/index')
      }
    },
    {
      path: '/homework',
      name: 'homework',
      components: {
        header: () => import('@/components/Homework/header'),
        default: () => import('@/components/Homework/index')
      }
    },
    {
      path: '/newwork',
      name: 'newwork',
      components: {
        header: () => import('@/components/NewWork/header'),
        default: () => import('@/components/NewWork/index')
      }
    },
    {
      path: '/chooseclass',
      name: 'chooseclass',
      components: {
        header: () => import('@/components/NewWork/header'),
        default: () => import('@/components/NewWork/index2')
      }
    },
    {
      path: '/success',
      name: 'success',
      components: {
        header: () => import('@/components/NewWork/header'),
        default: () => import('@/components/NewWork/index3')
      }
    },
    {
      path: '/live',
      name: 'live',
      components: {
        header: () => import('@/components/Live/header'),
        default: () => import('@/components/Live/index')
      }
    },
    {
      path: '/kejian/:id/:code',
      name: 'kejian',
      components: {
        header: () => import('@/components/Kejian/header'),
        default: () => import('@/components/Kejian/index')
      }
    }
  ]
})
