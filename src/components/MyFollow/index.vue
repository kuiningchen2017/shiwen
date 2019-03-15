<template>
  <div class="content animated fadeInLeft">
    <div class="void" v-if="falg">
      <p>暂无关注内容！</p>
    </div>
    <ul v-else>
      <li class="animated zoomIn" v-for="item of list" :key="item.Resource_ID" @click="godetail(item.File_ID, item.File_Code, item.File_CategoryDetailID)">
        <img :src="item.Attachment_Path" alt="#">
        <div>
          <h3>{{item.File_Name}}</h3>
          <h3>{{item.File_SubName}}</h3>
          <p>{{item.UserWatch_UpdateDate}}</p>
        </div>
      </li>
    </ul>
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
    godetail (id, code, cid) {
      if (cid === 25) {
        this.$router.push({name: 'teacherdetail', params: {id: id, code: code}})
      } else if (cid === 30) {
        this.$router.push({name: 'audiodetail', params: {id: id, code: code}})
      } else if (cid === 26 || cid === 27 || cid === 32 || cid === 38 || cid === 41) {
        this.$router.push({name: 'videodetail', params: {id: id, code: code}})
      } else {
        console.log(id, code, cid)
        this.$router.push({name: 'booksdetail', params: {title: cid, id: id, code: code}})
      }
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/api/userwatch/getwatchlist?token=${localStorage.getItem('token')}`)
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

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  background: $bg-base;
  .void {
    @include rect(100%, rem750(500));
    flex-shrink: 0;
    @include _flex(center, center);
    p {
      font-size: rem750(50);
      color: $bg-side
    }
  }
  li {
    @include rect(100%, rem750(210));
    box-sizing: border-box;
    padding: 0 rem750(20);
    background: #fff;
    @include _flex(space-between,center);
    margin-bottom: $bottom;
    img {
      @include rect(rem750(218),rem750(142));
      flex-shrink: 0;
    }
    div {
      width: rem750(460);
      h3 {
        font-size: $font-list-title;
        line-height: rem750(44);
        color: $text-black;
        font-weight: normal;
      }
      p {
        line-height: rem750(35);
        font-size: rem750(17);
        color: #979797;
        padding-top: rem750(13);
      }
    }
  }
}
</style>
