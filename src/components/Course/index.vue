<template>
  <div class="content animated fadeInLeft">
    <div class="choose"></div>
    <div class="list" >
      <li class="animated zoomIn">
        <img src = '@/assets/1.png' alt="#">
        <h3>三年级数学上册</h3>
        <p>人教版</p>
      </li>
      <li class="animated zoomIn">
        <img src= '@/assets/2.png' alt="#">
        <h3>三年级语文上册</h3>
        <p>人教版</p>
      </li>
      <li class="animated zoomIn">
        <img src= '@/assets/3.png' alt="#">
        <h3>三年级语文下册</h3>
        <p>人教版</p>
      </li>
      <li class="animated zoomIn">
          <img src = '@/assets/1.png' alt="#">
          <h3>三年级数学上册</h3>
          <p>人教版</p>
        </li>
        <li class="animated zoomIn">
          <img src= '@/assets/2.png' alt="#">
          <h3>三年级语文上册</h3>
          <p>人教版</p>
        </li>
        <li class="animated zoomIn">
          <img src= '@/assets/3.png' alt="#">
          <h3>三年级语文下册</h3>
          <p>人教版</p>
        </li>
        <li class="animated zoomIn">
          <img src = '@/assets/1.png' alt="#">
          <h3>三年级数学上册</h3>
          <p>人教版</p>
        </li>
        <li class="animated zoomIn">
          <img src= '@/assets/2.png' alt="#">
          <h3>三年级语文上册</h3>
          <p>人教版</p>
        </li>
        <li class="animated zoomIn">
          <img src= '@/assets/3.png' alt="#">
          <h3>三年级语文下册</h3>
          <p>人教版</p>
        </li>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
  .choose {
    @include rect(100%, rem750(100));
    background: $bg-base;
  }
  .list {
    width: 100%;
    padding: 0 rem750(25);
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    li {
      width: rem750(222);
      padding-top: rem750(30);
      padding-right: rem750(17);
      &:nth-child(3n) {
        padding-right: 0;
      }
      img {
        @include rect(100%, rem750(278));
        border-radius: rem750(10)
      }
      h3 {
        line-height: rem750(36);
        font-size: $font-26;
        color: $text-black;
        font-weight: normal;
        padding-left: rem750(10);
        padding-top: rem750(9)
      }
      p {
        line-height: rem750(36);
        font-size: $font-26;
        color: #595959;
        padding-left: rem750(10);
      }
    }
  }
</style>
