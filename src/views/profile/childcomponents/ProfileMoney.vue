<template>
  <div class="profile-money">
    <div class="money">
      <div class="balance">
        <div class="price"><span>0.00</span>元</div>
        <div class="my-balance">我的余额</div>
      </div>
      <div class="discount">
        <div class="count"><span>0</span>个</div>
        <div class="my-disount">我的优惠</div>
      </div>
      <div class="score">
        <div class="score-number"><span>0</span>分</div>
        <div class="my-score">我的积分</div>
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
.money{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 15px;
  text-align: center;
  border-bottom: 20px solid rgb(243, 241, 241);
}
.my-balance{
  padding: 10px 0 10px 0;
}
.my-disount{
  padding: 10px 0 10px 0;
}
.my-score{
  padding: 10px 0 10px 0;
}
.price{
  font-size: 14px;
}
.price span{
  color: red;
  font-size: 17px;
  margin-right: 2px;
}
.count span{
  color: red;
  font-size: 17px;
  margin-right: 2px;
}
.score .score-number{
  color: red;
  font-size: 17px;
  margin-right: 2px;
}
</style>
