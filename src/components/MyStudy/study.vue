<template>
  <div class="center animated fadeInLeft">
    <div class="void" v-if="falg">
      <p>暂无内容！</p>
    </div>
    <div class="list" v-else>
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
      falg: false,
      list: []
    }
  },
  methods: {
    godetail (id, code) {
      this.$router.push({name: 'videodetail', params: {id: id, code: code}})
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/api/userlearn/getloglist?token=${localStorage.getItem('token')}&page=1&rows=15&learn_status=0`)
      .then(data => {
        console.log(data.data)
        if (data.data.data.total !== 0) {
          this.list = data.data.data.data
        } else {
          this.falg = true
        }
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
  .list {
    padding: rem750(30) rem750(20) 0 rem750(20);
    @include rect(100%, 100%);
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
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
