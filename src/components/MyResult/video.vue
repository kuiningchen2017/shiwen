<template>
  <div class="center animated fadeInLeft">
     <div class="list">
      <li class="animated zoomIn" v-for="item of list" :key="item.Resource_ID" @click="godetail(item.File_ID, item.File_Code)">
        <img :src="item.Attachment_Path" alt="#">
        <h3>{{item.File_Name}}</h3>
        <p>{{item.File_SubName}}</p>
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
    axios.post('/shishuiyuan/index/top/sandglass/id/zy/num/uh/p/fist')
      .then(data => {
        console.log(data.data)
        this.list = data.data
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.center {
  margin-top: rem750(90);
  @include rect(100%, 100%);
  border-top: rem750(4) solid #eee;
  .list {
    padding: rem750(30) rem750(20) 0 rem750(20);
    @include rect(100%, 100%);
    background: #f8f8f8;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    li {
      width: rem750(346);
      padding-bottom: rem750(30);
      &:nth-child(odd) {
        padding-right: rem750(9);
      }
      &:nth-child(even) {
        padding-left: rem750(9);
      }
      img {
        @include rect(100%, rem750(210));
        border-radius: rem750(10)
      }
      h3 {
        line-height: rem750(36);
        font-size: $font-list-title1;
        color: $text-black;
        font-weight: normal;
        padding-left: rem750(10);
        padding-top: rem750(9);
        width: rem750(320);
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      p {
        line-height: rem750(36);
        font-size: $font-26;
        color: #595959;
        padding-left: rem750(10);
      }
    }
  }
}
</style>
