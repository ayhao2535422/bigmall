export default {
  addCounter(state, oldProduct) {
    oldProduct.count += 1
  },
  addProduct(state, payload) {
    payload.count = 1
    payload.checked = true
    state.cartList.push(payload)
  }
}