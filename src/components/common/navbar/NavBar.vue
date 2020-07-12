<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
      return {}
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
.nav-bar{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 44px;
  line-height: 44px;
  display: flex;
  box-shadow: 0 1px 1px rgb(100, 100, 100, 0.1);
}
.left{
  width: 60px;
}
.center{
  flex: 1;
  text-align: center;
}
.right{
  width: 60px;
}
</style>
