<template>
  <div class="header">
    <mt-header title="课本">
    </mt-header>
    <div class="filter">
      <div class="all">
        <h3 @click="getAll">全部</h3>
      </div>
      <div class="grade">
        <h3 @click="getGrade">{{this.titleGrade}}</h3>
        <ul v-if="grade" :class="isOk?classA:classB">
          <li v-for="(item, index) of gradeList" :key="index" :class="{'bor':clickGrade===index}" @click="changeGrade(index,item.CD_Name,item.CD_ID)">
            {{item.CD_Name}}</li>
        </ul>
      </div>
      <div class="subject">
        <h3 @click="getSub">{{this.titleSub}}</h3>
        <ul v-if="sub" :class="isOk?classA:classB">
          <li v-for="(item, index) of subList" :key="index" :class="{'bor':clickSub===index}" @click="changeSub(index,item.CD_Name,item.CD_ID)">
            {{item.CD_Name}}</li>
        </ul>
      </div>
      <div class="press">
        <h3 @click="getPress">{{this.titlePress}}</h3>
        <ul v-if="press" :class="isOk?classA:classB">
          <li v-for="(item, index) of pressList" :key="index" :class="{'bor':clickPress===index}" @click="changePress(index,item.CD_Name,item.CD_ID)">{{item.CD_Name}}</li>
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
      titleGrade: '',
      titleSub: '',
      titlePress: '',
      grade: false,
      gradeNum: 1,
      sub: false,
      subNum: 1,
      press: false,
      pressNum: 1,
      isOk: false,
      classA: 'animated fadeInLeft',
      classB: 'animated fadeOutLeft',
      gradeList: [],
      subList: [],
      pressList: [],
      clickGrade: '',
      clickSub: '',
      clickPress: ''
    }
  },
  methods: {
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
    getAll () {
      this.grade = false
      this.gradeNum = 1
      this.sub = false
      this.subNum = 1
      this.press = false
      this.pressNum = 1
      this.titleGrade = '年级'
      this.titleSub = '学科'
      this.titlePress = '出版社'
      this.clickGrade = ''
      this.clickSub = ''
      this.clickPress = ''
      this.$bus.emit('all', 'all')
    },
    changeGrade (index, val, id) {
      this.clickGrade = index
      this.titleGrade = val
      this.gradeNum = 1
      this.grade = false
      this.$bus.emit('gradeID', id)
    },
    changeSub (index, val, id) {
      this.clickSub = index
      this.titleSub = val
      this.subNum = 1
      this.sub = false
      this.$bus.emit('subID', id)
    },
    changePress (index, val, id) {
      this.clickPress = index
      this.titlePress = val
      this.pressNum = 1
      this.press = false
      this.$bus.emit('pressID', id)
    }
  },
  mounted () {
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
    .all, .grade, .subject, .press {
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
