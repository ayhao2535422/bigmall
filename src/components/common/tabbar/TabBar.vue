<template>
  <div class="tab-bar">
    <slot></slot>
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
.tab-bar{
  display: flex;
  height: 49px;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
