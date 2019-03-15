<template>
  <div class="center animated fadeInLeft">
    <div class="void" v-if="falg">
      <p>空空如也~</p>
    </div>
    <ul v-else>
      <li v-for="(item, index ) of list" :key="index">
        <img :src="item.User_HeadImg">
        <div>
          <h3>{{item.User_Nickname}}</h3>
          <span>已完成：<b>5</b>/20</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      falg: false,
      list: []
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/api/user/getinvitelist?token=${localStorage.getItem('token')}&page=1`)
      .then(data => {
        console.log(data.data)
        if (data.data.data.total === 0) {
          this.falg = true
        } else {
          this.list = data.data.data.data
        }
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.center {
  @include rect(100%, 100%);
  border-top: rem750(4) solid #f0f0f0;
  .void {
    @include rect(100%, rem750(500));
    flex-shrink: 0;
    @include _flex(center, center);
    p {
      font-size: rem750(50);
      color: $bg-side
    }
  }
  ul {
    @include rect(100%, 100%);
    padding-left: rem750(27);
    box-sizing: border-box;
    li {
      @include rect(100%, rem750(214));
      @include _flex(space-between, center);
      padding-right: rem750(44);
      box-sizing: border-box;
      border-bottom: rem750(1) solid #e4e4e4;
      img {
        @include rect(rem750(250), rem750(150));
        border-radius: rem750(5);
      }
      div {
        @include rect(rem750(480), rem750(150));
        padding: rem750(25) 0 rem750(25) rem750(20);
        box-sizing: border-box;
        @include _flex(space-around, flex-start, column);
        h3 {
          line-height: rem750(42);
          font-size: rem750(28);
          font-weight: 600;
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
