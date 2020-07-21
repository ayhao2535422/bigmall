<template>
  <div class="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import CartList from './childcomponents/CartList'
import CartBottomBar from './childcomponents/CartBottomBar'

import NavBar from '../../components/common/navbar/NavBar'

import {mapGetters} from 'vuex'

export default {
  name: "",
  data() {
      return {}
  },
  components: {
    CartList,
    NavBar,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
  methods: {}
}
</script>

<style scoped>
.nav-bar{
  background-color: rgb(230, 109, 133);
  color: #ffffff;
  z-index: 11;
}
</style>
