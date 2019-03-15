<template>
  <div class="content">
    <div class="content-top">
      <li>
        <p class="tab" :class="{ active: all }" @click="toggleTab('all')">
          全部</p><span v-show="all"></span>
      </li>
      <li>
      <p class="tab" :class="{ active: pay}" @click="toggleTab('pay')">待付款</p><span v-show="pay"></span>
      </li>
      <li>
      <p class="tab" :class="{ active: comment}" @click="toggleTab('comment')">待评论</p><span v-show="comment"></span>
      </li>
    </div>
    <prince :is="currentTab" keep-alive></prince>
  </div>
</template>
<script>
import all from '@/components/OrderCenter/all'
import pay from '@/components/OrderCenter/pay'
import comment from '@/components/OrderCenter/comment'
export default {
  data () {
    return {
      currentTab: 'all', // currentTab 用于标识当前触发的子组件
      all: true,
      pay: false,
      comment: false
    }
  },
  components: { // 声明子组件
    all,
    pay,
    comment
  },
  methods: {
    toggleTab (tab) {
      this.currentTab = tab
      if (tab === 'all') {
        this.all = true
        this.pay = false
        this.comment = false
      } else if (tab === 'pay') {
        this.all = false
        this.pay = true
        this.comment = false
      } else if (tab === 'comment') {
        this.all = false
        this.pay = false
        this.comment = true
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
