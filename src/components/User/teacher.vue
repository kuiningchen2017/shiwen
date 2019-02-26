<template>
  <div class="content animated fadeInLeft">
    <div class="top" v-if="active">
      <div class="message">
        <img src="@/assets/headimg.png" >
        <div class="data">
          <h1>师问</h1>
          <p>大家好！</p>
        </div>
        <span class="iconfont icon-iconfontjiantou4" @click="goset"></span>
      </div>
    </div>
    <div class="center">
      <li  @click="goclass">
        <img src="@/assets/geren_01.png" alt="#">
        <h2>我的班级</h2>
      </li>
      <li  @click="gohomework">
        <img src="@/assets/geren_02.png" alt="#">
        <h2>作业布置</h2>
      </li>
    </div>
    <div class="list">
      <li>
        <span class="iconfont icon-xuexiao" style="color:#55b782"></span>
        <div class="box" @click="goschool">
          <h3>我的学校</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-tuijian" style="color:#dd4e53"></span>
        <div class="box" @click="gotuijian">
          <h3>我的推荐</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-peixun" style="color:#f9c148"></span>
        <div class="box" @click="gotrain">
          <h3>我的培训</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-dingdan" style="color:#4276e4"></span>
        <div class="box" @click="goorder">
          <h3>订单中心</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
      <li>
        <span class="iconfont icon-chengguo" style="color:#dd4e53"></span>
        <div class="box mark" @click="goresult">
          <h3>我的成果</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li>
    </div>
    <div class="foot">
      <!-- <li>
        <span class="iconfont icon-shoucang1" style="color:#f9c148"></span>
        <div class="box" @click="gofollow">
          <h3>我的关注</h3>
          <span class="iconfont icon-iconfontjiantou4"></span>
        </div>
      </li> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: true
    }
  },
  mounted () {
    if (this.$route.params.router === 'class') {
      this.active = false
    }
  },
  methods: {
    goset () {
      this.$router.push('/personalinfo')
    },
    goschool () {
      this.$router.push('/schoolmessage')
    },
    goclass () {
      this.$router.push('/myclass')
    },
    gotuijian () {
      this.$router.push('/recommend')
    },
    gotrain () {
      this.$router.push('/mytrain')
    },
    goorder () {
      this.$router.push('/ordercenter')
    },
    goresult () {
      this.$router.push('/myresult')
    },
    gofollow () {
      this.$router.push('/myfollow')
    },
    gohomework () {
      this.$router.push('/homework')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  background: #efefef;
  .top {
    width: 100%;
    box-sizing: border-box;
    height: rem750(196);
    padding: rem750(38) rem750(30);
    background: #fff;
    margin-bottom: rem750(12);
    .message {
      height: rem750(120);
      @include _flex(space-between,center);
      img {
        width: rem750(120);
        height: rem750(120);
        padding-left: rem750(10);
        border-radius: 50%;
      }
      .data {
        width: rem750(460);
        height: 100%;
        h1 {
          line-height: rem750(50);
          font-weight: 400;
          font-size: $font-30;
        }
        p {
          line-height: rem750(30);
          color: #a6a6a6;
        }
      }
      span {
        color: #bcbcbc;
        font-size: rem750(26);
      }
    }
  }
  .center {
    @include rect(100%, rem750(200));
    @include _flex(space-around, center);
    background: #fff;
    margin-bottom: rem750(12);
    li {
      width: rem750(120);
      height: rem750(110);
      @include _flex(space-between, center, column);
      img {
        @include rect(rem750(80), rem750(60));
      }
      h2 {
        line-height: rem750(40);
        font-size: rem750(30);
      }
    }
  }
  .list {
    margin-bottom: rem750(12)
  }
  .list, .foot {
    width:100%;
    box-sizing: border-box;
    padding-left: rem750(36);
    background: #fff;
    margin-bottom: rem750(12);
    li {
      height: rem750(100);
      @include _flex(space-between,center);
      span {
        font-size: $font-40;
      }
      .box {
        width: 91%;
        height: rem750(100);
        box-sizing: border-box;
        padding-right: rem750(36);
        border-bottom: rem750(1) solid #efefef;
        @include _flex(space-between,center);
        h3 {
          font-size: $font-30;
          font-weight: 400;
        }
        span {
          font-size: rem750(25);
          color: #a5a5a5;
        }
      }
      .mark {
        border: 0;
      }
    }
  }
}
</style>
