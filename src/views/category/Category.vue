<template>
  <div class="category">
    <test title="分类" left="返回" right="查询"></test>
    <div :style="isColor">category</div>
    <div>哈哈</div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Test from './Test'

export default {
  name: "",
  data() {
      return {
        isTrue: true,
        isStyle: true
      }
  },
  components: {
    Test
  },
  computed: {
    isColor() {
      return this.isStyle ? {fontSize: '80px'} : {}
    }
  },
  methods: {
  },
  mounted () {},
}
</script>

<style scoped>
.active{
  color: red;
}
.big{
  font-size: 50px;
}
</style>
