<template>
  <div class="content animated fadeInLeft">
    <li>
      <span class="iconfont icon-location"></span>
      <p>地区:</p>
      <div class="area">
        <div>
          <p>{{this.province}}</p>
          <span class="iconfont icon-arrow" @click="getProvince"></span>
          <ul v-show="provinceShow" :class="isOk?classA:classB">
            <li class="province" v-for="(item, index) of provinceList" :key="index" :class="{'bor':clickProvince===index}" @click="changeProvince(index,item.Region_Name,item.Region_ID)">
              {{item.Region_Name}}</li>
          </ul>
        </div>
        <div>
          <p>{{this.city}}</p>
          <span class="iconfont icon-arrow" @click="getCity"></span>
          <ul v-show="cityShow" :class="isOk?classA:classB">
            <li class="city" v-for="(item, index) of cityList" :key="index" :class="{'bor':clickCity===index}" @click="changeCity(index,item.Region_Name,item.Region_ID)">
              {{item.Region_Name}}</li>
          </ul>
        </div>
        <div>
          <p>{{this.area}}</p>
          <span class="iconfont icon-arrow" @click="getArea"></span>
          <ul v-show="areaShow" :class="isOk?classA:classB">
            <li class="areas" v-for="(item, index) of areaList" :key="index" :class="{'bor':clickArea===index}" @click="changeArea(index,item.Region_Name,item.Region_ID)">
              {{item.Region_Name}}</li>
          </ul>
        </div>
        <div>
          <p>{{this.street}}</p>
          <span class="iconfont icon-arrow" @click="getStreet"></span>
          <ul v-show="streetShow" :class="isOk?classA:classB">
            <li class="street" v-for="(item, index) of streetList" :key="index" :class="{'bor':clickStreet===index}" @click="changeStreet(index,item.Region_Name,item.Region_ID)">
              {{item.Region_Name}}</li>
          </ul>
        </div>
      </div>
    </li>
    <li>
      <span class="iconfont icon-xuexiao"></span>
      <p>学校:</p>
      <div class="school">
        <div>
          <input type="text" ref="school" value="未设置">
          <span class="iconfont icon-arrow" @click="getSchool"></span>
          <ul v-show="schoolShow" :class="isOk?classA:classB">
            <li class="schools" v-for="(item, index) of schoolList" :key="index" :class="{'bor':clickSchool===index}" @click="changeSchool(index,item.School_Name,item.School_ID)">
              {{item.School_Name}}</li>
          </ul>
        </div>
      </div>
    </li>
    <li>
      <p>
        *未可选学校请手动输入学校名称
      </p>
    </li>
    <li>
      <span class="iconfont icon-wode"></span>
      <p>年级:</p>
      <div class="grade">
        <div class="box">
          <li v-for="(item, index) of gradeList" :key="index">
            <input type="checkbox" :id="item.CD_ID" class="gcs-checkbox" v-model="checkedValue" :value="(item.CD_ID)">
            <label :for="item.CD_ID"></label><span>{{item.CD_Name}}</span>
          </li>
        </div>
      </div>
    </li>
    <div class="shenfen">
      <li v-for="(item, index) of list" :key='index'>
        <input type="radio" name="sex" class="gcs-radio" :id="item.ID" v-model="radioValue" :value="(item.ID)">
        <label :for="item.ID"></label><span>{{item.name}}</span>
      </li>
    </div>
    <div class="choose">
      <button @click="back">返回</button>
      <button @click="submit">保存</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      list: [
        {
          name: '教师',
          ID: 'three'
        },
        {
          name: '学生',
          ID: 'zero'
        },
        {
          name: '家长',
          ID: 'five'
        }
      ],
      province: '省份',
      provinceShow: false,
      provinceNum: 1,
      provinceID: '',
      clickProvince: '',
      provinceList: [],
      city: '市',
      cityShow: false,
      cityNum: 1,
      cityID: '',
      clickCity: '',
      cityList: [],
      area: '县/区',
      areaShow: false,
      areaNum: 1,
      areaID: '',
      clickArea: '',
      areaList: [],
      street: '乡镇/街道',
      streetShow: false,
      streetNum: 1,
      streetID: '',
      clickStreet: '',
      streetList: [],
      schoolShow: false,
      schoolNum: 1,
      schoolID: '',
      clickSchool: '',
      schoolList: [],
      isOk: false,
      classA: 'animated zoomIn',
      classB: 'animated zoomOut',
      gradeList: '',
      checkedValue: [],
      radioValue: ''
    }
  },
  methods: {
    getProvince () {
      this.cityShow = false
      this.areaShow = false
      this.cityNum = 1
      this.areaNum = 1
      if (this.provinceNum === 1) {
        this.provinceNum = 0
        this.isOk = true
        this.provinceShow = true
      } else {
        this.provinceNum = 1
        this.provinceShow = false
      }
      axios.post(`${this.GLOBAL.shishuiyuan}/api/region/getregionlist?region_id=0`)
        .then(data => {
          console.log(data.data)
          if (data.data.code === 0) {
            this.provinceList = data.data.data
          }
        })
    },
    changeProvince (index, val, id) {
      this.clickProvince = index
      this.provinceShow = false
      this.provinceNum = 1
      this.province = val
      this.provinceID = id
      if (id === 110000000000 || id === 120000000000 || id === 310000000000 || id === 500000000000) {
        this.city = val
      }
    },
    getCity () {
      this.provinceShow = false
      this.areaShow = false
      this.provinceNum = 1
      this.areaNum = 1
      if (this.provinceID === '') {
        return false
      } else if (this.provinceID === 110000000000 || this.provinceID === 120000000000 || this.provinceID === 310000000000 || this.provinceID === 500000000000) {
        return false
      }
      if (this.cityNum === 1) {
        this.cityNum = 0
        this.isOk = true
        this.cityShow = true
      } else {
        this.cityNum = 1
        this.cityShow = false
      }
      axios.post(`${this.GLOBAL.shishuiyuan}/api/region/getregionlist?region_id=${this.provinceID}`)
        .then(data => {
          console.log(data.data)
          if (data.data.code === 0) {
            this.cityList = data.data.data
          }
        })
    },
    changeCity (index, val, id) {
      this.clickCity = index
      this.cityShow = false
      this.cityNum = 1
      this.city = val
      this.cityID = id
    },
    getArea () {
      this.provinceShow = false
      this.cityShow = false
      this.streetShow = false
      this.schoolShow = false
      this.provinceNum = 1
      this.cityNum = 1
      var ID = ''
      if (this.provinceID === 110000000000 || this.provinceID === 120000000000 || this.provinceID === 310000000000 || this.provinceID === 500000000000) {
        ID = this.provinceID
      } else {
        ID = this.cityID
        if (this.cityID === '') {
          return false
        }
      }
      if (this.areaNum === 1) {
        this.areaNum = 0
        this.isOk = true
        this.areaShow = true
      } else {
        this.areaNum = 1
        this.areaShow = false
      }
      axios.post(`${this.GLOBAL.shishuiyuan}/api/region/getregionlist?region_id=${ID}`)
        .then(data => {
          console.log(data.data)
          if (data.data.code === 0) {
            this.areaList = data.data.data
          }
        })
    },
    changeArea (index, val, id) {
      this.clickArea = index
      this.areaShow = false
      this.areaNum = 1
      this.area = val
      this.areaID = id
    },
    getStreet () {
      this.provinceShow = false
      this.cityShow = false
      this.areaShow = false
      this.schoolShow = false
      this.provinceNum = 1
      this.cityNum = 1
      this.areaNum = 1
      if (this.areaID === '') {
        return false
      }
      if (this.streetNum === 1) {
        this.streetNum = 0
        this.isOk = true
        this.streetShow = true
      } else {
        this.streetNum = 1
        this.streetShow = false
      }
      axios.post(`${this.GLOBAL.shishuiyuan}/api/region/getregionlist?region_id=${this.areaID}`)
        .then(data => {
          console.log(data.data)
          if (data.data.code === 0) {
            this.streetList = data.data.data
          }
        })
    },
    changeStreet (index, val, id) {
      this.clickStreet = index
      this.streetShow = false
      this.streetNum = 1
      this.street = val
      this.streetID = id
    },
    getSchool () {
      this.provinceShow = false
      this.cityShow = false
      this.areaShow = false
      this.streetShow = false
      this.provinceNum = 1
      this.cityNum = 1
      this.areaNum = 1
      this.streetNum = 1
      if (this.streetID === '') {
        Toast('请选择地址')
        return false
      }
      if (this.schoolNum === 1) {
        this.schoolNum = 0
        this.isOk = true
        this.schoolShow = true
      } else {
        this.schoolNum = 1
        this.schoolShow = false
      }
      axios.post(`${this.GLOBAL.shishuiyuan}/api/school/getschoollist?province=${this.provinceID}&city=${this.cityID}&area=${this.areaID}&street=${this.streetID}`)
        .then(data => {
          console.log(data.data)
          if (data.data.code === 0) {
            this.schoolList = data.data.data.data
          }
        })
    },
    changeSchool (index, val, id) {
      this.clickSchool = index
      this.schoolShow = false
      this.schoolNum = 1
      this.$refs.school.value = val
      this.schoolID = id
    },
    back () {
      this.$router.go(-1)
    },
    submit () {
      var radioID = ''
      if (this.radioValue === 'zero') {
        radioID = 0
      } else if (this.radioValue === 'three') {
        radioID = 3
      } else {
        radioID = 5
      }
      console.log(this.checkedValue.join(','), radioID, this.provinceID, this.cityID, this.areaID, this.streetID, this.schoolID)
      axios.post(`${this.GLOBAL.shishuiyuan}/api/user/setuserinfo?token=${localStorage.getItem('token')}&type=${radioID}&province=${this.provinceID}&city=${this.cityID}&area=${this.areaID}&street=${this.streetID}&school=${this.schoolID}&class=${this.checkedValue.join(',')}`)
        .then(data => {
          console.log(data.data)
          if (data.data.code === 0) {
            this.$router.go(-1)
          }
        })
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/api/category/getgradelist`)
      .then(data => {
        console.log(data.data)
        this.gradeList = data.data.data
      })
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  @include rect(100%, 100%);
  padding: rem750(23) rem750(48);
  box-sizing: border-box;
  li {
    @include _flex(space-around,center);
    margin-bottom: rem750(54);
    height: rem750(57);
    &:first-child {
      height: rem750(160);
    }
    &:nth-child(2) {
      margin-bottom: 0
    }
    &:nth-child(3) {
      margin-bottom: 0;
      p {
        font-size: rem750(22);
        line-height: rem750(30);
        color: #b1b1b1;
      }
    }
    &:nth-child(4) {
      height: rem750(171);
      margin-bottom: 0;
    }
    span {
      font-size: $font-40;
      color: #000;
    }
    p {
      font-size: $font-30;
      line-height: rem750(57);
    }
    .area, .school {
      @include rect(rem750(517), 100%);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      div {
        border: rem750(1) solid #eaeaea;
        border-radius: rem750(10);
        box-sizing: border-box;
        position: relative;
        @include _flex(space-between, center);
        p {
          color: #676767;
          font-size: $font-30;
          padding-left: rem750(25);
        }
        span {
          color: #4f4f4f;
          padding-right: rem750(16);
        }
        input {
          color: #676767;
          font-size: $font-30;
          padding-left: rem750(25);
        }
        ul {
          position: absolute;
          top: rem750(57);
          width: 100%;
          height:rem750(200);
          overflow: scroll;
          background: #fafafa;
          z-index: 1001;
          .province, .city, .areas, .street, .schools{
            height: rem750(59);
            margin: 0;
            border-bottom: rem750(1) solid #f2f2f2;
          }
          .bor{
            color: $bg-side;
            background: rgb(160, 154, 154);
          }
        }
      }
    }
    .area>div {
      @include rect(rem750(247), rem750(57));
      margin-top: rem750(23);
      p {
        width: rem750(160);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .school>div {
      @include rect(100%, 100%);
    }
    .grade>.box {
      @include rect(rem750(517), rem750(171));
      @include _flex(space-around,center);
      flex-wrap: wrap;
      li {
        width: rem750(130);
        height: rem750(57);
        margin: 0;
        span {
          font-size: rem750(27);
          color: #676767;
        }
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
  }
  .shenfen {
    @include _flex(space-around, center);
    margin-bottom: rem750(30);
    li {
      height: rem750(57);
      width: rem750(120);
      @include _flex(space-around, center);
      margin: 0;
      .gcs-radio {
       display: none;
      }
      .gcs-radio+label {
        border-radius: rem750(5);
        border: rem750(2) solid #b0b1b1;
        @include rect(rem750(20), rem750(20));
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
      span {
        font-size: rem750(27);
        color: #676767;
      }
    }
  }
  .choose {
    @include rect(100%, rem750(76));
    box-sizing: border-box;
    padding: rem750(0) rem750(60);
    @include _flex(space-between,center);
    button {
      @include rect(rem750(242), 100%);
      border-radius: rem750(38);
      line-height: rem750(76);
      font-size: rem750(30);
      text-align: center;
      color: #fff;
      background: #b0b1b1;
      &:last-child {
        background: $bg-side;
      }
    }
  }
}
</style>
