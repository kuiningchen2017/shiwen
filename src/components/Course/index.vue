<template>
  <div class="content">
    <div class="choose"></div>
    <div class="list" >
      <li v-for = "item of list" :key = "item.Teacher_ID">
        <img :src="item.Attachment_Path" alt="#">
        <h3>{{item.Teacher_Name}}</h3>
        <p>{{item.Teacher_showTitle}}</p>
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
  mounted () {
    axios.post('/shishuiyuan/index/zymslist/list')
      .then(data => {
        console.log(data.data)
        this.list = data.data
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
  .choose {
    @include rect(100%, rem750(100));
    background: $bg-base;
  }
  .list {
    padding: 0 rem750(20);
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    li {
      width: rem750(346);
      padding-top: rem750(30);
      &:nth-child(odd) {
        padding-right: rem750(9);
      }
      &:nth-child(even) {
        padding-left: rem750(9);
      }
      img {
        @include rect(100%, rem750(260));
        border-radius: rem750(10)
      }
      h3 {
        line-height: rem750(36);
        font-size: $font-26;
        color: $text-black;
        font-weight: normal;
        padding-left: rem750(10);
        padding-top: rem750(9)
      }
      p {
        line-height: rem750(36);
        font-size: $font-26;
        color: #595959;
        padding-left: rem750(10);
      }
    }
  }
</style>
