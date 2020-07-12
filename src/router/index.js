import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let Home = () => import('../views/home/Home.vue')
let Category = () => import('../views/category/Category.vue')
let Cart = () => import('../views/cart/Cart.vue')
let Profile = () => import('../views/profile/Profile.vue')

let routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

let router = new VueRouter({
  routes,
  mode: 'history'
})

export default router