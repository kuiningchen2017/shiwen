<template>
  <div class="content animated fadeInLeft">
    <div class="choose"></div>
    <div class="list" >
      <li class="animated zoomIn" v-for="item of list" :key="item.Resource_ID" @click="godetail(item.File_ID, item.File_Code)">
        <img :src = 'item.Attachment_Path' alt="#">
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
    axios.post('/shishuiyuan/index/paper/list/key/fx/num/uh/p/0')
      .then(data => {
        console.log(data.data)
        this.list = data.data
      })
  },
  methods: {
    godetail (id, code) {
      console.log(id, code)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
  .choose {
    @include rect(100%, rem750(72));
    background: $bg-base;
    position: absolute;
    top:0;
    z-index: 1001;
  }
  .list {
    width: 100%;
    margin-top: rem750(72);
    padding: 0 rem750(25);
    overflow: scroll;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    li {
      width: rem750(222);
      padding-top: rem750(30);
      padding-right: rem750(17);
      &:nth-child(3n) {
        padding-right: 0;
      }
      img {
        @include rect(100%, rem750(278));
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
