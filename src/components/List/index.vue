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
            <h3>{{item.File_Name}}</h3>
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
      pageNum: 1
    }
  },
  methods: {
    godetail (id, code) {
      if (this.$route.params.title === 'jpkc' || this.$route.params.title === 'msld' || this.$route.params.title === 'jzpx' || this.$route.params.title === 'ksjx' || this.$route.params.title === 'ynjx' || this.$route.params.title === 'video') {
        this.$router.push({name: 'videodetail', params: {id: id, code: code}})
      } else if (this.$route.params.title === 'audio') {
        this.$router.push({name: 'audiodetail', params: {id: id, code: code}})
      } else if (this.$route.params.title === 'zyms') {
        this.$router.push({name: 'teacherdetail', params: {id: id, code: code}})
      } else if (this.$route.params.title === 'kssj') {
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
    loadBottom () {
      if (this.$route.params.title === 'zyms') { // 中原名师
        axios.post(`/shishuiyuan/index/mod/gaste/key/pm/del/fd/c/${this.pageNum * 10}`)
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
      } else if (this.$route.params.title === 'jpkc') { // 精品课程
        axios.post(`/shishuiyuan/index/top/sandglass/id/AB/num/uh/p/${this.pageNum * 10}`)
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
      } else if (this.$route.params.title === 'msld') { // 名师论道
        axios.post(`/shishuiyuan/index/top/sandglass/id/gd/num/uh/p/${this.pageNum * 10}`)
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
      } else if (this.$route.params.title === 'jzpx') { // 精准培训
        axios.post(`shishuiyuan/index/top/sandglass/id/zy/num/uh/p/${this.pageNum * 10}`)
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
      } else if (this.$route.params.title === 'jxgj') { // 家校共建
        this.flag = false
        this.active = true
        axios.post(`/shishuiyuan/index/asked/view/id/gk/num/fd/p/${this.pageNum * 10}`)
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
      } else if (this.$route.params.title === 'drkt') { // 第二课堂
        this.flag = false
        this.active = true
        axios.post(`/shishuiyuan/index/asked/view/id/doc/num/fd/p/${this.pageNum * 10}`)
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
      } else if (this.$route.params.title === 'audio') { // 音频资源
        axios.post(`/shishuiyuan/index/top/sandglass/id/Vn/num/uh/p/{this.pageNum * 10}`)
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
      } else if (this.$route.params.title === 'video') { // 视频资源
        axios.post(`/shishuiyuan/index/top/sandglass/id/sn/num/uh/p/{this.pageNum * 10}`)
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
      } else if (this.$route.params.title === 'ynjx') { // 疑难解析
        axios.post(`/shishuiyuan/index/top/sandglass/id/ad/num/uh/p/{this.pageNum * 10}`)
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
      } else if (this.$route.params.title === 'kssj') { // 课时设计
        this.flag = false
        this.active = false
        axios.post(`/shishuiyuan/index/paper/list/key/cz/num/gk/p/{this.pageNum * 9}`)
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
      } else if (this.$route.params.title === 'zxxx') { // 资讯信息
        this.flag = false
        this.active = true
        axios.post(`/shishuiyuan/index/asked/view/id/jb/num/fd/p/{this.pageNum * 10}`)
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
      } else if (this.$route.params.title === 'tbkt') { // 同步课堂
        this.flag = false
        this.active = false
        axios.post(`/shishuiyuan/index/paper/list/key/kc/num/gk/p/{this.pageNum * 9}`)
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
    }
  },
  created () {
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
    } else if (this.$route.params.title === 'kssj') { // 课时设计
      this.flag = false
      this.active = false
      axios.post('/shishuiyuan/index/paper/list/key/cz/num/uh/p/0')
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
      axios.post('/shishuiyuan/index/paper/list/key/kc/num/uh/p/0')
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
  .list {
    margin-top: rem750(72);
    padding: rem750(30) rem750(20) 0 rem750(20);
    @include rect(100%, 100%);
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
