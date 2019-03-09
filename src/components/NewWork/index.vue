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
      <div class="ziyuan">
        <h2>选择资源:</h2>
        <li>
          <p></p>
          <span class="iconfont icon-arrow"></span>
        </li>
      </div>
      <div class="choose">

      </div>
    </div>
    <div class="center">
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <div class="list">
          <li class="animated zoomIn" v-for="(item, index) of list" :key="index">
            <img :src="item.Attachment_Path" alt="#" @click="godetail(item.File_ID, item.File_Code)">
            <dl>
              <dd>
                <input type="checkbox" :id="item.File_ID" class="gcs-checkbox" v-model="checkedValue" :value="(item.File_ID, item.File_Code)">
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
      list: [],
      pageNum: 1,
      allLoaded: false,
      falg: false,
      checkedValue: []
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
    }
  },
  computed: {
    num () {
      if (this.checkedValue.length !== 0) {
        sessionStorage.setItem('HomeWorkID', this.checkedValue)
        return this.checkedValue.length
      } else {
        sessionStorage.removeItem('HomeWorkID')
        return 0
      }
    }
  },
  watch: {
    num () {
      if (this.checkedValue.length !== 0) {
        this.falg = true
      } else {
        this.falg = false
      }
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
    .ziyuan {
      @include rect(100%, rem750(102));
      box-sizing: border-box;
      padding-left: rem750(42);
      padding-right: rem750(53);
      @include _flex(space-between, center);
      h2 {
        line-height: rem750(30);
        font-size: rem750(24);
        color: #4d4d4d;
      }
      li {
        @include rect(rem750(528), rem750(44));
        border: rem750(1) solid #ccc;
        border-radius: rem750(10);
        @include _flex(space-around, center);
        p {
          line-height: 40;
          height: rem750(40);
          font-size: rem750(24);
          width: rem750(400);
        }
        span {
          @include rect(rem750(40), rem750(40));
          line-height: rem750(40);
          text-align: center;
          font-size: rem750(30)
        }
      }
    }
    .choose {
      @include rect(100%, rem750(60));
      margin-bottom: rem750(24);
      background: #f2f2f2;
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
              width: 100%;
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
