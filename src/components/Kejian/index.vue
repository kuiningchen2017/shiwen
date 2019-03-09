<template>
  <div class="content animated fadeInLeft">
    <div class="top">
      <img src="@/assets/kejian.png" alt="#">
      <li>
        <div v-for=" (item, index) in list" :key="index" @click="go(index)">
          <dt><img :src="item.img" alt="#"></dt>
          <p>{{item.title}}</p>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      design: {},
      PPT: {},
      learncase: {},
      list: [
        {
          img: require('@/assets/img01.png'),
          title: '教学设计'
        },
        {
          img: require('@/assets/img02.png'),
          title: 'PPT(课件)'
        },
        {
          img: require('@/assets/img02.png'),
          title: '学案'
        }
      ]
    }
  },
  methods: {
    go (index) {
      var url = ''
      if (index === 0) {
        if (this.design === 0) {
          Toast('暂无资源')
        } else {
          url = this.design.Attachment_Path
          window.open(url)
        }
      } else if (index === 1) {
        if (this.PPT === 0) {
          Toast('暂无资源')
        } else {
          url = this.PPT.Attachment_Path
          window.open(url)
        }
      } else {
        if (this.learncase === 0) {
          Toast('暂无资源')
        } else {
          url = this.learncase.Attachment_Path
          window.open(url)
        }
      }
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/index/top/adjunct/id/${this.$route.params.id}/key/${this.$route.params.code}`)
      .then(data => {
        this.design = data.data.design
        this.PPT = data.data.PPT
        this.learncase = data.data.learncase
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content {
  .top{
    img {
      @include rect (100%, rem750(303));
    }
    li {
      @include rect (100%, rem750(254));
      padding: 0 rem750(77) 0 rem750(71);
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      div {
        @include rect(rem750(137), 100%);
        dt {
          @include rect(rem750(137), rem750(137));
          margin-top: rem750(30);
          border-radius: 40%;
          background: #f7f7f7;
          @include _flex(center, center);
          img {
            @include rect(rem750(68), rem750(68))
          }
        }
        p {
          line-height: rem750(65);
          font-size: rem750(26);
          color: #565656;
          text-align: center;
        }
      }
    }
  }
}
</style>
