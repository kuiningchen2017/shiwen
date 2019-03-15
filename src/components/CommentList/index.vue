<template>
  <div class="content animated fadeInLeft">
    <div class="box" v-if="flag">
      <p>暂无评论，快去发表你的看法吧！</p>
    </div>
    <div class="center" v-else>
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
      <div class="list">
        <li class="animated zoomIn" v-for="(item, index) of list" :key="index">
          <div class="head">
            <img :src ="item.image" alt="#">
            <div class="right">
              <div class="title">
                <h3>{{item.name}}</h3>
                <p>{{item.date}}</p>
              </div>
              <div class="stars">
                <div class="gray">
                  <img src="@/assets/star-gray.png" v-for="(item, index) of arr" :key="index">
                </div>
                <div class="light">
                  <img src="@/assets/star-true.png" v-for="(item, number) of stars[index]" :key="number">
                </div>
              </div>
            </div>
          </div>
          <div class="comment">
            <p>{{item.content}}</p>
          </div>
        </li>
      </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Loadmore, Toast, Indicator } from 'mint-ui'
import Vue from 'vue'
Vue.use(Loadmore)
export default {
  data () {
    return {
      flag: false,
      headimg: require('@/assets/headimg.png'),
      list: [],
      allLoaded: false,
      pageNum: 1,
      arr: [1, 2, 3, 4, 5],
      stars: []
    }
  },
  created () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    axios.post(`${this.GLOBAL.shishuiyuan}/index/discuss/list/id/${this.$route.params.id}/num/fd/key/${this.$route.params.code}/p/0`)
      .then(data => {
        if (data.data.length === 0) {
          this.flag = true
        } else {
          this.list = data.data
          data.data.map((value) => {
            var res = value.star
            var startNum = res
            var stars = []
            for (var i = 0; i < startNum; i++) {
              stars.push(i)
            }
            this.stars.push(stars)
          })
        }
        Indicator.close()
      })
  },
  methods: {
    loadBottom () {
      axios.post(`${this.GLOBAL.shishuiyuan}/index/discuss/list/id/${this.$route.params.id}/num/fd/key/${this.$route.params.code}/p/${this.pageNum * 10}`)
        .then(data => {
          if (data.data.length === 0) {
            this.allLoaded = true
            Toast('已无更多评论')
          } else {
            this.pageNum++
            this.list = [...this.list, ...data.data]
          }
          this.$refs.loadmore.onBottomLoaded()
        })
    }
  },
  destroyed () {
    Indicator.close()
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
  .box {
    @include rect(100%, rem750(500));
    flex-shrink: 0;
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
          .stars {
            height: rem750(40);
            position: relative;
            @include _flex(flex-start,center);
            img{
              @include rect(rem750(30), rem750(30));
              padding: rem750(5);
            }
            .light, .gray {
              display: flex;
            }
            .light {
              position:absolute;
              top: 0;
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
          color: #000;
        }
      }
    }
  }
</style>
