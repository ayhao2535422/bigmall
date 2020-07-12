<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>
      <li>哈哈</li>d
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  name: "",
  data() {
      return {
        scroll: null
      }
  },
  components: {},
  methods: {
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 0,
      pullUpLoad: true
    });
    // this.scroll.on('scroll', position => console.log(position))
    this.scroll.on('pullingUp', () => {
      console.log('加载更多')
      setTimeout(() => {
        this.scroll.finishPullUp()
      }, 2000);
    })
  },
}
</script>

<style scoped>
.wrapper{
  height: 500px;
  background-color: burlywood;
}
</style>
