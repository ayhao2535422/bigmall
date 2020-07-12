<template>
  <div class="back-top">
    <img v-show="isShow" src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
      return {
        isShow: false
      }
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 5px;
  bottom: 50px;
  z-index: 10;
}
.back-top img{
  width: 42px;
  height: 42px;
}
</style>
