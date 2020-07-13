<template>
  <div class="swiper">
    <swiper>
      <swiper-item v-for="(banner, index) in banners" :key="index">
        <a :href="banner.link">
          <img :src="banner.image" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from '@/components/common/swiper/Swiper'
import SwiperItem from '@/components/common/swiper/SwiperItem'

export default {
  name: "",
  data() {
      return {
        isLoad: false
      }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    },
  },
  components: {
    SwiperItem,
    Swiper
  },
  methods: {
    imgLoad() {
      if(!this.isLoad) {
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
      
    }
  }
}
</script>

<style scoped>
</style>
