<template>
  <div class="header">
    <!-- <span @click="back" class=" back iconfont icon-jiantou2" ></span>
    <h1>{{this.title}}</h1>
    <i></i> -->
    <mt-header :title="this.headtitle">
      <div @click="back" class="back" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="filter">
      <div class="grade">
        <h3 @click="getgrade">{{this.title}}</h3>
        <ul v-show="grade" class="switch animated fadeInLeft" ref="grade">
          <li v-for="(item, index) of nianji" :key="index" :class="{'bor':clicked===index}" @click="changeTab(index,item.CD_Name)">
            {{item.CD_Name}}</li>
        </ul>
      </div>
      <div class="subject">
        <h3 @click="getsubject">{{this.title1}}</h3>
        <ul v-show="subject" class="switchA animated fadeInLeft">
          <li v-for="(item, index) of xueke" :key="index" :class="{'bor':clicked1===index}" @click="changeTab1(index,item.CD_Name)">
            {{item.CD_Name}}</li>
        </ul>
      </div>
      <div class="press">
        <h3 @click="getpress">{{this.title2}}</h3>
        <ul v-show="press" class="switchB animated fadeInLeft">
          <li v-for="(item, index) of chubanshe" :key="index" :class="{'bor':clicked2===index}" @click="changeTab2(index,item.CD_Name)">{{item.CD_Name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      headtitle: '',
      clicked: '',
      clicked1: '',
      clicked2: '',
      grade: false,
      gradenum: 1,
      subject: false,
      subjectnum: 1,
      press: false,
      pressnum: 1,
      nianji: [],
      xueke: [],
      chubanshe: [],
      title: '',
      title1: '',
      title2: ''
    }
  },
  created () {
    if (this.$route.params.title === 'jzpx') {
      this.headtitle = '精准培训'
    } else if (this.$route.params.title === 'jpkc') {
      this.headtitle = '精品课程'
    } else if (this.$route.params.title === 'zyms') {
      this.headtitle = '中原名师'
    } else if (this.$route.params.title === 'msld') {
      this.headtitle = '名师论道'
    } else if (this.$route.params.title === 'jxgj') {
      this.headtitle = '家校共建'
    } else if (this.$route.params.title === 'drkt') {
      this.headtitle = '第二课堂'
    } else if (this.$route.params.title === 'ynjx') {
      this.headtitle = '疑难解析'
    } else if (this.$route.params.title === 'kssj') {
      this.headtitle = '课时设计'
    } else if (this.$route.params.title === 'audio') {
      this.headtitle = '音频资源'
    } else if (this.$route.params.title === 'video') {
      this.headtitle = '视频资源'
    } else if (this.$route.params.title === 'zxxx') {
      this.headtitle = '资讯信息'
    } else if (this.$route.params.title === 'tbkt') {
      this.headtitle = '同步课堂'
    }
    console.log(this.$route.params)
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    getgrade () {
      this.grade = true
      this.subject = false
      this.press = false
      var num = this.gradenum % 2
      if (num !== 0) {
        var open = document.querySelector('.switch')
        open.setAttribute('class', 'switch animated fadeInLeft')
        this.gradenum++
      } else {
        var close = document.querySelector('.switch')
        close.setAttribute('class', 'switch animated fadeOutLeft')
        this.gradenum++
      }
    },
    getsubject () {
      this.grade = false
      this.subject = true
      this.press = false
      var num1 = this.subjectnum % 2
      if (num1 !== 0) {
        var open = document.querySelector('.switchA')
        open.setAttribute('class', 'switchA animated fadeInLeft')
        this.subjectnum++
      } else {
        var close = document.querySelector('.switchA')
        close.setAttribute('class', 'switchA animated fadeOutLeft')
        this.subjectnum++
      }
    },
    getpress () {
      this.grade = false
      this.subject = false
      this.press = true
      var num2 = this.pressnum % 2
      if (num2 !== 0) {
        var open = document.querySelector('.switchB')
        open.setAttribute('class', 'switchB animated fadeInLeft')
        this.pressnum++
      } else {
        var close = document.querySelector('.switchB')
        close.setAttribute('class', 'switchB animated fadeOutLeft')
        this.pressnum++
      }
    },
    changeTab (index, val) {
      this.clicked = index
      console.log(val)
      this.title = val
      var close = document.querySelector('.switch')
      close.setAttribute('class', 'switch animated fadeOutLeft')
    },
    changeTab1 (index, val) {
      this.clicked1 = index
      console.log(val)
      this.title1 = val
      var close = document.querySelector('.switchA')
      close.setAttribute('class', 'switchA animated fadeOutLeft')
    },
    changeTab2 (index, val) {
      this.clicked2 = index
      console.log(val)
      this.title2 = val
      var close = document.querySelector('.switchB')
      close.setAttribute('class', 'switchB animated fadeOutLeft')
    }
  },
  mounted () {
    axios.post('/shishuiyuan/index/peri/top/id/hk')
      .then(data => {
        console.log(data.data)
        this.nianji = data.data
        let nianji = data.data
        nianji.map((value) => {
          this.title = value.Category_Name
        })
      })
    axios.post('/shishuiyuan/index/peri/top/id/huy')
      .then(data => {
        console.log(data.data)
        this.xueke = data.data
        let xueke = data.data
        xueke.map((value) => {
          this.title1 = value.Category_Name
        })
      })
    axios.post('/shishuiyuan/index/peri/top/id/pu')
      .then(data => {
        console.log(data.data)
        this.chubanshe = data.data
        let chubanshe = data.data
        chubanshe.map((value) => {
          this.title2 = value.Category_Name
        })
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
  .header {
    position: relative;
    // padding:0 rem750(27) 0 rem750(10);
    // box-sizing: border-box;
    // @include _flex(space-between,center);
    // .back {
    //   font-size: $font-50;
    //   color:$text-back;;
    // }
    // h1 {
    //   font-size: $font-36
    // }
    // i {
    //   @include rect(rem750(55), rem750(10))
    // }
    .mint-header {
      width: 100%;
      height:100%;
      background: $text-base;
      color: $text-black;
      font-size: $font-head;
      padding: 0 rem750(27);
      border-bottom: rem750(1) solid #f0f0f0;
    }
    .filter{
      @include rect(100%,rem750(72));
      flex-shrink: 0;
      background: $bg-base;
      position: absolute;
      top: rem750(86);
      z-index: 1001;
      @include _flex(flex-start,flex-start);
      .grade, .subject, .press {
        h3 {
          @include rect(rem750(120),rem750(72));
          line-height: rem750(72);
          text-align: center;
          font-size: $font-26;
        }
        ul {
          background: $bg-black;
          li {
            @include rect(100%,rem750(68));
            line-height: rem750(68);
            text-align: center;
            font-size: $font-24;
            border-bottom: rem750(1) solid #f2f2f2;
          }
          .bor{
            color: #118ecd;
          }
        }
      }
    }
  }

</style>
