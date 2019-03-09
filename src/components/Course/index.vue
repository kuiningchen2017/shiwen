<template>
  <div class="content animated fadeInLeft">
    <div class="center">
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
      <div class="list" >
        <li class="animated zoomIn" v-for="item of list" :key="item.Resource_ID" @click="godetail(item.File_ID, item.File_Code)">
          <img :src = 'item.Attachment_Path' alt="#">
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
      list: [],
      allLoaded: false,
      pageNum: 1,
      gradeID: 0,
      subID: 0,
      pressID: 0
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/index/paper/list/key/fx/num/gk/p/0`)
      .then(data => {
        this.list = data.data
      })
    this.$bus.on('gradeID', (data) => {
      this.gradeID = data
      axios.post(`${this.GLOBAL.shishuiyuan}/index/paper/list/key/fx/num/gk/p/0/class/${data}/sub/${this.subID}/press/${this.pressID}`)
        .then(data => {
          this.list = data.data
        })
    })
    this.$bus.on('subID', (data) => {
      this.pressID = data
      axios.post(`${this.GLOBAL.shishuiyuan}/index/paper/list/key/fx/num/gk/p/0/class/${this.gradeID}/sub/${data}/press/${this.pressID}`)
        .then(data => {
          this.list = data.data
        })
    })
    this.$bus.on('pressID', (data) => {
      this.pressID = data
      axios.post(`${this.GLOBAL.shishuiyuan}/index/paper/list/key/fx/num/gk/p/0/class/${this.gradeID}/sub/${this.subID}/press/${data}`)
        .then(data => {
          this.list = data.data
        })
    })
    this.$bus.on('all', (data) => {
      axios.post(`${this.GLOBAL.shishuiyuan}/index/paper/list/key/fx/num/gk/p/0`)
        .then(data => {
          this.list = data.data
        })
    })
  },
  methods: {
    loadBottom () {
      axios.post(`${this.GLOBAL.shishuiyuan}/index/paper/list/key/fx/num/gk/p/${this.pageNum * 9}`)
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
      this.$router.push({name: 'booksdetail', params: {title: this.$route.path, id: id, code: code}})
    }
  },
  beforeDestroy () {
    this.$bus.off('gradeID', 'subID', 'pressID', 'all')
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.center {
  @include rect(100%, 100%);
  .list {
    width: 100%;
    padding: 0 rem750(25);
    box-sizing: border-box;
    margin-top: rem750(72);
    overflow: scroll;
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
</style>
