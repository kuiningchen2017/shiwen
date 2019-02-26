<template>
  <div class="content animated fadeInLeft">
    <li>
      <span class="iconfont icon-location"></span>
      <p>地区:</p>
      <div class="area">
        <div>
          <p>河南省</p>
          <span class="iconfont icon-arrow"></span>
        </div>
        <div>
          <p>郑州市</p>
          <span class="iconfont icon-arrow"></span>
        </div>
        <div>
          <p>金水区</p>
          <span class="iconfont icon-arrow"></span>
        </div>
        <div>
          <p>南阳路街道</p>
          <span class="iconfont icon-arrow"></span>
        </div>
      </div>
    </li>
    <li>
      <span class="iconfont icon-xuexiao"></span>
      <p>学校:</p>
      <div class="school">
        <div>
          <input type="text" ref="school" value="未设置">
          <span class="iconfont icon-arrow"></span>
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
          <li>
            <input type="checkbox" id="一年级" class="gcs-checkbox">
            <label for="一年级"></label><span>一年级</span>
          </li>
          <li>
            <input type="checkbox" id="二年级" class="gcs-checkbox">
            <label for="二年级"></label><span>二年级</span>
          </li>
          <li>
            <input type="checkbox" id="三年级" class="gcs-checkbox">
            <label for="三年级"></label><span>三年级</span>
          </li>
          <li>
            <input type="checkbox" id="四年级" class="gcs-checkbox">
            <label for="四年级"></label><span>四年级</span>
          </li>
          <li>
            <input type="checkbox" id="五年级" class="gcs-checkbox">
            <label for="五年级"></label><span>五年级</span>
          </li>
          <li>
            <input type="checkbox" id="六年级" class="gcs-checkbox">
            <label for="六年级"></label><span>六年级</span>
          </li>
          <li>
            <input type="checkbox" id="七年级" class="gcs-checkbox">
            <label for="七年级"></label><span>七年级</span>
          </li>
          <li>
            <input type="checkbox" id="八年级" class="gcs-checkbox">
            <label for="八年级"></label><span>八年级</span>
          </li>
          <li>
            <input type="checkbox" id="九年级" class="gcs-checkbox">
            <label for="九年级"></label><span>九年级</span>
          </li>
        </div>
      </div>
    </li>
    <div class="shenfen">
      <li>
        <input type="radio" name="sex" class="gcs-radio" id="教师" />
        <label for="教师"></label><span>教师</span>
      </li>
      <li>
        <input type="radio" name="sex" class="gcs-radio" id="学生" />
        <label for="学生"></label><span>学生</span>
      </li>
      <li>
        <input type="radio" name="sex" class="gcs-radio" id="家长" />
        <label for="家长"></label><span>家长</span>
      </li>
    </div>
    <div class="choose">
      <button>返回</button>
      <button>保存</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

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
        padding: 0 rem750(16) 0 rem750(25);
        @include _flex(space-between, center);
        p {
          color: #676767;
          font-size: $font-30;
        }
        span {
          color: #4f4f4f;
        }
        input {
          color: #676767;
          font-size: $font-30;
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
