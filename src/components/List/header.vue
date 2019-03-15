<template>
  <div class="header">
    <mt-header :title="this.headtitle">
      <div @click="back" class="back" slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="filter">
      <div class="all">
        <h3 @click="getAll">全部</h3>
      </div>
      <div class="grade" v-if="gradeShow">
        <h3 @click="getGrade">{{this.titleGrade}}</h3>
        <ul v-if="grade" :class="isOk?classA:classB">
          <li v-for="(item, index) of gradeList" :key="index" :class="{'bor':clickGrade===index}" @click="changeGrade(index,item.CD_Name,item.CD_ID)">
            {{item.CD_Name}}</li>
        </ul>
      </div>
      <div class="subject" v-if="subShow">
        <h3 @click="getSub">{{this.titleSub}}</h3>
        <ul v-if="sub" :class="isOk?classA:classB">
          <li v-for="(item, index) of subList" :key="index" :class="{'bor':clickSub===index}" @click="changeSub(index,item.CD_Name,item.CD_ID)">
            {{item.CD_Name}}</li>
        </ul>
      </div>
      <div class="press" v-if="pressShow">
        <h3 @click="getPress">{{this.titlePress}}</h3>
        <ul v-if="press" :class="isOk?classA:classB">
          <li v-for="(item, index) of pressList" :key="index" :class="{'bor':clickPress===index}" @click="changePress(index,item.CD_Name,item.CD_ID)">{{item.CD_Name}}</li>
        </ul>
      </div>
      <div class="age" v-if="ageShow">
        <h3 @click="getAge" ref="age" :id="this.ageID">{{this.titleAge}}</h3>
        <ul v-if="age" :class="isOk?classA:classB">
          <li v-for="(item, index) of ageList" :key="index" :class="{'bor':clickAge===index}" @click="changeAge(index,item.CD_Name,item.CD_ID)">{{item.CD_Name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueBus from 'vue-bus'
Vue.use(VueBus)
export default {
  data () {
    return {
      headtitle: '',
      titleGrade: '',
      titleSub: '',
      titlePress: '',
      titleAge: '',
      grade: false,
      gradeNum: 1,
      gradeShow: false,
      gradeID: '',
      sub: false,
      subNum: 1,
      subShow: false,
      subID: '',
      press: false,
      pressNum: 1,
      pressShow: false,
      pressID: '',
      age: false,
      ageNum: 1,
      ageShow: false,
      ageID: '',
      isOk: false,
      classA: 'animated fadeInLeft',
      classB: 'animated fadeOutLeft',
      gradeList: [],
      subList: [],
      pressList: [],
      ageList: [],
      clickGrade: '',
      clickSub: '',
      clickPress: '',
      clickAge: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    getGrade () {
      this.grade = true
      this.sub = false
      this.subNum = 1
      this.press = false
      this.pressNum = 1
      if (this.gradeNum === 1) {
        this.isOk = true
        this.gradeNum = 0
      } else {
        this.isOk = false
        this.gradeNum = 1
      }
    },
    getSub () {
      this.grade = false
      this.gradeNum = 1
      this.sub = true
      this.press = false
      this.pressNum = 1
      if (this.subNum === 1) {
        this.isOk = true
        this.subNum = 0
      } else {
        this.isOk = false
        this.subNum = 1
      }
    },
    getPress () {
      this.grade = false
      this.gradeNum = 1
      this.sub = false
      this.subNum = 1
      this.press = true
      if (this.pressNum === 1) {
        this.isOk = true
        this.pressNum = 0
      } else {
        this.isOk = false
        this.pressNum = 1
      }
    },
    getAge () {
      this.age = true
      if (this.ageNum === 1) {
        this.isOk = true
        this.ageNum = 0
      } else {
        this.isOk = false
        this.ageNum = 1
      }
    },
    getAll () {
      this.grade = false
      this.gradeNum = 1
      this.sub = false
      this.subNum = 1
      this.press = false
      this.pressNum = 1
      this.age = false
      this.ageNum = 1
      this.titleAge = '年龄'
      this.titleGrade = '年级'
      this.titleSub = '学科'
      this.titlePress = '出版社'
      this.clickGrade = ''
      this.clickSub = ''
      this.clickPress = ''
      this.clickAge = ''
      this.$bus.emit('all', 'all')
    },
    changeGrade (index, val, id) {
      this.clickGrade = index
      this.titleGrade = val
      this.gradeNum = 1
      this.grade = false
      console.log(id)
      this.$bus.emit('gradeID', id)
    },
    changeSub (index, val, id) {
      this.clickSub = index
      this.titleSub = val
      this.subNum = 1
      this.sub = false
      console.log(id)
      this.$bus.emit('subID', id)
    },
    changePress (index, val, id) {
      this.clickPress = index
      this.titlePress = val
      this.pressNum = 1
      this.press = false
      console.log(id)
      this.$bus.emit('pressID', id)
    },
    changeAge (index, val, id) {
      this.clickAge = index
      this.titleAge = val
      this.ageNum = 1
      this.age = false
      console.log(id)
      this.$bus.emit('ageID', id)
    }
  },
  mounted () {
    if (this.$route.params.title === '014') {
      this.headtitle = '精准培训'
    } else if (this.$route.params.title === '023') {
      this.headtitle = '精品课程'
    } else if (this.$route.params.title === '725') {
      this.headtitle = '中原名师'
      this.gradeShow = true
      this.subShow = true
    } else if (this.$route.params.title === '926') {
      this.headtitle = '名师论道'
    } else if (this.$route.params.title === 'jxgj') {
      this.headtitle = '家校共建'
    } else if (this.$route.params.title === '018') {
      this.headtitle = '第二课堂'
    } else if (this.$route.params.title === '235') {
      this.headtitle = '疑难解析'
    } else if (this.$route.params.title === '203') {
      this.headtitle = '课时设计'
    } else if (this.$route.params.title === '057') {
      this.headtitle = '音频资源'
    } else if (this.$route.params.title === '526') {
      this.headtitle = '视频资源'
    } else if (this.$route.params.title === 'zxxx') {
      this.headtitle = '资讯信息'
    } else if (this.$route.params.title === 'tbkt') {
      this.headtitle = '同步课堂'
    } else if (this.$route.params.title === '365') {
      this.headtitle = '单元设计'
    }
    if (this.$route.params.title === '023') {
      this.gradeShow = true
      this.subShow = true
      this.pressShow = true
    } else if (this.$route.params.title === '926' || this.$route.params.title === '014' || this.$route.params.title === '235') {
      this.gradeShow = true
      this.subShow = true
    } else if (this.$route.params.title === '526' || this.$route.params.title === '057') {
      this.ageShow = true
    } else if (this.$route.params.title === '203' || this.$route.params.title === 'tbkt' || this.$route.params.title === '365') {
      this.gradeShow = true
      this.subShow = true
      this.pressShow = true
    } else if (this.$route.params.title === '018') {
      this.subShow = true
    }
    axios.post(`${this.GLOBAL.shishuiyuan}/index/peri/top/id/hk`)
      .then(data => {
        console.log(data.data)
        this.gradeList = data.data
        data.data.map((value) => {
          this.titleGrade = value.Category_Name
        })
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/peri/top/id/huy`)
      .then(data => {
        console.log(data.data)
        this.subList = data.data
        data.data.map((value) => {
          this.titleSub = value.Category_Name
        })
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/peri/top/id/pu`)
      .then(data => {
        console.log(data.data)
        this.pressList = data.data
        data.data.map((value) => {
          this.titlePress = value.Category_Name
        })
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/peri/top/id/ag`)
      .then(data => {
        console.log(data.data)
        this.ageList = data.data
        data.data.map((value) => {
          this.titleAge = value.Category_Name
        })
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.header {
  position: relative;
  .mint-header {
    width: 100%;
    height: 100%;
    background: $text-base;
    color: $text-black;
    font-size: $font-head;
    letter-spacing: rem750(8);
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
    .all, .grade, .subject, .press, .age {
      h3 {
        @include rect(rem750(120),rem750(72));
        line-height: rem750(72);
        text-align: center;
        font-size: $font-26;
      }
      ul {
        background: $bg-black;
        height: rem750(272);
        overflow: scroll;
        li {
          @include rect(100%,rem750(68));
          line-height: rem750(68);
          text-align: center;
          font-size: $font-24;
          border-bottom: rem750(1) solid #f2f2f2;
        }
        .bor{
          color: $bg-side;
        }
      }
    }
  }
}
</style>
