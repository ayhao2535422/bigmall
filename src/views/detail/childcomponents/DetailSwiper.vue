<template>
  <div class="">
    <swiper class="swiper">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from '../../../components/common/swiper/Swiper'
import SwiperItem from '../../../components/common/swiper/SwiperItem'

export default {
  name: "",
  data() {
      return {}
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    },
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {}
}
</script>

<style scoped>
.swiper{
  margin-top: 44px;
}
.swiper{
  height: 300px;
  overflow: hidden;
}
</style>
