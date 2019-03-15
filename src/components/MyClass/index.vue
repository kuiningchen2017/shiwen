<template>
  <div class="content animated fadeInLeft">
    <div class="void" v-if="falg">
      <p>还没有创建班级，点击添加新班级创建吧！</p>
    </div>
    <ul v-else>
      <li @click="goclass(item.MyClass_ID)" v-for="(item, index) of list" :key="index">
        <img src="@/assets/pic01.png" alt="#">
        <p>{{item.MyClass_Name}}</p>
        <span></span>
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
    goclass (id) {
      console.log(id)
      this.$router.push({name: 'classmessage', params: {enter: this.$route.params.enter, id: id}})
    }
  },
  mounted () {
    axios.post(`${this.GLOBAL.shishuiyuan}/api/myclass/getclasslist?token=${localStorage.getItem('token')}&page=1`)
      .then(data => {
        console.log(data.data)
        if (data.data.data.total === 0) {
          this.falg = true
        } else {
          this.list = data.data.data.data
        }
      })
  }
}
</script>

<style lang='scss' scoped>
@import '@/style/base/index.scss';
.content {
  .void {
    @include rect(100%, rem750(500));
    flex-shrink: 0;
    @include _flex(center, center);
    p {
      font-size: rem750(50);
      color: $bg-side
    }
  }
  ul {
    li {
      padding: 0 rem750(34) 0 rem750(39);
      box-sizing: border-box;
      border-bottom: rem750(10) solid #f5f5f5;
      height: rem750(127);
      @include _flex(space-between, center);
      img {
        @include rect(rem750(80), rem750(80))
      }
      p {
        line-height: rem750(30);
        font-size: rem750(26);
        width: rem750(540);
      }
      span {
        width: 0;
        height: 0;
        border-width: rem750(12) 0 rem750(12) rem750(12);
        border-style: solid;
        border-color: transparent transparent transparent #232323;
      }
    }
  }
}
</style>
