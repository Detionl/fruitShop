<template>
  <div class="container">
    <van-nav-bar title="果果精选" fixed>
      <van-icon name="search" slot="left" />
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>
    <van-cell is-link class="title" @click="goReport"> <van-icon name="volume-o" /><span>果果快报</span>&nbsp;&nbsp;|&nbsp;&nbsp;活动水果限时2送1 </van-cell>
    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="3000">
        <van-swipe-item class="caroysel-item" v-for="(item, index) in carouselItem" :key="index">
          <img :src="item.imgSrc" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="gray"></div>
    <div class="tuijian">特别推荐top10</div>
    <div class="bottom">
      <van-card price="2.00" desc="描述信息" title="商品标题" tag="热门" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
        <div slot="tags">
          <van-tag plain type="danger">水果</van-tag>
        </div>
        <div slot="footer">
          <van-button size="mini" class="see-btn">查看详情</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselItem: [
        {
          name: "img1",
          imgSrc: "http://image.biaobaiju.com/uploads/20180801/23/1533138614-lAzmJSiKwI.jpg"
        },
        {
          name: "img1",
          imgSrc: "http://image.biaobaiju.com/uploads/20180801/23/1533138614-lAzmJSiKwI.jpg"
        },
        {
          name: "img1",
          imgSrc: "http://image.biaobaiju.com/uploads/20180801/23/1533138614-lAzmJSiKwI.jpg"
        },
        {
          name: "img1",
          imgSrc: "http://image.biaobaiju.com/uploads/20180801/23/1533138614-lAzmJSiKwI.jpg"
        }
      ]
    };
  },
  created() {},
  methods: {
    //跳转到公告页面
    goReport() {
      console.log("点击跳转时间");
      this.$router.push({
        name: "Report"
      });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.container /deep/ {
  .title {
    margin-top: 46px;
    display: flex;
    align-items: center;
    background: #01aeb5;
    .van-icon-arrow {
      color: #000;
    }
  }
  .carousel {
    /deep/ .van-swipe {
      height: 1.8rem;
      width: 100wh;
      .van-swipe__indicator {
        background: #01aeb5;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .gray {
    width: 100%;
    height: 6px;
    background: #ccc;
  }
  .tuijian {
    width: 100%;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.2rem;
    font-weight: bold;
    color: #01aeb5;
    border-bottom: 2px solid #ccc;
  }
  .bottom {
    .van-card__price {
      color: orangered;
      font-weight: bold;
      font-size: 16px;
    }
    .van-card__footer {
      margin-top: -28px;
    }
    .see-btn {
      color: white;
      background: red;
      border-radius: 6px;
      height: 0.25rem;
      width: 0.6rem;
    }
  }
}
</style>
