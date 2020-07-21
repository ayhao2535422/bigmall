<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "toast",
  data() {
      return {
        message: '',
        isShow: false
      }
  },
  components: {},
  methods: {
    show(message='添加购物车成功', duration='1500') {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
      }, duration);
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  color: white;
  padding: 10px 12px;
  transform: translate(-50%, -50%);
}
</style>
