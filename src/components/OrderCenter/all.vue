<template>
  <div class="center animated fadeInLeft">
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
    <div class="list">
      <li class="animated zoomIn" v-for="item of list" :key="item.Resource_ID" @click="godetail(item.File_ID, item.File_Code)">
        <img :src="item.Attachment_Path" alt="#">
        <div>
          <h3>{{item.File_Name}}</h3>
          <h4>{{item.File_SubName}}</h4>
          <b><i>￥</i>{{item.File_ID}}</b>
          <p>{{item.File_CreateDate}}</p>
        </div>
        <span>待付款</span>
      </li>
    </div>
    </mt-loadmore>
  </div>
</template>

<script>
import axios from 'axios'
import { Indicator, Loadmore, Toast } from 'mint-ui'
import Vue from 'vue'
Vue.use(Loadmore)
export default {
  data () {
    return {
      list: [],
      allLoaded: false,
      pageNum: 1
    }
  },
  methods: {
    loadBottom () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      axios.post(`${this.GLOBAL.shishuiyuan}/index/top/sandglass/id/AB/num/uh/p/${this.pageNum * 10}`)
        .then(data => {
          console.log(data.data)
          if (data.data.length === 0) {
            this.allLoaded = true
            Toast('已无更多数据')
          } else {
            this.pageNum++
            console.log(this.list)
            this.list = [...this.list, ...data.data]
          }
          console.log(this.list)
          this.$refs.loadmore.onBottomLoaded()
          Indicator.close()
        })
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/index/top/sandglass/id/AB/num/uh/p/fist`)
      .then(data => {
        console.log(data.data)
        this.list = data.data
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.center {
  @include rect(100%, 100%);
  .list {
    @include rect(100%, 100%);
    padding: rem750(20) rem750(20) 0 rem750(20);
    box-sizing: border-box;
    background: #f5f5f5;
    li {
      @include rect(100%, rem750(178));
      box-sizing: border-box;
      padding: rem750(15) rem750(28) rem750(15) rem750(10);
      margin-bottom: rem750(10);
      background: #fff;
      @include _flex(space-between,center);
      div {
        @include rect(rem750(390), rem750(148));
        h3 {
          line-height: rem750(37);
          font-size: rem750(20);
          color: $text-black;
          font-weight: normal;
        }
        h4 {
          line-height: rem750(24);
          font-size: rem750(20);
          color: $text-black;
          font-weight: normal;
        }
        b {
          line-height: rem750(60);
          font-size: rem750(20);
          color: #fe0000;
          display: block;
          i {
            font-size: rem750(16);
            font-style: normal;
          }
        }
        p {
          line-height: rem750(18);
          font-size: rem750(14);
          color: #979797;
        }
      }
      img {
        @include rect(rem750(180),rem750(148));
        padding-right: rem750(25);
      }
      span {
        font-size: rem750(24);
        color: #fe6000;
      }
    }
  }
}
</style>
