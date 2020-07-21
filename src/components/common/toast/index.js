import Toast from './Toast.vue'

const obj = {}

obj.install = function(Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 2.new 的方式，根据组件构造器，创建出来组件对象
  const toast = new toastConstructor()

  // 3.将组件对象手动挂载在某个元素上
  toast.$mount(document.createElement('div'))

  // 4toast.$el就是div
  document.body.appendChild(toast.$el)

  // 5.将new出来的组件对象添加到vue原型
  Vue.prototype.$toast = toast
}

export default obj