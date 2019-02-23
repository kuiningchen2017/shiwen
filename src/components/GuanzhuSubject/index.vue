<template>
  <div class="content animated fadeInLeft">
    <div class="list">
      <li>语文</li>
      <li>数学</li>
      <li>英语</li>
      <li>美术</li>
      <li>音乐</li>
      <li>品德</li>
    </div>
    <button>保存</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  .list {
    @include rect(100%, rem750(275));
    padding: rem750(53) rem750(85) 0 rem750(85);
    box-sizing: border-box;
    border-bottom: rem750(1) solid #eaeaea;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      @include rect(rem750(151), rem750(68));
      border-radius: rem750(10);
      line-height: rem750(68);
      text-align: center;
      color: #6b6b6b;
      background: #f5f5f5;
    }
  }
  button {
    @include rect(rem750(580), rem750(76));
    margin: rem750(53) rem750(85) 0 rem750(85);
    border-radius: rem750(38);
    background: #4379f5;
    line-height: rem750(76);
    color: #fff;
    font-size: rem750(30)
  }
}
</style>
