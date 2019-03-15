<template>
  <div class="center animated fadeInLeft">
    <div class="void" v-if="falg">
      <p>空空如也~</p>
    </div>
    <ul v-else>
      <li v-for="(item, index ) of list" :key="index">
        <img v-if="item.User_HeadImg!== ''" :src="item.User_HeadImg">
        <img v-else src='@/assets/headimg.png'>
        <div>
          <h3>{{item.User_Nickname}} <b>{{item.User_Phone}}</b></h3>
        </div>
        <p>{{item.HomeWorkUser_Progress}}</p>
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
    axios.post(`${this.GLOBAL.shishuiyuan}/api/homework/getworkprogress?token=${localStorage.getItem('token')}&work_class_id=${this.$route.params.id}`)
      .then(data => {
        console.log(data.data)
        this.list = data.data.data.HomeWorkUserList
        // if (data.data.data.total === 0) {
        //   this.falg = true
        // } else {
        //   this.list = data.data.data.data
        // }
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
      @include rect(100%, rem750(130));
      @include _flex(space-between, center);
      padding-right: rem750(44);
      box-sizing: border-box;
      border-bottom: rem750(1) solid #e4e4e4;
      img {
        @include rect(rem750(68), rem750(68));
        border-radius: 50%;
      }
      div {
        width: rem750(480);
        padding: rem750(25) 0 rem750(25) rem750(20);
        box-sizing: border-box;
        @include _flex(space-around, flex-start, column);
        h3 {
          line-height: rem750(42);
          font-size: rem750(28);
          font-weight: 600;
          b {
          font-size: rem750(24);
          }
        }
      }
      p {
        @include rect(rem750(106), rem750(42));
        line-height: rem750(42);
        text-align: center;
        border: rem750(2) solid #f86d04;
        border-radius: rem750(21);
        color: #f86d04;
        font-size: rem750(25)
      }
    }
  }
}
</style>
