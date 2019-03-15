<template>
  <div class="content">
    <div class="content-top">
      <li>
        <p class="tab" :class="{ active: resource }" @click="toggleTab('resource')">
          任务资源</p><span v-show="resource"></span>
      </li>
      <li>
        <p class="tab" :class="{ active: status}" @click="toggleTab('status')">完成情况</p><span v-show="status"></span>
      </li>
    </div>
    <prince :is="currentTab" keep-alive></prince>
  </div>
</template>
<script>
import resource from '@/components/HomeWorkList/resource'
import status from '@/components/HomeWorkList/status'
export default {
  data () {
    return {
      currentTab: 'resource', // currentTab 用于标识当前触发的子组件
      resource: true,
      status: false
    }
  },
  components: { // 声明子组件
    resource,
    status
  },
  methods: {
    toggleTab (tab) {
      this.currentTab = tab
      if (tab === 'resource') {
        this.resource = true
        this.status = false
      } else if (tab === 'status') {
        this.resource = false
        this.status = true
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
