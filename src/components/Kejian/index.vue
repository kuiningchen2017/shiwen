<template>
  <div class="content animated fadeInLeft">
    <div class="top">
      <img src="@/assets/kejian.png" alt="#">
      <li>
        <div>
          <dt><img src="@/assets/img01.png" alt="#"></dt>
          <p>教学设计</p>
        </div>
        <div>
          <dt><img src="@/assets/img02.png" alt="#"></dt>
          <p>PPT<span>(课件)</span></p>
        </div>
        <div>
          <dt><img src="@/assets/img03.png" alt="#"></dt>
          <p>学案</p>
        </div>
      </li>
    </div>
    <div class="foot">
      <h2>相关资源</h2>
      <li class="frist">
        <div>
          <dt><img src="@/assets/img01.png" alt="#"></dt>
          <p>教学设计</p>
        </div>
        <div>
          <dt><img src="@/assets/img02.png" alt="#"></dt>
          <p>PPT<span>(课件)</span></p>
        </div>
        <div>
          <dt><img src="@/assets/img03.png" alt="#"></dt>
          <p>学案</p>
        </div>
      </li>
      <li>
        <div>
          <dt><img src="@/assets/img01.png" alt="#"></dt>
          <p>教学设计</p>
        </div>
        <div>
          <dt><img src="@/assets/img02.png" alt="#"></dt>
          <p>PPT<span>(课件)</span></p>
        </div>
        <div>
          <dt><img src="@/assets/img03.png" alt="#"></dt>
          <p>学案</p>
        </div>
      </li>
      <li>
        <div>
          <dt><img src="@/assets/img01.png" alt="#"></dt>
          <p>教学设计</p>
        </div>
        <div>
          <dt><img src="@/assets/img02.png" alt="#"></dt>
          <p>PPT<span>(课件)</span></p>
        </div>
        <div>
          <dt><img src="@/assets/img03.png" alt="#"></dt>
          <p>学案</p>
        </div>
      </li>
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

<style lang="scss" scoped>
@import '@/style/base/index.scss';
.content {
  .top{
    img {
      @include rect (100%, rem750(303));
    }
    li {
      @include rect (100%, rem750(254));
      padding: 0 rem750(77) 0 rem750(71);
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      div {
        @include rect(rem750(137), 100%);
        dt {
          @include rect(rem750(137), rem750(137));
          margin-top: rem750(30);
          border-radius: 40%;
          background: #f7f7f7;
          @include _flex(center, center);
          img {
            @include rect(rem750(68), rem750(68))
          }
        }
        p {
          line-height: rem750(65);
          font-size: rem750(26);
          color: #565656;
          text-align: center;
        }
      }
    }
  }
  .foot {
    padding: 0 rem750(40);
    h2 {
      line-height: rem750(60);
      font-size: rem750(26);
    }
    .frist {
      @include rect (100%, rem750(268));
      margin-top: rem750(30);
    }
    li {
      @include rect (100%, rem750(280));
      padding: 0 rem750(37) 0 rem750(31);
      margin-top: rem750(52);
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      border-bottom: rem750(1) solid #e6e1e1;
      div {
        @include rect(rem750(137), 100%);
        dt {
          @include rect(rem750(137), rem750(137));
          border-radius: 40%;
          background: #f7f7f7;
          @include _flex(center, center);
          img {
            @include rect(rem750(68), rem750(68))
          }
        }
        p {
          line-height: rem750(65);
          font-size: rem750(26);
          color: #565656;
          text-align: center;
        }
      }
    }
  }
}
</style>
