<template>
  <div class="content animated fadeInLeft">
    <!-- <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore"> -->
    <div class="box" v-if="flag">
      <p>暂无评论，快去发表你的看法吧！</p>
    </div>
    <div class="list" v-else>
      <li class="animated zoomIn" v-for="(item, index) of list" :key="index">
        <div class="head">
          <img :src ="item.image" alt="#">
          <div class="right">
            <div class="title">
              <h3>{{item.name}}</h3>
              <p>{{item.date}}</p>
            </div>
            <div class="start">
              <div class="comment-star"></div>
            </div>
          </div>
        </div>
        <div class="comment">
          <p>{{item.content}}</p>
        </div>
      </li>
    </div>
    <!-- </mt-loadmore> -->
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
      flag: false,
      headimg: require('@/assets/headimg.png'),
      list: [],
      allLoaded: false
    }
  },
  mounted () {
    console.log(this.$route.params.id,this.$route.params.code)
    axios.post(`${this.GLOBAL.shishuiyuan}/index/discuss/list/id/${this.$route.params.id}/num/fd/key/${this.$route.params.code}/p/0`)
      .then(data => {
        console.log(data.data)
        if (data.data.length === 0) {
          this.flag = true
        } else {
          this.list = data.data
        }
      })
  },
  methods: {
    // loadBottom () {
    //   axios.post(`${this.GLOBAL.shishuiyuan}/index/paper/list/key/fx/num/gk/p/${this.pageNum * 9}`)
    //     .then(data => {
    //       if (data.data.length === 0) {
    //         this.allLoaded = true
    //         Toast('已无更多数据')
    //       } else {
    //         this.pageNum++
    //         this.list = [...this.list, ...data.data]
    //       }
    //       this.$refs.loadmore.onBottomLoaded()
    //     })
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
  .box {
    @include rect(100%, 100%);
    @include _flex(center, center);
    p {
      color: rgb(97, 95, 95);
      font-size: rem750(30)
    }
  }
  .list {
    @include rect(100%, 100%);
    padding: 0 rem750(40);
    box-sizing: border-box;
    li {
      padding-top: rem750(23);
      border-bottom: rem750(2) solid #f8f8f8;
      .head {
        height: rem750(106);
        @include _flex(space-between, center);
        img {
          @include rect(rem750(90), rem750(90));
          border-radius: 50%
        }
        .right {
          width: rem750(570);
          .title {
            @include _flex(space-between, center);
            h3 {
              height: rem750(50);
              line-height: rem750(50);
              font-size: rem750(28);
            }
            p {
              padding-top: rem750(20);
              font-size: rem750(24);
              color: rgb(92, 91, 91);
            }
          }
          .start {
            height: rem750(40);
            .comment-star {
              @include rect(rem750(250), rem750(40));
              background-image: url('../../assets/star.png');
              background-repeat: no-repeat;
              background-position: rem750(-250) 0;
              background-size: cover
            }
          }
        }
      }
      .comment {
        width: 100%;
        box-sizing: border-box;
        padding: 0 rem750(20);
        margin: rem750(10) 0;
        min-height: rem750(80);
        p {
          line-height: rem750(38);
          font-size: rem750(28);
          color: #333;
        }
      }
    }
  }
</style>
