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
      <div class="fenzu">
        <li>
          <input type="checkbox" id="一年级" class="gcs-checkbox">
          <label for="一年级"></label><span>一年级</span>
        </li>
        <li>
          <input type="checkbox" id="一年级1" class="gcs-checkbox">
          <label for="一年级1"></label><span>一年级1</span>
        </li>
        <li>
          <input type="checkbox" id="一年级2" class="gcs-checkbox">
          <label for="一年级2"></label><span>一年级2</span>
        </li>
        <li>
          <input type="checkbox" id="一年级3" class="gcs-checkbox">
          <label for="一年级3"></label><span>一年级3</span>
        </li>
        <li>
          <input type="checkbox" id="一年级4" class="gcs-checkbox">
          <label for="一年级4"></label><span>一年级4</span>
        </li>
        <li>
          <input type="checkbox" id="一年级5" class="gcs-checkbox">
          <label for="一年级5"></label><span>一年级5</span>
        </li>
        <li>
          <input type="checkbox" id="一年级6" class="gcs-checkbox">
          <label for="一年级6"></label><span>一年级6</span>
        </li>
        <li>
          <input type="checkbox" id="一年级7" class="gcs-checkbox">
          <label for="一年级7"></label><span>一年级7</span>
        </li>
        <li>
          <input type="checkbox" id="一年级8" class="gcs-checkbox">
          <label for="一年级8"></label><span>一年级8</span>
        </li>
      </div>
      <div class="radio">
        <li>
          <input type="radio" name="sex" class="gcs-radio" id="班级" />
          <label for="班级"></label><span>班级</span>
        </li>
        <li>
          <input type="radio" name="sex" class="gcs-radio" id="学生" />
          <label for="学生"></label><span>学生</span>
        </li>
      </div>
    </div>
    <div class="center">
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <div class="list">
          <li class="animated zoomIn" v-for="item of list" :key="item.Resource_ID">
            <img :src="item.Attachment_Path" alt="#" @click="godetail(item.File_ID, item.File_Code)">
            <h3>{{item.File_Name}}</h3>
            <p>{{item.File_SubName}}</p>
          </li>
        </div>
      </mt-loadmore>
    </div>
    <div class="next">
      <li>
        <p @click="goback">上一步</p>
        <!-- <span v-if="flag">{{num}}</span> -->
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
      allLoaded: false
      // num: 0,
      // flag: false
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
    goback () {
      this.$router.go(-1)
    },
    gonext () {
      console.log(sessionStorage.getItem('HomeWorkID'))
      this.$router.push('/success')
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/index/top/sandglass/id/AB/num/uh/p/fist`)
      .then(data => {
        console.log(data.data)
        this.list = data.data
      })
  },
  watch: {
    num (oldval, newval) {
      if (newval !== 0) {
        this.flag = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content {
  .top {
    // @include rect(100%, rem750(394));
    flex-shrink: 0;
    .jindu {
      @include rect(100%, rem750(114));
      border-bottom: rem750(6) solid #f5f5f5;
      .num {
        padding: rem750(23) rem750(93) 0 rem750(89);
        @include rect(100%, rem750(51));
        box-sizing: border-box;
        @include _flex(space-between, center);
        p {
          @include rect(rem750(28), rem750(28));
          line-height: rem750(28);
          text-align: center;
          border-radius: 50%;
          color: #fff;
          background: $bg-side;
          &:last-of-type {
            background: #e9ebf4;
          }
        }
        b {
          @include rect(rem750(121), rem750(2));
          background: $bg-side;
          &:last-of-type {
            background: #e9ebf4;
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
    .fenzu {
      padding: rem750(40) rem750(64) 0 rem750(64);
      width: 100%;
      height: rem750(240);
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        width: rem750(164);
        height: rem750(26);
        padding-right: rem750(65);
        margin-bottom: rem750(34);
        display: flex;
        justify-content: flex-start;
        &:nth-child(3n) {
          padding: 0;
        }
        span {
          width: rem750(126);
          display: inline-block;
          line-height: rem750(26);
          font-size: rem750(24);
          padding-left: rem750(12);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .gcs-checkbox {
        display: none;
      }
      .gcs-checkbox+label {
        border-radius: rem750(5);
        border: rem750(2) solid #b0b1b1;
        @include rect(rem750(22), rem750(22));
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
    .radio {
      padding: 0 rem750(250);
      @include rect(rem750(250), rem750(40));
      @include _flex(space-between, center);
      margin-bottom: rem750(24);
      li {
        span {
          padding-left: rem750(10);
          display: inline-block;
          line-height: rem750(26);
          font-size: rem750(24);
        }
      }
      .gcs-radio {
        display: none;
      }
      .gcs-radio+label {
        border-radius: rem750(5);
        border: rem750(2) solid #b0b1b1;
        @include rect(rem750(22), rem750(22));
        display: inline-block;
        text-align: center;
        vertical-align: bottom;
        line-height: rem750(20);
      }
      .gcs-radio:checked+label {
        background: $bg-side;
        border: rem750(2) solid $bg-side;
      }
      .gcs-radio:checked+label:after {
        content: "\2714";
        color: white;
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
  }
  .next {
    @include rect(100%, rem750(162));
    padding: 0 rem750(200);
    flex-shrink: 0;
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
        // span {
        //   position: absolute;
        //   top: rem750(10);
        //   right: rem750(20);
        //   @include rect(rem750(25), rem750(25));
        //   color: #fff;
        //   font-size: rem750(18);
        //   line-height: rem750(25);
        //   text-align: center;
        //   background: #f85f13;
        //   border-radius: 50%
        // }
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
