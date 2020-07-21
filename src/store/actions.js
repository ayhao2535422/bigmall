export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = null
      for(let item of context.state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item
        }
      }
      if (oldProduct) {
        context.commit('addCounter', oldProduct)
        resolve('数量+1')
      } else {
        context.commit('addProduct', payload)
        resolve('添加商品')
      }
    })
  }
}