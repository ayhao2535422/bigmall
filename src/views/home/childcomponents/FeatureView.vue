<template>
  <div class="feature">
    <a href="http://www.baidu.com">
      <img src="../../../assets/img/home/recommend_bg.jpg" alt="" @load="imgLoad">
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
      return {
        isLoad: false
      }
  },
  components: {},
  methods: {
    imgLoad() {
      this.isLoad = true
      this.$emit('featureImgLoad', this.isLoad)
    }
  }
}
</script>

<style scoped>
.feature img{
  width: 100%;
}
</style>
