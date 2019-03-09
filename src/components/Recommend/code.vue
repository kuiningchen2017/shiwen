<template>
  <div class="center animated fadeInLeft">
    <!-- <img src="@/assets/code.png" alt="#"> -->
    <div class="box">

    </div>
    <div id="qrcode"></div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  mounted () {
    this.qrcode()
  },
  methods: {
    qrcode () {
      let qrcode = new QRCode('qrcode', {
        width: 300,
        height: 300,
        text: `http://sw.shishuiyuan999.com/?invite_id=${localStorage.getItem('userID')}`, // 二维码地址
        colorDark: '#000',
        colorLight: '#fff',
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.center {
  margin-top: rem750(90);
  @include rect(100%, 100%);
  border-top: rem750(4) solid #f0f0f0;
  // img {
  //   @include rect(100%, 100%)
  // }
  #qrcode {
    @include rect(100%, rem750(400));
    @include _flex(center, center);
    canvas {
      width: rem750(300)!important;
      height: rem750(300)!important;
    }
    img {
      width: rem750(300)!important;
      height: rem750(300)!important;
    }
  }
}
</style>
