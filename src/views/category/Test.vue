<template>
  <div class="">
    <div class="nav">
      <div>{{left}}</div>
      <div>{{title}}</div>
      <div>{{right}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
      return {}
  },
  props: {
    left: {
      type: String,
      default: '默认左边'
    },
    title: {
      type: String,
      default: '默认标题'
    },
    right: String,
    default: '默认右边'
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
.nav{
  display: flex;
  justify-content: space-between;
  height: 49px;
  background-color: red;
  text-align: center;
}
.nav div{
  height: 49px;
  line-height: 49px;
  text-align: center;
}
</style>
