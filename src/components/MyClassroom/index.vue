<template>
  <div class="content animated fadeInLeft">
    <div class="center">
      <li @click="goclass(1)">
        <div class="first">
          <img src="@/assets/geren_01.png" alt="#">
        </div>
        <div class="last">
          <h2>【我的班级】</h2>
          <p>任课教师建立线上行政班级和各种类型学习小组</p>
        </div>
      </li>
      <li @click="goclass(2)">
        <div class="first">
          <img src="@/assets/geren_02.png" alt="#">
        </div>
        <div  class="last">
          <h2>【发布任务】</h2>
          <p>任课教师根据班级、小组、个人的学习情况，将平台的资源推送到学生客户端</p>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {

    }
  },
  methods: {
    goclass (id) {
      if (localStorage.getItem('type') === '3') {
        if (id === 1) {
          this.$router.push({name: 'myclass', params: {enter: 'two'}})
        } else {
          this.$router.push({name: 'homework', params: {enter: 'two'}})
        }
      } else {
        if (localStorage.getItem('token')) {
          Toast('暂无权限')
        } else {
          Toast('请登录')
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  background: #efefef;
  .center {
    li {
      @include rect(100%, rem750(200));
      padding: 0 rem750(40);
      background: #fff;
      box-sizing: border-box;
      @include _flex(space-between, center);
      margin-top: rem750(12);
      .first{
        @include _flex(center, center);
        img {
          @include rect(rem750(140), rem750(140));
        }
      }
      .last {
        @include rect(rem750(520), rem750(140));
        h2 {
          height: rem750(50);
          line-height: rem750(50);
          font-size: $font-32;
          color: #3c3c3c;
          font-weight: 600;
        }
        p {
          height: rem750(45);
          line-height: rem750(45);
          padding-left: rem750(18);
          font-size: rem750(28);
          color: #4c4c4c;
        }
      }
    }
  }
}
</style>
