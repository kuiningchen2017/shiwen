<template>
  <div class="content animated fadeInLeftBig">
    <div class="edit">
      <h1>{{this.title}}</h1>
      <span>{{this.date}}</span>
      <div id="article" v-html="this.article"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
export default {
  data () {
    return {
      article: '',
      date: '',
      title: ''
    }
  },
  created () {
    console.log(this.$route)
    let id = this.$route.params.id
    let code = this.$route.params.code
    axios.post(`/shishuiyuan/index/picture/del/id/${id}/key/${code}`)
      .then(data => {
        console.log(data.data)
        this.title = data.data.File_SubName
        this.date = data.data.File_CreateDate
        this.article = data.data.Content_Text
      })
  },
  updated() {

 }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content{
  .edit{
    padding: 0 rem750(20);
    box-sizing: border-box;
    h1, span {
      font-family: "Microsoft YaHei";
    }
    h1 {
      font-size: rem750(40);
      line-height: rem750(70);
      color: $text-black;
      font-weight: 400;
      padding-top: rem750(30)
    }
    span {
      line-height: rem750(40);
      font-size: $font-24;
      color: #ccc; 
    }
    #article /deep/ p {
      font-size: rem750(30)
    }
  }
}
</style>
