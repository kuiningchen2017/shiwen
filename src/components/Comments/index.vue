<template>
  <div class="content animated fadeInLeft">
    <div class="top">
      <!-- <img class="pic" :src="this.img" alt="走丢了"> -->
      <div class="start">
        <h2>描述相符</h2>
        <div class="stars" @click="changeStars">
          <div class="gray">
              <img src="@/assets/star-gray.png" v-for="(item, index) in arr" :key="index" :data-num="index + 1">
          </div>
          <div class="light">
              <img src="@/assets/star-true.png" v-for="(item, index) in stars" :key="index" :data-num="index + 1">
          </div>
          <span>{{this.title}}</span>
        </div>
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
      arr: [1, 2, 3, 4, 5],
      stars: [1, 2, 3, 4, 5]
    }
  },
  mounted () {

  },
  methods: {
    submit () {
      if (localStorage.getItem('token')) {
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
      } else {
        this.$router.push('/login')
      }
    },
    changeStars (e) {
      var startNum = Number(e.target.dataset.num) // 点的星星
      if (startNum === undefined) {
        return
      } else if (startNum >= 1 && startNum <= 2) {
        this.title = '一般'
        startNum = 2
      } else if (startNum === 3) {
        this.title = '好'
      } else if (startNum === 4) {
        this.title = '非常好'
      } else if (startNum === 5) {
        this.title = '特别好'
      }
      this.num = startNum
      var stars = []
      for (var i = 0; i < startNum; i++) {
        stars.push(i)
      }
      this.stars = stars
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
  flex-shrink: 0;
  display: flex;
  border-bottom: rem750(10) solid #f5f5f5;
  .pic {
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
      padding-left: rem750(20);
      padding-bottom: rem750(20)
    }
    .stars {
      height: rem750(50);
      position: relative;
      @include _flex(flex-start,center);
      img{
        @include rect(rem750(40), rem750(40));
        padding: rem750(5);
      }
      .light, .gray {
        display: flex;
      }
      .light {
        position:absolute;
        top: 0;
      }
      span {
        padding-left: rem750(20);
        color: #b2b1b7;
        font-size: rem750(24);
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
    font-size: rem750(28);
    color: #000;
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
