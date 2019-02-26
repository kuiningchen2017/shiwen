<template>
  <div class="center animated fadeInLeft">
    <ul>
      <li v-for="(item, index ) of list" :key="index">
        <img :src="item.img" alt="#">
        <div>
          <h3>{{item.name}} <b>{{item.tel}}</b></h3>
          <span>{{item.time}}</span>
        </div>
        <p>{{item.status}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          img: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg',
          name: '肖涵哲',
          tel: '158****7982',
          time: '2019-01-28 13:26',
          status: '学生'
        },
        {
          img: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg',
          name: '王烁',
          tel: '158****7982',
          time: '2019-01-28 13:26',
          status: '学生'
        },
        {
          img: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg',
          name: '张鹏',
          tel: '158****7982',
          time: '2019-01-28 13:26',
          status: '学生'
        },
        {
          img: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg',
          name: '李磊',
          tel: '158****7982',
          time: '2019-01-28 13:26',
          status: '学生'
        },
        {
          img: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg',
          name: '肖涵哲',
          tel: '158****7982',
          time: '2019-01-28 13:26',
          status: '学生'
        },
        {
          img: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg',
          name: '王烁',
          tel: '158****7982',
          time: '2019-01-28 13:26',
          status: '学生'
        },
        {
          img: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg',
          name: '张鹏',
          tel: '158****7982',
          time: '2019-01-28 13:26',
          status: '学生'
        },
        {
          img: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg',
          name: '李磊',
          tel: '158****7982',
          time: '2019-01-28 13:26',
          status: '学生'
        },
        {
          img: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg',
          name: '肖涵哲',
          tel: '158****7982',
          time: '2019-01-28 13:26',
          status: '学生'
        },
        {
          img: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg',
          name: '王烁',
          tel: '158****7982',
          time: '2019-01-28 13:26',
          status: '学生'
        },
        {
          img: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg',
          name: '张鹏',
          tel: '158****7982',
          time: '2019-01-28 13:26',
          status: '学生'
        },
        {
          img: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg',
          name: '李磊',
          tel: '158****7982',
          time: '2019-01-28 13:26',
          status: '学生'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.center {
  margin-top: rem750(90);
  @include rect(100%, 100%);
  border-top: rem750(4) solid #f0f0f0;
  ul {
    @include rect(100%, 100%);
    padding-left: rem750(27);
    box-sizing: border-box;
    li {
      @include rect(100%, rem750(130));
      @include _flex(space-between, center);
      padding-right: rem750(44);
      box-sizing: border-box;
      border-bottom: rem750(1) solid #e4e4e4;
      img {
        @include rect(rem750(68), rem750(68));
        border-radius: 50%;
      }
      div {
        width: rem750(480);
        padding: rem750(25) 0 rem750(25) rem750(20);
        h3 {
          line-height: rem750(42);
          font-size: rem750(28);
          font-weight: 600;
          b {
          font-size: rem750(24);
          }
        }
        span {
          line-height: rem750(30);
          color: #9d9d9d;
          font-size: rem750(22)
        }
      }
      p {
        @include rect(rem750(106), rem750(42));
        line-height: rem750(42);
        text-align: center;
        border: rem750(2) solid #f86d04;
        border-radius: rem750(21);
        color: #f86d04;
        font-size: rem750(25)
      }
    }
  }
}
</style>
