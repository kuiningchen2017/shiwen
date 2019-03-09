<template>
  <div class="content animated fadeInLeft">
    <div class="filter">
      <div class="all">
        <h3 @click="getAll">全部</h3>
      </div>
      <div class="grade" v-if="gradeShow">
        <h3 @click="getGrade" ref="grade" :id="this.gradeID">{{this.titleGrade}}</h3>
        <ul v-if="grade" :class="isOk?classA:classB">
          <li v-for="(item, index) of gradeList" :key="index" :class="{'bor':clickGrade===index}" @click="changeGrade(index,item.CD_Name,item.CD_ID)">{{item.CD_Name}}</li>
        </ul>
      </div>
      <div class="subject" v-if="subShow">
        <h3 @click="getSub" ref="sub" :id="this.subID">{{this.titleSub}}</h3>
        <ul v-if="sub" :class="isOk?classA:classB">
          <li v-for="(item, index) of subList" :key="index" :class="{'bor':clickSub===index}" @click="changeSub(index,item.CD_Name,item.CD_ID)">{{item.CD_Name}}</li>
        </ul>
      </div>
      <div class="press" v-if="pressShow">
        <h3 @click="getPress" ref="press" :id="this.pressID">{{this.titlePress}}</h3>
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
    <div class="center">
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
      <div class="list" v-if="flag">
        <li class="animated zoomIn" v-for="item of list" :key="item.Resource_ID">
          <img :src="item.Attachment_Path" alt="#" @click="godetail(item.File_ID, item.File_Code)">
          <h3>{{item.File_Name}}</h3>
          <p>{{item.File_SubName}}</p>
        </li>
      </div>
      <div class="list1" v-else-if="active">
        <li class="animated zoomIn" v-for="item of list" :key="item.Resource_ID" @click="godetails(item.File_ID, item.File_Code, item.News_Property, item.News_URL)">
          <div>
            <h3>{{item.File_SubName}}</h3>
            <p>{{item.File_CreateDate}}</p>
          </div>
          <img :src="item.Attachment_Path" alt="#">
        </li>
      </div>
      <div class="list2" v-else>
        <li class="animated zoomIn" v-for="item of list" :key="item.Resource_ID">
          <img :src = 'item.Attachment_Path' alt="#" @click="godetail(item.File_ID, item.File_Code)">
            <h3>{{item.File_Name}}</h3>
            <p>{{item.File_SubName}}</p>
        </li>
      </div>
      </mt-loadmore>
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
      clickAge: '',
      flag: true,
      active: false,
      list: [],
      allLoaded: false,
      pageNum: 1,
      page: '',
      porp: '',
      model: '',
      word: '',
      id: '',
      num: ''
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
    function () {
      if (this.$route.params.title === '023' || this.$route.params.title === '926' || this.$route.params.title === '014' || this.$route.params.title === '235' || this.$route.params.title === '526' || this.$route.params.title === '057') {
        this.page = this.pageNum * 10
        this.gradeShow = true
        this.subShow = true
        this.pressShow = true
        this.porp = 'top'
        this.model = 'sandglass'
        this.word = 'id'
        this.num = 'uh'
        if (this.$route.params.title === '023') {
          this.id = 'AB'
        } else if (this.$route.params.title === '926') {
          this.id = 'gd'
        } else if (this.$route.params.title === '014') {
          this.id = 'zy'
        } else if (this.$route.params.title === '235') {
          this.id = 'ad'
        } else if (this.$route.params.title === '526') {
          this.gradeShow = false
          this.subShow = false
          this.pressShow = false
          this.ageShow = true
          this.id = 'sn'
        } else if (this.$route.params.title === '057') {
          this.gradeShow = false
          this.subShow = false
          this.pressShow = false
          this.ageShow = true
          this.id = 'Vn'
        }
      } else if (this.$route.params.title === 'jxgj' || this.$route.params.title === 'drkt' || this.$route.params.title === 'zxxx') {
        this.page = this.pageNum * 10
        this.flag = false
        this.active = true
        this.porp = 'asked'
        this.model = 'view'
        this.word = 'id'
        this.num = 'fd'
        if (this.$route.params.title === 'jxgj') {
          this.id = 'gk'
        } else if (this.$route.params.title === 'drkt') {
          this.id = 'doc'
        } else if (this.$route.params.title === 'zxxx') {
          this.id = 'jb'
        }
      } else if (this.$route.params.title === '203' || this.$route.params.title === 'tbkt' || this.$route.params.title === '365') {
        this.page = this.pageNum * 9
        this.gradeShow = true
        this.subShow = true
        this.pressShow = true
        this.flag = false
        this.active = false
        this.porp = 'paper'
        this.model = 'list'
        this.word = 'key'
        this.num = 'gk'
        if (this.$route.params.title === '203') {
          this.id = 'cz'
        } else if (this.$route.params.title === 'tbkt') {
          this.id = 'kc'
        } else if (this.$route.params.title === '365') {
          this.id = 'dn'
        }
      } else if (this.$route.params.title === '725') {
        this.page = this.pageNum * 10
        this.gradeShow = true
        this.subShow = true
        this.porp = 'mod'
        this.model = 'gaste'
        this.word = 'id'
        this.num = 'fd'
        this.id = 'pm'
      }
    },
    changeGrade (index, val, id) {
      this.clickGrade = index
      this.titleGrade = val
      this.gradeNum = 1
      this.gradeID = id
      this.grade = false
      if (this.$refs.sub.id === null) {
        this.subID = 0
      } else {
        this.subID = this.$refs.sub.id
      }
      if (this.$refs.press) {
        if (this.$refs.press.id === null) {
          this.pressID = 0
        } else {
          this.pressID = this.$refs.press.id
        }
      }
      axios.post(`${this.GLOBAL.shishuiyuan}/index/${this.porp}/${this.model}/${this.word}/${this.id}/num/${this.num}/p/0/class/${this.gradeID}/sub/${this.subID}/press/${this.pressID}`)
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    },
    changeSub (index, val, id) {
      this.clickSub = index
      this.titleSub = val
      this.subNum = 1
      this.sub = false
      this.subID = id
      if (this.$refs.grade.id === null) {
        this.gradeID = 0
      } else {
        this.gradeID = this.$refs.grade.id
      }
      if (this.$refs.press) {
        if (this.$refs.press.id === null) {
          this.pressID = 0
        } else {
          this.pressID = this.$refs.press.id
        }
      }
      axios.post(`${this.GLOBAL.shishuiyuan}/index/${this.porp}/${this.model}/${this.word}/${this.id}/num/${this.num}/p/0/class/${this.gradeID}/sub/${this.subID}/press/${this.pressID}`)
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    },
    changePress (index, val, id) {
      this.clickPress = index
      this.titlePress = val
      this.pressNum = 1
      this.press = false
      this.pressID = id
      if (this.$refs.grade.id === null) {
        this.gradeID = 0
      } else {
        this.gradeID = this.$refs.grade.id
      }
      if (this.$refs.sub.id === null) {
        this.subID = 0
      } else {
        this.subID = this.$refs.sub.id
      }
      axios.post(`${this.GLOBAL.shishuiyuan}/index/${this.porp}/${this.model}/${this.word}/${this.id}/num/${this.num}/p/0/class/${this.gradeID}/sub/${this.subID}/press/${this.pressID}`)
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    },
    changeAge (index, val, id) {
      this.clickAge = index
      this.titleAge = val
      this.ageNum = 1
      this.age = false
      this.ageID = id
      axios.post(`${this.GLOBAL.shishuiyuan}/index/${this.porp}/${this.model}/${this.word}/${this.id}/num/${this.num}/p/0/class/0/sub/0/press/0/age/${this.ageID}`)
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    },
    getAll () {
      this.$options.methods.function.bind(this)()
      this.grade = false
      this.sub = false
      this.press = false
      this.age = false
      this.titleGrade = '年级'
      this.titleSub = '学科'
      this.titlePress = '出版社'
      this.titleAge = '年级'
      axios.post(`${this.GLOBAL.shishuiyuan}/index/${this.porp}/${this.model}/${this.word}/${this.id}/num/${this.num}/p/0/class/0/sub/0/press/0/age/0`)
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    },
    godetail (id, code) {
      if (this.$route.params.title === '023' || this.$route.params.title === '926' || this.$route.params.title === '014' || this.$route.params.title === '235' || this.$route.params.title === '526') {
        this.$router.push({name: 'videodetail', params: {id: id, code: code}})
      } else if (this.$route.params.title === '057') {
        this.$router.push({name: 'audiodetail', params: {id: id, code: code}})
      } else if (this.$route.params.title === '725') {
        this.$router.push({name: 'teacherdetail', params: {id: id, code: code}})
      } else if (this.$route.params.title === '203' || this.$route.params.title === 'tbkt') {
        this.$router.push({name: 'booksdetail', params: {id: id, code: code}})
      } else if (this.$route.params.title === '365') {
        this.$router.push({name: 'unitdetail', params: {id: id, code: code}})
      }
    },
    godetails (id, code, property, url) {
      if (property === '0') {
        window.location.href = url
      } else if (property === '1') {
        let URL = `http://sw.shishuiyuan999.com/index/picture/del/id/${id}/key/${code}`
        window.location.href = URL
      }
    },
    loadBottom () {
      this.$options.methods.function.bind(this)()
      axios.post(`${this.GLOBAL.shishuiyuan}/index/${this.porp}/${this.model}/${this.word}/${this.id}/num/${this.num}/p/${this.page}/class/${this.gradeID}/sub/${this.subID}/press/${this.pressID}`)
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
    axios.post(`${this.GLOBAL.shishuiyuan}/index/peri/top/id/ag`)
      .then(data => {
        console.log(data.data)
        this.ageList = data.data
        data.data.map((value) => {
          this.titleAge = value.Category_Name
        })
      })
    this.getAll()
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content  {
  .filter{
    @include rect(100%,rem750(72));
    background: $bg-base;
    position: absolute;
    top: 0;
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
  .center {
    .list {
      padding: rem750(102) rem750(20) 0 rem750(20);
      @include rect(100%, 100%);
      box-sizing: border-box;
      overflow: scroll;
      display: flex;
      flex-wrap: wrap;
      li {
        width: rem750(346);
        padding-bottom: rem750(30);
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
          line-height: rem750(36);
          font-size: $font-26;
          color: #595959;
          padding-left: rem750(10);
        }
      }
    }
    .list1 {
      @include rect(100%, 100%);
      margin-top: rem750(72);
      overflow: scroll;
      li {
        @include rect(100%, rem750(210));
        box-sizing: border-box;
        padding: 0 rem750(20);
        border-bottom: rem750(8) solid #f2f2f2;
        @include _flex(space-between,center);
        div {
          h3 {
            font-size: $font-list-title;
            line-height: rem750(44);
            color: $text-black;
            font-weight: normal;
          }
          p {
            line-height: rem750(35);
            font-size: rem750(17);
            color: #979797;
            padding-top: rem750(13);
          }
        }
        img {
          @include rect(rem750(218),rem750(142));
          padding-left: rem750(36)
        }
      }
    }
    .list2 {
      width: 100%;
      margin-top: rem750(72);
      padding: 0 rem750(25);
      overflow: scroll;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      li {
        width: rem750(222);
        padding-top: rem750(30);
        padding-right: rem750(17);
        &:nth-child(3n) {
          padding-right: 0;
        }
        img {
          @include rect(100%, rem750(278));
          border-radius: rem750(10)
        }
        h3 {
          line-height: rem750(36);
          font-size: $font-26;
          color: $text-black;
          font-weight: normal;
          padding-left: rem750(10);
          padding-top: rem750(9)
        }
        p {
          line-height: rem750(36);
          font-size: $font-26;
          color: #595959;
          padding-left: rem750(10);
        }
      }
    }
  }
}
</style>
