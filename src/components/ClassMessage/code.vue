<template>
  <div class="center animated fadeInLeft">
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
        text: `http://sw.shishuiyuan999.com/#/home?invite_join_class_id=${this.$route.params.id}`, // 二维码地址
        colorDark: '#000',
        colorLight: '#fff'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.center {
  @include rect(100%, 100%);
  border-top: rem750(4) solid #f0f0f0;
}
</style>
