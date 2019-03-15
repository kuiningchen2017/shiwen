<template>
  <div class="content">
    <div class="content-top">
      <li>
        <p class="tab" :class="{ active: all }" @click="toggleTab('all')">
          全部</p><span v-show="all"></span>
      </li>
      <li>
      <p class="tab" :class="{ active: study}" @click="toggleTab('study')">待学习</p><span v-show="study"></span>
      </li>
      <li>
      <p class="tab" :class="{ active: over}" @click="toggleTab('over')">已学习</p><span v-show="over"></span>
      </li>
    </div>
    <prince :is="currentTab" keep-alive></prince>
  </div>
</template>
<script>
import all from '@/components/MyStudy/all'
import study from '@/components/MyStudy/study'
import over from '@/components/MyStudy/over'
export default {
  data () {
    return {
      currentTab: 'all', // currentTab 用于标识当前触发的子组件
      all: true,
      study: false,
      over: false
    }
  },
  components: { // 声明子组件
    all,
    study,
    over
  },
  methods: {
    toggleTab (tab) {
      this.currentTab = tab
      if (tab === 'all') {
        this.all = true
        this.study = false
        this.over = false
      } else if (tab === 'study') {
        this.all = false
        this.study = true
        this.over = false
      } else if (tab === 'over') {
        this.all = false
        this.study = false
        this.over = true
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
