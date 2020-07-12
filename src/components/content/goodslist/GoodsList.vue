<template>
  <div class="goods-list">
    <div class="goods-list-item" v-for="(good, index) in goods" :key="index">
      <a :href="good.link">
        <div><img :src="good.show.img" @load="imgLoad" alt=""></div>
        <div class="info">
          <p>{{good.title}}</p>
          <div>
            <span class="price">{{'￥' + good.price}}</span>
            <span class="cfav"><i class="iconfont icon-zan"></i>{{good.cfav}}</span>
          </div>
        </div>
      </a>
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
    goods: {
      type: Array,
      default() {
        return []
      }
    },
  },
  components: {},
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.goods-list-item{
  width: 48%;
  padding: 0 0 40px;
}
.goods-list-item a{
  text-decoration: none;
}
.goods-list-item img{
  width: 100%;
}
.info{
  position: relative;
}
.info p{
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  color: black;
}
.cfav{
  position: absolute;
  right: 20px;
  color: black;
}
.price{
  position: absolute;
  left: 20px;
  color: rgb(187, 67, 87);
}
</style>
