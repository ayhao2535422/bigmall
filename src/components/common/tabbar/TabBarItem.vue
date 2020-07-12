<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="active-img"></slot></div>
    <div v-else><slot name="img"></slot></div>
    <div :style="isColor"><slot name="text"></slot></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
      return {}
  },
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path 
    },
    isColor() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  components: {},
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  font-size: 14px;
}
.tab-bar-item img{
  width: 26px;
  height: 26px;
  margin-top: 3px;
}
</style>
