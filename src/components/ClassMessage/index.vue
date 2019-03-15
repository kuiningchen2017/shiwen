<template>
  <div class="content">
    <div class="content-top">
      <li>
        <p class="tab" :class="{ active: code }" @click="toggleTab('ercode')">
          二维码</p><span v-show="code"></span>
      </li>
      <li>
      <p class="tab" :class="{ active: teacher}" @click="toggleTab('teacher')">教师</p><span v-show="teacher"></span>
      </li>
      <li>
        <p class="tab" :class="{ active: students }" @click="toggleTab('students')">学生</p><span v-show="students"></span>
      </li>
    </div>
    <prince :is="currentTab" keep-alive></prince>
  </div>
</template>
<script>
import ercode from '@/components/ClassMessage/code'
import teacher from '@/components/ClassMessage/teacher'
import students from '@/components/ClassMessage/students'
export default {
  data () {
    return {
      currentTab: 'ercode', // currentTab 用于标识当前触发的子组件
      code: true,
      teacher: false,
      students: false
    }
  },
  components: { // 声明子组件
    ercode,
    teacher,
    students
  },
  methods: {
    toggleTab: function (tab) {
      this.currentTab = tab
      if (tab === 'ercode') {
        this.code = true
        this.teacher = false
        this.students = false
      } else if (tab === 'teacher') {
        this.code = false
        this.teacher = true
        this.students = false
      } else if (tab === 'students') {
        this.code = false
        this.teacher = false
        this.students = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content {
  .content-top {
    @include rect(100%,rem750(90));
    @include _flex(space-between, center);
    flex-shrink: 0;
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
