<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
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
    refresh() {
      this.scroll.refresh()
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3,
      pullUpLoad: true
    });
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
}
</script>

<style scoped>
</style>
