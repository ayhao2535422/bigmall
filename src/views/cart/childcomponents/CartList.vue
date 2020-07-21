<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <div>
        <div>
          <div class="cart-list-item" v-for="(item, index) in cartList" :key="index">
            <div class="item-selector">
              <div class="selector" @click="selectorClick(index)" :class="{checked: item.checked}"></div>
            </div>
            <div class="img-div"><img :src="item.img" alt=""></div>
            <div class="item-info">
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
              <div class="bottom-info">
                <span class="price">￥{{item.price}}</span>
                <span class="counter">x{{item.count}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
import Scroll from '../../../components/common/scroll/Scroll'
import Vue from 'vue'

export default {
  name: "",
  data() {
      return {
        isChecked: true
      }
  },
  components: {
    Scroll,
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  methods: {
    selectorClick(index) {
      this.cartList[index].checked ? Vue.set(this.cartList[index], 'checked', false) : Vue.set(this.cartList[index], 'checked', true)
      console.log(!this.cartList[index].checked);
    }
  },
}
</script>

<style scoped>
.content{
  position: absolute;
  top: 49px;
  bottom: 84px;
  left: 0;
  right: 0;
}
.cart-list-item{
  display: flex;
  justify-content: space-evenly;
  padding: 10px 5px 10px 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(221, 218, 218);
}
.item-selector{
  display: flex;
  align-items: center;
}
.item-selector .selector{
  width: 11px;
  height: 11px;
  border: 2px solid rgb(158, 160, 161);
  border-radius: 50%;
}
.img-div img{
  width: 60px;
}
.item-info{
  width: 70%;
  position: relative;
  margin-left: 5px;
}
.title{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  color: black;
}
.desc{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  color: black;
  margin-top: 13px;
  font-size: 14px;
  color: rgb(158, 160, 161);
}
.bottom-info{
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.bottom-info .price{
  color: red;
}
.checked{
  background-color: rgb(241, 80, 80);
  border-color: rgb(241, 80, 80);
}
</style>
