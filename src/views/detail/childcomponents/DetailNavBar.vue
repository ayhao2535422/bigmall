<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div class="center-item" v-for="(item, index) in navList" :key="index" 
        @click="itemClick(index)" :class="{active: currentIndex === index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from '../../../components/common/navbar/NavBar'

export default {
  name: "",
  data() {
      return {
        navList: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('navClick', index)
    },
    backClick() {
      this.$router.back()
    },
  },
}
</script>

<style scoped>
.nav-bar{
  background-color: #ffffff;
  z-index: 11;
}
.center{
  display: flex;
}
.center-item{
  flex: 1;
  font-size: 15px;
}
.active{
  color: red;
}
.back{
  text-align: center;
}
.back img{
  margin-top: 12px;
}
</style>
