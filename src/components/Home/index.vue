<template>
  <div class="content">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item of banner" :key="item.banner_id" >
        <img :src="item.banner_img_url"/>
      </mt-swipe-item>
    </mt-swipe>
    <div class="navlist">
      <router-link :to="item.path" tag="li" v-for = "(item, index) of navList" :key = "index">
        <img :src="item.imgUrl" alt="#">
        <p>{{ item.name }}</p>
      </router-link>
    </div>
    <div class="teacher">

    </div>
    <div class="lesson">
      
    </div>
    <div class="company">
      <p>&copy2018年石水源教育有限公司</p>
      <p>豫ICP备17001731号-2</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.use(Swipe, SwipeItem)
export default {
  data () {
    return {
      banner: [

      ],
      navList: [
        {
          imgUrl: require('@/assets/icon_03.png'),
          name: '教师学院',
          path: '123'
        },
        {
          imgUrl: require('@/assets/icon_05.png'),
          name: '翻转课堂',
          path: '123'
        },
        {
          imgUrl: require('@/assets/icon_07.png'),
          name: '亲子课堂',
          path: '123'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content{
  background: #f2f2f2;
  .mint-swipe {
    width:100%;
    height: rem750(300);
    background: #00f;
    flex-shrink: 0;
  }
  .navlist {
    display: flex;
    justify-content: space-around;
    flex-shrink: 0;
    width: 100%;
    height: rem750(192);
    align-items: center;
    background: #fff;
    margin-bottom: rem750(16);
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: rem750(80);
        height: rem750(80);
        padding-bottom: rem750(24);
      }
      p {
        font-size: rem750(22);
      }
    }
  }
  .teacher {
    width:100%;
    height:rem750(412);
    background: #fff;
    margin-bottom: rem750(16);
    flex-shrink: 0;
  }
  .lesson {
    width:100%;
    height:rem750(390);
    background: #fff;
    flex-shrink: 0;
  }
  .company {
    width:100%;
    height: rem750(78);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      line-height: rem750(24);
      font-size: rem750(12);
      color: #898989;
    }
  }
}
</style>
