<template>
  <div class="content animated fadeInLeft">
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
      num: '',
      gradeID: 0,
      subID: 0,
      pressID: 0
    }
  },
  methods: {
    function () {
      if (this.$route.params.title === '023' || this.$route.params.title === '926' || this.$route.params.title === '014' || this.$route.params.title === '235' || this.$route.params.title === '526' || this.$route.params.title === '057') {
        this.page = this.pageNum * 10
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
          this.id = 'sn'
        } else if (this.$route.params.title === '057') {
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
        this.porp = 'mod'
        this.model = 'gaste'
        this.word = 'id'
        this.num = 'fd'
        this.id = 'pm'
      }
    },
    getAll () {
      this.$options.methods.function.bind(this)()
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
      } else if (this.$route.params.title === '203' || this.$route.params.title === 'tbkt' || this.$route.params.title === '365') {
        this.$router.push({name: 'booksdetail', params: {title: this.$route.params.title, id: id, code: code}})
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
    this.getAll()
    this.$bus.on('gradeID', (data) => {
      this.gradeID = data
      console.log(data)
      axios.post(`${this.GLOBAL.shishuiyuan}/index/${this.porp}/${this.model}/${this.word}/${this.id}/num/${this.num}/p/0/class/${data}/sub/${this.subID}/press/${this.pressID}`)
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    })
    this.$bus.on('subID', (data) => {
      this.subID = data
      axios.post(`${this.GLOBAL.shishuiyuan}/index/${this.porp}/${this.model}/${this.word}/${this.id}/num/${this.num}/p/0/class/${this.gradeID}/sub/${data}/press/${this.pressID}`)
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    })
    this.$bus.on('pressID', (data) => {
      this.pressID = data
      axios.post(`${this.GLOBAL.shishuiyuan}/index/${this.porp}/${this.model}/${this.word}/${this.id}/num/${this.num}/p/0/class/${this.gradeID}/sub/${this.subID}/press/${data}`)
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    })
    this.$bus.on('ageID', (data) => {
      axios.post(`${this.GLOBAL.shishuiyuan}/index/${this.porp}/${this.model}/${this.word}/${this.id}/num/${this.num}/p/0/class/0/sub/0/press/0/age/${data}`)
        .then(data => {
          console.log(data.data)
          this.list = data.data
        })
    })
    this.$bus.on('all', (data) => {
      this.getAll()
    })
  },
  beforeDestroy () {
    this.$bus.off('gradeID', 'subID', 'pressID', 'ageID', 'all')
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
