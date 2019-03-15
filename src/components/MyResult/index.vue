<template>
  <div class="content">
    <div class="content-top">
      <li>
        <p class="tab" :class="{ active: videos }" @click="toggleTab('videos')">
          视频资源</p><span v-show="videos"></span>
      </li>
      <li>
        <p class="tab" :class="{ active: kejian}" @click="toggleTab('kejian')">课件资源</p><span v-show="kejian"></span>
      </li>
    </div>
    <prince :is="currentTab" keep-alive></prince>
  </div>
</template>
<script>
import videos from '@/components/MyResult/video'
import kejian from '@/components/MyResult/kejian'
export default {
  data () {
    return {
      currentTab: 'video', // currentTab 用于标识当前触发的子组件
      videos: true,
      kejian: false
    }
  },
  components: { // 声明子组件
    videos,
    kejian
  },
  methods: {
    toggleTab (tab) {
      this.currentTab = tab
      if (tab === 'videos') {
        this.videos = true
        this.kejian = false
      } else if (tab === 'kejian') {
        this.videos = false
        this.kejian = true
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
