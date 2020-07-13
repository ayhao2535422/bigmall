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
      if(!this.isLoad) {
        this.$emit('featureImgLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>
.feature img{
  width: 100%;
}
</style>
