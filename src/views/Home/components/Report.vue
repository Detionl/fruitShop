<template>
  <div class="container">
    <van-nav-bar title="公告详情" left-text="返回" left-arrow @click-left="onClickLeft" fixed />
    <div class="mid">
      <div>活动水果限时买2送1</div>
      <div>尊敬的顾客，您好！</div>
      <div>本店试营业期间，部分商品买2送1</div>
      <div>请选择对应的‘2赠1’规格，即可享受买3件享受2件价格</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$toast("返回");
      history.go(-1);
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.container {
  .mid {
    margin-top: 46px;
    div {
      &:nth-child(1) {
        color: orangered;
        font-size: 0.18rem;
      }
    }
  }
}
</style>
