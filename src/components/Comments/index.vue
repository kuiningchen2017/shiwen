<template>
  <div class="content animated fadeInLeft">
    <div class="top">
      <img :src="this.img" alt="走丢了">
      <div class="start">
        <h2>描述享福</h2>
        <li>
          <div class="comment-star" :class="{star5:five, star4:four, star3:three, star2:two}" @click="start($event)"></div>
          <span>{{this.title}}</span>
        </li>
      </div>
    </div>
    <div class="describe">
      <textarea ref='text' class="text" placeholder="宝贝满足你的期待吗？说说它的优点和美中不足的地方吧"></textarea>
    </div>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      img: '',
      title: '特别好',
      num: 5,
      four: false,
      three: false,
      two: false,
      five: false
    }
  },
  mounted () {

  },
  methods: {
    submit () {
      axios.post(`${this.GLOBAL.shishuiyuan}/index/discuss/gain/token/${localStorage.getItem('token')}/kid/${this.$route.params.id}/key/${this.$route.params.code}/level/${this.num}/tent/${this.$refs.text.value}`)
        .then(data => {
          console.log(data.data)
          if (data.data.state === true) {
            Toast('评论成功')
            this.$router.go(-1)
          } else if (data.data.state === false) {
            Toast(data.data.Error)
          }
        })
    },
    start (e) {
      if (Math.ceil(e.offsetX / 50) > 0 && Math.ceil(e.offsetX / 50) <= 2) {
        this.title = '一般'
        this.num = 2
        this.two = true
        this.four = false
        this.three = false
        this.five = false
      } else if (Math.ceil(e.offsetX / 50) === 3) {
        this.title = '好'
        this.num = 3
        this.two = false
        this.three = true
        this.four = false
        this.five = false
      } else if (Math.ceil(e.offsetX / 50) === 4) {
        this.title = '非常好'
        this.num = 4
        this.two = false
        this.three = false
        this.four = true
        this.five = false
      } else if (Math.ceil(e.offsetX / 50) === 5) {
        this.title = '特别好'
        this.num = 5
        this.two = false
        this.three = false
        this.four = false
        this.five = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.top {
  @include rect(100%, rem750(166));
  padding: rem750(15) rem750(22) rem750(31) rem750(22);
  box-sizing: border-box;
  display: flex;
  border-bottom: rem750(10) solid #f5f5f5;
  img {
    @include rect(rem750(180), rem750(110));
    border-radius: rem750(10);
    padding-right: rem750(30)
  }
  .start {
    flex-grow: 1;
    h2 {
      height: rem750(46);
      line-height: rem750(46);
      color: #484848;
      font-size: rem750(26);
    }
    li {
      height: rem750(65);
      @include _flex(flex-start, center);
      .comment-star {
        @include rect(rem750(250), rem750(40));
        background-image: url('../../assets/star.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: cover
      }
      span {
        padding-left: rem750(20);
        color: #b2b1b7;
        font-size: rem750(24);
      }
      .star2{
        background-position: rem750(-150) 0;
      }
      .star3{
        background-position: rem750(-100) 0;
      }
      .star4{
        background-position: rem750(-50) 0;
      }
      .star5{
        background-position: 0 0;
      }
    }
  }
}
.describe {
  @include rect(100%, rem750(298));
  border-bottom: rem750(10) solid #f5f5f5;
  padding: rem750(35) rem750(40) 0 rem750(40);
  box-sizing: border-box;
  .text {
    @include rect(100%, 100%);
    border: 0;
    color: #5b5b5c;
    font-size: rem750(30);
  }
}
button {
  @include rect(rem750(148), rem750(56));
  border: rem750(1) solid #f00000;
  border-radius: rem750(10);
  line-height: rem750(56);
  color: #f00000;
  font-size: rem750(30);
  letter-spacing: rem750(5);
  margin-top: rem750(49);
  margin-left: rem750(300)
}
</style>
