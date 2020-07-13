<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in tablist" :key="index" 
    @click="tabItemClick(index)" :class="{active: currentIndex === index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
      return {
        currentIndex: 0
      }
  },
  props: {
    tablist: {
      type: Array,
      default() {
        return []
      }
    },
  },
  components: {},
  methods: {
    tabItemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  padding: 16px 6px 16px 6px;
  background-color: white
}
.tab-control-item{
  flex: 1;
}
.active{
  color: red;
}
</style>
