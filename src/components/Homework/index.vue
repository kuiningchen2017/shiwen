<template>
  <div class="content animated fadeInLeft">
    <div class="list">
      <li @click="godetail(item.MyClass_CreateUserID)" v-for="(item, index) in list" :key="index">
        <img src="@/assets/pic01.png" alt="#">
        <div>
          <h3>{{item.MyClass_Name}}</h3>
          <p>布置时间：{{item. MyClass_CreateDate}}</p>
          <!-- <span>已完成：<b>5</b>/20</span> -->
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    godetail (id) {
      console.log()
      this.$router.push({name: 'homeworklist', params: {id: id}})
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/api/myclass/getclasslist?token=${localStorage.getItem('token')}&page=1&rows=15`)
      .then(data => {
        console.log(data.data)
        this.list = data.data.data.data
      })
  },
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  .list {
    @include rect(100%, rem750(150));
    padding-left: rem750(39);
    box-sizing: border-box;
    li {
      @include _flex(flex-start, center);
      @include rect(100%, 100%);
      border-bottom: rem750(12) solid #f5f5f5;
      img {
        @include rect(rem750(90), rem750(90));
      }
      div {
        @include rect(rem750(580), rem750(80));
        padding-left:rem750(20);
        box-sizing: border-box;
        @include _flex(space-around, flex-start, column);
        h3 {
          line-height: rem750(42);
          font-size: rem750(28);
          font-weight: 600;
        }
        p {
          font-size: rem750(24);
          color: #b2b2b2;
        }
        span {
          font-size: rem750(24);
          color: #b2b2b2;
          b {
            color: #fe5400;
          }
        }
      }
    }
  }
}
</style>
