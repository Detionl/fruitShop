<template>
  <div class="container">
    <van-nav-bar title="甜甜果铺小店" fixed />
    <div class="top">
      <div class="left">
        <div>欢迎光临!</div>
        <div>￥28起送|同城免费送|由于业务有限</div>
        <div>仅送县城范围</div>
      </div>
      <div class="right">
        <img src="../../assets/img/pineapple.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang="scss" scoped>
.container {
  .top {
    margin-top: 46px;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    background: #10b2b5;
    .left {
      div {
        &:nth-child(1) {
          font-weight: bold;
        }
      }
    }
    .right {
      img {
        width: 100px;
        height: 80px;
      }
    }
  }
}
</style>
