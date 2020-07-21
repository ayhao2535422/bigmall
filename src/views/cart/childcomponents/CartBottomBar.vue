<template>
  <div class="bottom-bar">
    <div class="checkedAll">
      <div class="checked" @click="checkedClick" :class="{active: isSelectAll}"></div>
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计:￥{{totalPrice}}</span>
    </div>
    <div @click="tocaculateClick" class="tocaculate">去结算({{tocaculateCount}})</div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'

export default {
  name: "",
  data() {
      return {}
  },
  components: {},
  computed: {
    ...mapGetters(['cartList', 'cartLength']),
    totalPrice() {
      return this.cartList.filter(item => {
        return item.checked
      }).reduce((old, n) => {
        return n.price * n.count + old
      }, 0).toFixed(2)
    },
    tocaculateCount() {
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if(this.cartList.length === 0) return false
      return !this.cartList.filter(item => item.checked === false).length
    }
  },
  methods: {
    checkedClick() {
      if(this.cartList.filter(item => !item.checked).length === 0) {
        for(let i = 0; i < this.cartList.length; i++){
          this.cartList[i].checked = false
        }
      }else {
        for(let i = 0; i < this.cartList.length; i++){
          this.cartList[i].checked = true
        }
      }
    },
    tocaculateClick() {
      if(this.cartList.length === 0) {
        this.$toast.show('请选择商品')
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  height: 40px;
  line-height: 40px;
  width: 100%;
  background-color: #eeeeee;
  position: absolute;
  bottom: 49px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
}
.checkedAll{
  width: 70px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #464545;
}
.checkedAll .checked{
  width: 12px;
  height: 12px;
  border: 1px solid red;
  border-radius: 50%;
  margin: 0 5px 0 13px;
}
.total{
  /* transform: translateX(-80%); */
  margin-left: -25%;
}
.tocaculate{
  background-color: rgb(235, 108, 108);
  width: 100px;
  text-align: center;
  color: #ffffff;
}
.active{
  background-color: red;
}
</style>
