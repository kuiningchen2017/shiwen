<template>
  <div class="content animated fadeInLeft">
    <div class="list">
      <li v-for="(item, index) of list" :key="index">
        <input type="checkbox" :id="item.CD_ID" class="gcs-checkbox" v-model="checkedValue" :value="(item.CD_ID)">
        <label :for="item.CD_ID"></label><span>{{item.CD_Name}}</span>
      </li>
    </div>
    <button @click="submit">保存</button>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      list: [],
      checkedValue: []
    }
  },
  methods: {
    submit () {
      console.log(this.checkedValue)
      axios.post(`${this.GLOBAL.shishuiyuan}/api/user/setuserinfo?token=${localStorage.getItem('token')}&subject=${this.checkedValue.join(',')}`)
        .then(data => {
          console.log(data.data)
          Toast(data.data.message)
          if (data.data.code === 0) {
            this.$router.go(-1)
          }
        })
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/api/category/getsubjectlist`)
      .then(data => {
        this.list = data.data.data
      })
    axios.post(`${this.GLOBAL.shishuiyuan}/api/user/getuserinfo?token=${localStorage.getItem('token')}`)
      .then(data => {
        console.log(data.data)
        let obj = data.data.data
        let arr = obj.User_FavoriteSubject
        if (arr !== '') {
          this.checkedValue = arr.split(',')
        } else {
          return false
        }
      })
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  .list {
    width: 100%;
    padding: rem750(53) rem750(85) 0 rem750(85);
    box-sizing: border-box;
    border-bottom: rem750(1) solid #eaeaea;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      @include rect(rem750(100), rem750(68));
      margin-bottom: rem750(40);
      @include _flex(space-around, center)
    }
    .gcs-checkbox {
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
  button {
    @include rect(rem750(580), rem750(76));
    margin: rem750(53) rem750(85) 0 rem750(85);
    border-radius: rem750(38);
    background: $bg-side;
    line-height: rem750(76);
    color: #fff;
    font-size: rem750(30)
  }
}
</style>
