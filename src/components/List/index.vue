<template>
  <div class="content animated fadeInLeft">
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
    <!-- <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore"> -->
      <div class="list" v-if="flag" @click="getclear">
        <li class="animated zoomIn" v-for="item of list" :key="item.Resource_ID" @click="godetail(item.File_ID, item.File_Code)">
          <img :src="item.Attachment_Path" alt="#">
          <h3>{{item.File_Name}}</h3>
          <p>{{item.File_SubName}}</p>
        </li>
      </div>
      <div class="list1" v-else-if="active" @click="getclear">
        <li class="animated zoomIn" v-for="item of list" :key="item.Resource_ID" @click="godetails(item.File_ID, item.File_Code, item.News_Property, item.News_URL)">
          <div>
            <h3>{{item.File_Name}}</h3>
            <p>{{item.File_CreateDate}}</p>
          </div>
          <img :src="item.Attachment_Path" alt="#">
        </li>
      </div>
      <div class="list2" @click="getclear" v-else>
        <li class="animated zoomIn" v-for="item of list" :key="item.Resource_ID" @click="godetail(item.File_ID, item.File_Code)">
          <img :src = 'item.Attachment_Path' alt="#">
            <h3>{{item.File_Name}}</h3>
            <p>{{item.File_SubName}}</p>
        </li>
      </div>
    <!-- </mt-loadmore> -->
  </div>
</template>

<script>
// import Vue from 'vue'
// import { Indicator, Loadmore, Toast } from 'mint-ui'
// Vue.use(Loadmore)
import axios from 'axios'
export default {
  data () {
    return {
      flag: true,
      active: false,
      clicked: '',
      clicked1: '',
      clicked2: '',
      grade: false,
      subject: false,
      press: false,
      list: [],
      allLoaded: false,
      pageNum: 1,
      nianji: [],
      xueke: [],
      chubanshe: [],
      title: '',
      title1: '',
      title2: ''
    }
  },
  methods: {
    getclear () {
      this.grade = false
      this.subject = false
      this.press = false
    },
    getgrade () {
      this.grade = true
      this.subject = false
      this.press = false
      var open = document.querySelector('.switch')
      open.setAttribute('class', 'switch animated fadeInLeft')
    },
    getsubject () {
      this.grade = false
      this.subject = true
      this.press = false
      var open = document.querySelector('.switchA')
      open.setAttribute('class', 'switchA animated fadeInLeft')
    },
    getpress () {
      this.grade = false
      this.subject = false
      this.press = true
      var open = document.querySelector('.switchB')
      open.setAttribute('class', 'switchB animated fadeInLeft')
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
    },
    godetail (id, code) {
      if (this.$route.params.title === 'jpkc' || this.$route.params.title === 'msld' || this.$route.params.title === 'jzpx' || this.$route.params.title === 'ksjx' || this.$route.params.title === 'kjzy' || this.$route.params.title === 'ynjx' || this.$route.params.title === 'video') {
        console.log('1111')
        this.$router.push({name: 'videodetail', params: {id: id, code: code}})
      } else if (this.$route.params.title === 'audio') {
        console.log('222')
        this.$router.push({name: 'audiodetail', params: {id: id, code: code}})
      } else if (this.$route.params.title === 'zyms') {
        console.log('333')
        this.$router.push({name: 'teacherdetail', params: {id: id, code: code}})
      } else if (this.$route.params.title === 'tbkt') {
        console.log('444')
        this.$router.push({name: 'booksdetail', params: {id: id, code: code}})
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
    // loadTop () {
    //   Indicator.open({
    //     text: '加载中...',
    //     spinnerType: 'fading-circle'
    //   })
    //   axios.post('/shishuiyuan/index/mod/gaste/key/pm/del/fd/c/0')
    //     .then(data => {
    //       this.list = data.data
    //       this.pageNum = 1
    //       this.allLoaded = false
    //       this.$refs.loadmore.onTopLoaded()
    //       Indicator.close()
    //     })
    // },
    // loadBottom () {
    //   Indicator.open({
    //     text: '加载中...',
    //     spinnerType: 'fading-circle'
    //   })
    //   axios.post('/shishuiyuan/index/mod/gaste/key/pm/del/fd/c/' + this.pageNum*10)
    //     .then(data => {
    //       console.log(data.data)
    //       if (data.data.length === 0) {
    //         this.allLoaded = true
    //         Toast('已无更多数据')
    //       } else {
    //         this.pageNum++
    //         console.log(this.list)
    //         this.list = [...this.list, ...data.data]
    //       }
    //       console.log(this.list)
    //       this.$refs.loadmore.onBottomLoaded()
    //       Indicator.close()
    //     })
    // }
  },
  created () {
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
    if (this.$route.params.title === 'zyms') { // 中原名师
      axios.post('/shishuiyuan/index/mod/gaste/key/pm/del/fd/c/f')
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    } else if (this.$route.params.title === 'jpkc') { // 精品课程
      axios.post('/shishuiyuan/index/top/sandglass/id/AB/num/uh/p/fist')
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    } else if (this.$route.params.title === 'msld') { // 名师论道
      axios.post('/shishuiyuan/index/top/sandglass/id/gd/num/uh/p/fist')
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    } else if (this.$route.params.title === 'jzpx') { // 精准培训
      axios.post('/shishuiyuan/index/top/sandglass/id/zy/num/uh/p/fist')
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    } else if (this.$route.params.title === 'jxgj') { // 家校共建
      this.flag = false
      this.active = true
      axios.post('/shishuiyuan/index/asked/view/id/gk/num/fd/p/f')
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    } else if (this.$route.params.title === 'drkt') { // 第二课堂
      this.flag = false
      this.active = true
      axios.post('/shishuiyuan/index/asked/view/id/doc/num/fd/p/f')
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    } else if (this.$route.params.title === 'audio') { // 音频资源
      axios.post('/shishuiyuan/index/top/sandglass/id/Vn/num/uh/p/fist')
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    } else if (this.$route.params.title === 'video') { // 视频资源
      axios.post('/shishuiyuan/index/top/sandglass/id/sn/num/uh/p/fist')
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    } else if (this.$route.params.title === 'ynjx') { // 疑难解析
      axios.post('/shishuiyuan/index/top/sandglass/id/ad/num/uh/p/fist')
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    } else if (this.$route.params.title === 'ksjx') { // 课时教学
      axios.post('/shishuiyuan/index/top/sandglass/id/hu/num/uh/p/fist')
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    } else if (this.$route.params.title === 'kjzy') { // 课件资源
      axios.post('/shishuiyuan/index/top/sandglass/id/th/num/uh/p/fist')
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    } else if (this.$route.params.title === 'zxxx') { // 资讯信息
      this.flag = false
      this.active = true
      axios.post('/shishuiyuan/index/asked/view/id/jb/num/fd/p/f')
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    } else if (this.$route.params.title === 'tbkt') { // 同步课堂
      this.flag = false
      this.active = false
      axios.post('/shishuiyuan/index/paper/list/key/fx/num/uh/p/0')
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
  .filter{
    @include rect(100%,rem750(72));
    flex-shrink: 0;
    background: $bg-base;
    position: absolute;
    top:0;
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
  .list {
    margin-top: rem750(72);
    padding: rem750(30) rem750(20) 0 rem750(20);
    @include rect(100%, 100%);
    overflow: scroll;
    box-sizing: border-box;
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
</style>
