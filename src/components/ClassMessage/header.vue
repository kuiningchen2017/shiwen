<template>
  <div class="header">
    <mt-header title="班级信息">
      <div @click="back" class="back" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="headbox">
      <li>
        <p @click="code1" :class="{ active: code }">二维码</p>
        <span v-show="code"></span>
      </li>
      <li>
        <p @click="teacher1" :class="{ active: teacher}">教师</p>
        <span v-show="teacher"></span>
      </li>
      <li>
        <p @click="students1" :class="{ active: students }">学生</p>
        <span v-show="students"></span>
      </li>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'
Vue.use(Header)
export default {
  data () {
    return {
      code: true,
      teacher: false,
      students: false
    }
  },
  methods: {
    back () {
      this.$router.push('/myclass')
    },
    code1 () {
      this.$router.push('/classmessage/code')
      this.code = true
      this.teacher = false
      this.students = false
    },
    teacher1 () {
      this.$router.push('/classmessage/teacher')
      this.code = false
      this.teacher = true
      this.students = false
    },
    students1 () {
      this.$router.push('/classmessage/students')
      this.code = false
      this.teacher = false
      this.students = true
    }
  },
  mounted () {
    if (this.$route.path === '/classmessage/teacher') {
      this.code = false
      this.teacher = true
      this.students = false
    } else if (this.$route.path === '/classmessage/students') {
      this.code = false
      this.teacher = false
      this.students = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.header {
  .mint-header {
    width: 100%;
    height:100%;
    background: $text-base;
    color: $text-black;
    font-size: $font-head;
    padding: 0 rem750(27);
    border-bottom: rem750(1) solid #f0f0f0;
  }
  .headbox {
    @include rect(100%,rem750(90));
    @include _flex(space-between, center);
    padding: 0 rem750(100);
    box-sizing: border-box;
    background: #fff;
    position: relative;
    top:0;
    z-index: 1001;
    li {
      height: rem750(90);
      @include _flex(space-between, center, column);
      p {
        height: rem750(86);
        line-height: rem750(100);
        text-align: center;
        font-size: rem750(30);
        color: #979797;
      }
      span {
        @include rect(rem750(41), rem750(4));
        background: $bg-side;
      }
      .active {
        color: $bg-side;
      }
    }
  }
}
</style>
