<template>
  <div class="container">
    <van-tabs>
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" required placeholder="请输入用户名" clearable v-model="userName"></van-field>
          <van-field label="密码" required placeholder="请输入密码" clearable v-model="userPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field label="用户名" required placeholder="请输入用户名" clearable></van-field>
          <van-field label="密码" required placeholder="请输入密码" clearable></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginName:'',
      loginPassword:''.
    };
  },
  created() {},
  methods: {},
  components: {}
};
</script>

<style lang="scss" scoped></style>
