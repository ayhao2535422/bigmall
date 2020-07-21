import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

let state = {
  cartList: []
}

let stroe = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default stroe