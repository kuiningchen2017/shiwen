<template>
  <div class="content animated fadeInLeft">
    <div class="box">
      <li>
        <span>班级</span>
        <input type="text" ref="txt" placeholder="请输入班级名称">
      </li>
      <li>
        <span>顺序</span>
        <input type="text" placeholder="请输入顺序">
      </li>
    </div>
    <button @click="submit">确定</button>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
export default {
  methods: {
    submit () {
      console.log(this.$refs.txt.value)
      axios.post(`${this.GLOBAL.shishuiyuan}/api/myclass/addclass?token=${localStorage.getItem('token')}&class_name=${this.$refs.txt.value}`)
        .then(data => {
          console.log(data.data)
          Toast(data.data.message)
          if (data.data.code === 0) {
            this.$router.go(-1)
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content {
  .box {
    padding: 0 rem750(26);
    li {
      height: rem750(60);
      border-bottom: rem750(1) solid #f6f6f6;
      margin-top: rem750(39);
      @include _flex(space-between, center);
      span {
        height: rem750(60);
        line-height: rem750(60);
        font-size: rem750(30);
        padding-right: rem750(25);
      }
      input {
        width: 86%;
        height: rem750(60);
        line-height: rem750(60);
        font-size: rem750(24);
        color: #000;
      }
    }
  }
  button {
    width:rem750(670);
    margin: 0 rem750(40);
    height: rem750(80);
    border-radius: rem750(40);
    background: #f64609;
    color: #fff;
    font-size: $font-30;
    margin-top: rem750(120);
  }
}
</style>
