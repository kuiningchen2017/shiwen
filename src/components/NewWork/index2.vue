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
        <li v-for="(item, index) in classlist" :key="index">
          <input type="checkbox" :id="item.MyClass_ID" class="gcs-checkbox" v-model="classValue" :value="(item.MyClass_ID)">
          <label :for="item.MyClass_ID"></label>
          <span>{{item.MyClass_Name}}</span>
        </li>
      </div>
      <div class="radio">
        <li>
          <input type="radio" name="sex" class="gcs-radio" id="班级" v-model="radioValue" value="班级">
          <label for="班级"></label><span>班级</span>
        </li>
        <li>
          <input type="radio" name="sex" class="gcs-radio" id="学生" v-model="radioValue" value="学生">
          <label for="学生"></label><span>学生</span>
        </li>
      </div>
    </div>
    <div class="center">
      <!-- <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore"> -->
        <div class="list" v-show="falg">
          <li v-for="(item, index ) of list" :key="index">
            <div class="checkbox">
              <input type="checkbox" :id="item.User_ID" class="gcs-checkbox" v-model="userValue" :value="(item.User_ID)">
              <label :for="item.User_ID"></label>
            </div>
            <img v-if="item.User_HeadImg!== ''" :src="item.User_HeadImg">
            <img v-else src='@/assets/headimg.png'>
            <h3>{{item.User_Nickname}} <b>{{item.User_Phone}}</b></h3>
            <p>{{item.User_TypeFormat}}</p>
          </li>
        </div>
      <!-- </mt-loadmore> -->
    </div>
    <div class="next">
      <li>
        <p @click="goback">上一步</p>
      </li>
      <li @click="gonext">
        下一步
      </li>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Loadmore, Toast} from 'mint-ui'
import Vue from 'vue'
Vue.use(Loadmore)
export default {
  data () {
    return {
      list: [],
      pageNum: 1,
      allLoaded: false,
      falg: false,
      classValue: [],
      radioValue: '',
      classlist: [],
      userValue: [],
      userlist: []
    }
  },
  methods: {
    // loadBottom () {
    //   axios.post(`${this.GLOBAL.shishuiyuan}/index/top/sandglass/id/AB/num/uh/p/${this.pageNum * 10}`)
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
    // },
    goback () {
      this.$router.go(-1)
    },
    gonext () {
      var set = new Set(this.userlist)
      var arr = [...set]
      var user = ''
      if (this.radioValue === '班级') {
        console.log(true)
        user = arr.join(',')
      } else {
        console.log(false)
        user = this.userValue.join(',')
      }
      console.log(user)
      console.log(sessionStorage.getItem('HomeWorkID'))
      console.log(this.classValue.join(','))
      axios.post(`${this.GLOBAL.shishuiyuan}/api/homework/addwork?token=${localStorage.getItem('token')}&file_list=${sessionStorage.getItem('HomeWorkID')}&class_list=${this.classValue.join(',')}&user_list=${user}`)
        .then(data => {
          console.log(data.data)
          if (data.data.code === 0) {
            this.$router.push('/success')
            sessionStorage.removeItem('HomeWorkID')
          } else {
            Toast(data.data.message)
          }
        })
    }
  },
  watch: {
    radioValue (newVal, oldVal) {
      if (newVal === '学生') {
        this.falg = true
      } else {
        this.falg = false
      }
    },
    classValue: {
      handler (newValue, oldValue) {
        if (newValue !== oldValue) {
          axios.post(`${this.GLOBAL.shishuiyuan}/api/myclass/getmemberlist?token=${localStorage.getItem('token')}&class_id=${this.classValue.join(',')}&user_type=0,5&page=1&rows=50`)
            .then(data => {
              if (data.data.code === 0) {
                this.list = data.data.data.data
                let arr = data.data.data.data
                this.userlist = []
                arr.map((value) => {
                  this.userlist.push(value.User_ID)
                })
              } else {
                this.list = []
                this.userlist = []
                alert(data.data.message)
              }
            })
        }
      },
      deep: true
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/api/myclass/getclasslist?token=${localStorage.getItem('token')}&page=1`)
      .then(data => {
        console.log(data.data)
        this.classlist = data.data.data.data
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content {
  .top {
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
      min-height: rem750(60);
      flex-shrink: 0;
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
        border-radius: 50%;
        border: rem750(2) solid #b0b1b1;
        @include rect(rem750(30), rem750(30));
        display: inline-block;
        text-align: center;
        vertical-align: bottom;
        line-height: rem750(20);
      }
      .gcs-radio:checked+label {
        border: rem750(2) solid $bg-side;
      }
      .gcs-radio:checked+label:after {
        position: relative;
        left: rem750(-2);
        content: "\2022";
        color: $bg-side;
        font-size: rem750(75);
      }
    }
  }
  .center {
    flex-grow: 1;
    overflow: auto;
    border-top: rem750(1) solid #e4e4e4;
    .list {
      @include rect(100%, 100%);
      box-sizing: border-box;
      li {
        @include rect(100%, rem750(130));
        @include _flex(space-between, center);
        padding-right: rem750(44);
        box-sizing: border-box;
        border-bottom: rem750(1) solid #e4e4e4;
        .checkbox {
          padding-left: rem750(20);
          .gcs-checkbox {
            display: none;
          }
          .gcs-checkbox+label {
            border-radius: rem750(5);
            border: rem750(2) solid #b0b1b1;
            @include rect(rem750(25), rem750(25));
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
        img {
          @include rect(rem750(68), rem750(68));
          border-radius: 50%;
        }
        h3 {
          width: rem750(440);
          line-height: rem750(42);
          font-size: rem750(28);
          font-weight: 600;
          b {
          font-size: rem750(24);
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
