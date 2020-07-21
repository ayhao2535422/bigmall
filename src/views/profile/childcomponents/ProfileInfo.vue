<template>
  <div class="profile-info">
    <div class="info">
        <div class="left-info">
          <div class="img-div"><img src="../../../assets/img/profile/avatar.svg" alt=""></div>
          <div class="info-login">
            <div class="outer">
              <div>登录/注册</div>
              <div class="icon"><i class="icon-lunboxiangyou"></i>暂无绑定手机号</div>
            </div>
          </div>
        </div>
        <div class="right-button">
          <i class="iconfont icon-iconfontjiantou5"></i>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
      return {}
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
.profile-info{
  margin-top: 43px;
  background-color: aquamarine;
}
.info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 10px;
  height: 65px;
  background-color: rgb(230, 109, 133);
}
.left-info{
  display: flex;
}
.img-div img{
  width: 50px;
  height: 50px;
}
.info-login{
  margin-left: 20px;
  display: flex;
  align-items: center;
  color: #ffffff;
}
.outer div{
  padding: 2px;
  font-size: 14px;
}
.right-button{
  color: #ffffff;
}
</style>
