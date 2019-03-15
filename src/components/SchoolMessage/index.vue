<template>
  <div class="content animated fadeInLeft">
    <div class="top" @click="myshool">
      <img src="@/assets/school.png">
      <h1>我的学校</h1>
      <span></span>
    </div>
    <div class="list">
      <li>
        <span class="iconfont icon-location"></span>
        <p>地区：{{this.area}}</p>
      </li>
      <li>
        <span class="iconfont icon-xuexiao"></span>
        <p>学校：{{this.school}}</p>
      </li>
      <li>
        <span class="iconfont icon-wode"></span>
        <p>年级：{{this.class}}</p>
      </li>
    </div>
    <div class="guanzhu" @click="mysubject">
      <img src="@/assets/guanzhu.png">
      <h1>关注学科</h1>
      <span></span>
    </div>
    <div class="kemu">
      <li class="mark">
        <span class="iconfont icon-kemu"></span>
        <p v-for="(item, index) of list" :key="index">{{item}}</p>
      </li>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: [],
      area: '',
      class: '',
      school: ''
    }
  },
  methods: {
    myshool () {
      this.$router.push('/schoolset')
    },
    mysubject () {
      this.$router.push('/guanzhuxueke')
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/api/user/getuserinfo?token=${localStorage.getItem('token')}`)
      .then(data => {
        console.log(data.data)
        let obj = data.data.data
        this.list = obj.User_FavoriteSubjectFormat
        if (obj.User_SchoolID !== 0) {
          this.school = obj.User_SchoolIDFormat
        } else {
          this.school = '未设置'
        }
        if (obj.User_ClassID !== '') {
          let res = obj.User_ClassIDFormat
          this.class = res.join(' ')
        } else {
          this.class = '未设置'
        }
        if (obj.User_Province !== 0 || obj.User_City !== 0 || obj.User_Area !== 0 || obj.User_Street !== 0) {
          this.area = `${obj.User_ProvinceFormat}-${obj.User_CityFormat}-${obj.User_AreaFormat}-${obj.User_StreetFormat}`
        } else {
          this.area = '未设置'
        }
      })
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  background: #efefef;
  .top, .guanzhu {
    width: 100%;
    box-sizing: border-box;
    height: rem750(160);
    padding: rem750(32);
    background: #fff;
    margin-bottom: rem750(12);
    @include _flex(space-between,center);
      img {
        @include rect(rem750(96), rem750(96));
      }
      h1 {
        width: rem750(540);
        line-height: rem750(50);
        font-size: $font-30;
      }
      span {
        width: 0;
        height: 0;
        border-width: rem750(12) 0 rem750(12) rem750(12);
        border-style: solid;
        border-color: transparent transparent transparent #232323;
      }
  }
  .list, .kemu{
    width:100%;
    background: #fff;
    margin-bottom: rem750(12);
    li {
      padding-left: rem750(48);
      height: rem750(94);
      @include _flex(flex-start,center);
      border-bottom: rem750(1) solid #efefef;
      span {
        font-size: $font-40;
        color: #6b6b6b;
      }
      p {
        padding-left: rem750(25);
        height: 100%;
        line-height: rem750(94);
        font-size: $font-30;
        width: rem750(637);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .mark {
      p {
        width: rem750(60);
      }
    }
  }
}
</style>
