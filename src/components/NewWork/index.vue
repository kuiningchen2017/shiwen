<template>
  <div class="content animated fadeInLeft">
    <div class="top">
      <div class="jindu">
        <div class="num">
          <p>1</p>
          <b></b>
          <b></b>
          <p>2</p>
          <b></b>
          <b></b>
          <p>3</p>
        </div>
        <div class="word">
          <p>选择资源</p>
          <p>选择班级</p>
          <p>完成</p>
        </div>
      </div>
      <div class="resource">
        <h2>选择资源:</h2>
        <li class="getvalue" @click="getValue">
          {{this.selected}}
          <span class="iconfont icon-arrow"></span>
        </li>
        <ul v-if="active" :class="isOk?classA:classB">
          <li class="valuelist" v-for="(item, index) in navlist" :key="index" @click="changeValue(item.CD_ID,item.CD_Name,index)">
            <p :class="{'bor':click===index}">{{item.CD_Name}}</p>
          </li>
        </ul>
      </div>
      <div class="choose">
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
        <!-- <div class="press">
          <h3 @click="getPress">{{this.titlePress}}</h3>
          <ul v-if="press" :class="isOk?classA:classB">
            <li v-for="(item, index) of pressList" :key="index" :class="{'bor':clickPress===index}" @click="changePress(index,item.CD_Name,item.CD_ID)">{{item.CD_Name}}</li>
          </ul>
        </div> -->
      </div>
    </div>
    <div class="center">
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <div class="list">
          <li class="animated zoomIn" v-for="(item, index) of list" :key="index">
            <img :src="item.Attachment_Path" alt="#" @click="godetail(item.File_ID, item.File_Code)">
            <dl>
              <dd>
                <input type="checkbox" :id="item.File_ID" class="gcs-checkbox" v-model="checkedValue" :value="(item.File_ID)">
                <label :for="item.File_ID"></label>
              </dd>
              <dt>
                <h3>{{item.File_Name}}</h3>
                <p>{{item.File_SubName}}</p>
              </dt>
            </dl>
          </li>
        </div>
      </mt-loadmore>
    </div>
    <div class="next">
      <li>
        <p>已选</p>
        <span v-if="falg">{{num}}</span>
      </li>
      <li @click="gonext">
        下一步
      </li>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Loadmore, Toast } from 'mint-ui'
import Vue from 'vue'
Vue.use(Loadmore)
export default {
  data () {
    return {
      selected: '请选择',
      navlist: [],
      number: 1,
      click: '',
      id: '',
      active: false,
      list: [],
      pageNum: 1,
      allLoaded: false,
      falg: false,
      checkedValue: [],
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
      clickPress: '',
      titleGrade: '年级',
      titleSub: '学科',
      titlePress: '出版社'
    }
  },
  methods: {
    loadBottom () {
      axios.post(`${this.GLOBAL.shishuiyuan}/index/top/sandglass/id/AB/num/uh/p/${this.pageNum * 10}`)
        .then(data => {
          if (data.data.length === 0) {
            this.allLoaded = true
            Toast('已无更多数据')
          } else {
            this.pageNum++
            this.list = [...this.list, ...data.data]
          }
          this.$refs.loadmore.onBottomLoaded()
        })
    },
    godetail (id, code) {
      this.$router.push({name: 'videodetail', params: {id: id, code: code}})
    },
    gonext () {
      if (this.checkedValue.length !== 0) {
        this.$router.push('/chooseclass')
      } else {
        alert('至少选择一个')
      }
    },
    getValue () {
      if (this.number === 1) {
        this.number = 0
        this.isOk = true
        this.active = true
      } else {
        this.number = 1
        this.active = false
      }
    },
    changeValue (id, name, index) {
      this.selected = name
      this.id = id
      this.number = 1
      this.click = index
      this.active = false
      axios.post(`${this.GLOBAL.shishuiyuan}/api/file/getfilelist?page=1&rows=15&category_id=${id}`)
        .then(data => {
          this.list = data.data.data.data
        })
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
    },
    changeGrade (index, val, id) {
      this.clickGrade = index
      this.titleGrade = val
      this.gradeNum = 1
      this.grade = false
      axios.post(`${this.GLOBAL.shishuiyuan}/api/file/getfilelist?page=1rows=15&category_id=${this.id}&grade_id=${id}&subject_id=${this.subID}&press_id=${this.pressID}`)
        .then(data => {
          console.log(data.data.data.data)
          if (data.data.data.data.length !== 0) {
            this.list = data.data.data.data
          } else {
            this.show = true
          }
        })
    },
    changeSub (index, val, id) {
      this.clickSub = index
      this.titleSub = val
      this.subNum = 1
      this.sub = false
      axios.post(`${this.GLOBAL.shishuiyuan}/api/file/getfilelist?page=1rows=15&category_id=${this.id}&grade_id=${this.gradeID}&subject_id=${id}&press_id=${this.pressID}`)
        .then(data => {
          console.log(data.data.data.data)
          if (data.data.data.data.length !== 0) {
            this.list = data.data.data.data
          } else {
            this.show = true
          }
        })
    },
    changePress (index, val, id) {
      this.clickPress = index
      this.titlePress = val
      this.pressNum = 1
      this.press = false
      axios.post(`${this.GLOBAL.shishuiyuan}/api/file/getfilelist?page=1rows=15&category_id=${this.id}&grade_id=${this.gradeID}&subject_id=${this.subID}&press_id=${id}`)
        .then(data => {
          console.log(data.data)
          if (data.data.data.data.length !== 0) {
            this.list = data.data.data.data
          } else {
            this.show = true
          }
        })
    }
  },
  computed: {
    num () {
      if (this.checkedValue.length > 0) {
        sessionStorage.setItem('HomeWorkID', this.checkedValue)
        return this.checkedValue.length
      }
    }
  },
  watch: {
    num () {
      if (this.checkedValue.length > 0) {
        this.falg = true
      } else {
        this.falg = false
        sessionStorage.removeItem('HomeWorkID')
      }
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/api/category/getcoursecategorylist`)
      .then(data => {
        console.log(data.data)
        this.navlist = data.data.data
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/api/file/getfilelist?page=1&rows=15`)
      .then(data => {
        console.log(data.data)
        this.list = data.data.data.data
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/api/category/getgradelist`)
      .then(data => {
        console.log(data.data)
        this.gradeList = data.data.data
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/api/category/getsubjectlist`)
      .then(data => {
        console.log(data.data)
        this.subList = data.data.data
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/api/category/getpresslist`)
      .then(data => {
        console.log(data.data)
        this.pressList = data.data.data
      })
    if (sessionStorage.getItem('HomeWorkID')) {
      var HomeWorkID = sessionStorage.getItem('HomeWorkID')
      this.checkedValue = HomeWorkID.split(',')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content {
  .top {
    @include rect(100%, rem750(306));
    flex-shrink: 0;
    .jindu {
      @include rect(100%, rem750(114));
      border-bottom: rem750(6) solid #f5f5f5;
      .num {
        padding: rem750(23) rem750(93) 0 rem750(89);
        @include rect(100%, rem750(51));
        box-sizing: border-box;
        @include _flex(center, center);
        p {
          @include rect(rem750(28), rem750(28));
          line-height: rem750(28);
          text-align: center;
          border-radius: 50%;
          color: #fff;
          background: #e9ebf4;
          &:nth-of-type(1) {
            background: $bg-side;
          }
        }
        b {
          @include rect(rem750(121), rem750(4));
          background: #e9ebf4;
          &:nth-of-type(1) {
            background: $bg-side;
          }
        }
      }
      .word {
        padding: 0 rem750(81) 0 rem750(60);
        @include rect(100%, rem750(50));
        box-sizing: border-box;
        @include _flex(flex-start, center);
        p {
          line-height: rem750(50);
          font-size: rem750(22);
          &:first-child {
            padding-right: rem750(178);
          }
          &:nth-child(2) {
            padding-right: rem750(204);
          }
        }
      }
    }
    .resource {
      @include rect(rem750(655), rem750(102));
      box-sizing: border-box;
      margin-left: rem750(42);
      margin-right: rem750(53);
      @include _flex(space-between, center);
      position: relative;
      h2 {
        line-height: rem750(30);
        font-size: rem750(24);
        color: #4d4d4d;
      }
      .getvalue {
        @include rect(rem750(528), rem750(44));
        padding-left: rem750(25);
        padding-right: rem750(25);
        box-sizing: border-box;
        border: rem750(1) solid #ccc;
        border-radius: rem750(10);
        @include _flex(space-between, center);
        font-size: rem750(28);
        span {
          @include rect(rem750(40), rem750(40));
          line-height: rem750(40);
          text-align: center;
          font-size: rem750(30)
        }
      }
      ul {
        position: absolute;
        top: rem750(75);
        right: 0;
        z-index: 1001;
        background: #fff;
        .valuelist {
          @include rect(rem750(530), rem750(60));
          line-height:rem750(60);
          font-size: rem750(30);
          border-bottom: rem750(1) solid #f2f2f2;
          p {
            padding-left: rem750(25);
            color: #000;
          }
          .bor{
            color: $bg-side;
          }
        }
      }
    }
    .choose {
      margin-bottom: rem750(24);
      @include rect(100%,rem750(72));
      flex-shrink: 0;
      background: $bg-base;
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
          position: relative;
          z-index: 1001;
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
  .center {
    flex-grow: 1;
    overflow: auto;
    .list {
      padding: 0 rem750(20);
      height: auto;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      li {
        width: rem750(346);
        height: rem750(315);
        &:nth-child(odd) {
          padding-right: rem750(9);
        }
        &:nth-child(even) {
          padding-left: rem750(9);
        }
        img {
          @include rect(100%, rem750(210));
          border-radius: rem750(10)
        }
        dl {
          @include _flex(space-between, center);
          dd {
            .gcs-checkbox {
              @include rect(rem750(24), rem750(24));
              display: none;
            }
            .gcs-checkbox+label {
              border-radius: rem750(5);
              border: rem750(2) solid #b0b1b1;
              @include rect(rem750(20), rem750(20));
              display: inline-block;
              text-align: center;
              vertical-align: bottom;
              line-height: rem750(20);
            }
            .gcs-checkbox:checked+label {
              background: $bg-side;
              border: rem750(2) solid $bg-side;
            }
            .gcs-checkbox:checked+label:after {
              content: "\2714";
              color: white;
            }
          }
          dt {
            h3 {
              line-height: rem750(36);
              font-size: $font-list-title1;
              color: $text-black;
              font-weight: normal;
              padding-left: rem750(10);
              padding-top: rem750(9);
              width: rem750(320);
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
            }
            p {
              width: rem750(310);
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              line-height: rem750(36);
              font-size: $font-26;
              color: #595959;
              padding-left: rem750(10);
            }
          }
        }
      }
    }
  }
  .next {
    @include rect(100%, rem750(162));
    // position: fixed;
    // bottom: 0;
    flex-shrink: 0;
    background: #fff;
    padding: 0 rem750(200);
    box-sizing: border-box;
    @include _flex(space-between, center);
    li {
      @include rect(rem750(148), rem750(58));
      box-sizing: border-box;
      border-radius: rem750(10);
      &:first-child {
        border: rem750(1) solid #b3b3b3;
        position: relative;
        p {
          height: 100%;
          line-height: rem750(56);
          font-size: rem750(24);
          text-align: center;
          word-spacing: rem750(20);
        }
        span {
          position: absolute;
          top: rem750(10);
          right: rem750(20);
          @include rect(rem750(25), rem750(25));
          color: #fff;
          font-size: rem750(18);
          line-height: rem750(25);
          text-align: center;
          background: #f85f13;
          border-radius: 50%
        }
      }
      &:last-child {
        background: $bg-side;
        color: #fff;
        line-height: rem750(58);
        font-size: rem750(24);
        text-align: center;
      }
    }
  }
}
</style>
