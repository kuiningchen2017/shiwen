<template>
  <div class="header">
    <router-link to="/home">
      <span class="back iconfont icon-jiantou2" ></span>
    </router-link>
    <div class="headbox">
      <span class="iconfont icon-icon-"></span>
      <input ref="tip" id="txt" type="text" @focus="goFocus" placeholder="课件和知识点">
      <div class="cancel">
        <img src="@/assets/close.png" v-if="flag" class="close" @click="goclear">
      </div>
      <button class="btn" @click="goSearch">搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false
    }
  },
  methods: {
    goSearch () {
      let n = this.$refs.tip.value
      this.$router.push({name: 'detail', query: {}})
    },
    goclear () {
      this.$refs.tip.value = ''
    },
    goFocus () {
      this.flag = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
  .header {
    padding:0 rem750(27) 0 rem750(10);
    box-sizing: border-box;
    @include _flex(space-between,center);
    .back {
      color:$text-back;
      font-size: $font-50;
    }
    .headbox {
      width: rem750(604);
      height: rem750(56);
      background: #f2f2f2;
      margin-right: rem750(33);
      @include _flex(center,center);
      border-radius: rem750(28);
      position: relative;
      span {
        width: rem750(150);
        line-height: rem750(47);
        font-size: rem750(32);
        text-align: end;
        color: rgb(112, 109, 109);
        padding-right: rem750(10)
      }
      #txt {
        width: rem750(350);
        height: 100%;
        color: rgb(112, 109, 109);
      }
      .cancel {
        width: rem750(30);
        height: rem750(30);
        .close {
          width: 100%;
          height:100%;
        }
      }
      .btn {
        width: rem750(104);
        height: 100%;
        color: #f2f2f2;
        font-size: rem750(22)
      }
    }
  }

</style>
