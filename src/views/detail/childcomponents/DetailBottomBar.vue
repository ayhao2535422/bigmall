<template>
  <div class="buttom-bar">
    <div class="left">
      <div></div>
      <div class="service">
        <i class="icon-service"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="icon-shop"></i>
        <span>店铺</span>
      </div>
      <div class="select">
        <i class="icon-select"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
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
  methods: {
    addToCart() {
      this.$emit('addToCart')
    },
  }
}
</script>

<style scoped>
.buttom-bar{
  position: fixed;
  z-index: 10;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: 49px;
  display: flex;
  text-align: center;
}
.buttom-bar .left{
  display: flex;
  justify-content: space-between;
  width: 50%;
  font-size: 14px;
  margin-right: 25px;
}
.left .service .icon-service{
  background: url('../../../assets/img/detail/detail_bottom.png') 0 0/100%;
  background-position: 27px -64px;
  display: block;
  width: 27px;
  height: 28px;
  margin-bottom: 5px;
  
}
.left .shop .icon-shop{
  background: url('../../../assets/img/detail/detail_bottom.png') 0 0/98%;
  background-position: 0px -122px;
  display: block;
  width: 28px;
  height: 28px;
  margin-bottom: 5px;
}
.left .select .icon-select{
  background: url('../../../assets/img/detail/detail_bottom.png') 0 0/100%;
  background-position: 0px -197px;
  display: block;
  width: 29px;
  height: 28px;
  margin-bottom: 5px;
}
.buttom-bar .right{
  display: flex;
  width: 50%;
}
.cart{
  background-color: yellow;
  text-align: center;
  line-height: 49px;
  font-size: 14px;
  flex: 1;
}
.buy{
  background-color: pink;
  text-align: center;
  line-height: 49px;
  font-size: 14px;

  flex: 1;
}
</style>
