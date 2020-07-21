<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-goods-info">
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="detailImage" v-for="(item, index) in detailInfo.detailImage" :key="index">{{item.key}}
      <div class="image-box" v-for="(image, index) in item.list" :key="index">
        <img :src="image" alt="" @load="detailGoodsImgLoad">
      </div>
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
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  components: {},
  methods: {
    detailGoodsImgLoad() {
      this.$bus.$emit('detailGoodsImgLoad')
    }
  }
}
</script>

<style scoped>
.desc{
  padding: 15px;
  font-size: 14px;
  border-bottom: 5px solid rgb(247, 245, 245);
}
.detailImage{
  margin-top: 12px;
  font-size: 15px;
}
.image-box img{
  width: 100%;
}
</style>
