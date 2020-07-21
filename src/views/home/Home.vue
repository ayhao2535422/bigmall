<template>
  <div class="">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control ref="tabControl1" @itemClick="itemClick" :tablist="tablist" 
    class="tab-control" v-show="isTabFixed"></tab-control>
    <scroll ref="scroll" @pullingUp="pullingUp" @scroll="scroll" class="content">
      <home-swiper class="swiper" :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view @featureImgLoad="featureImgLoad"></feature-view>
      <tab-control ref="tabControl2" @itemClick="itemClick" :tablist="tablist"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" ref="backTop"></back-top>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from '../../components/common/navbar/NavBar'
import Scroll from '../../components/common/scroll/Scroll'
import TabControl from '../../components/content/tabcontrol/TabControl'
import GoodsList from '../../components/content/goodslist/GoodsList'
import BackTop from '../../components/content/backtop/BackTop'

import HomeSwiper from './childcomponents/HomeSwiper'
import RecommendView from './childcomponents/RecommendView'
import FeatureView from './childcomponents/FeatureView'

import {getHomeMultidata, getHomeGoods} from '../../network/home'

import {debounce} from '../../urils/utils'

export default {
  name: "",
  data() {
      return {
        banners: [],
        recommends: [],
        tablist: ['流行', '新款', '精选'],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []},
        },
        currentType: 'pop',
        tabOffsetTop: null,
        isTabFixed: false,
        isShow: false,
        swiperIsLoad: false,
        featureIsLoad: false
      }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  methods: {
    itemClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
      console.log(this.currentType)
    },
    scroll(position) {
      position.y >= -1000 ? this.$refs.backTop.isShow = false : this.$refs.backTop.isShow = true
      position.y > -this.tabOffsetTop ? this.isTabFixed = false : this.isTabFixed = true
    },
    backTopClick() {
      this.$refs.scroll.scroll && this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    pullingUp() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll && this.$refs.scroll.scroll.finishPullUp()
    },
    featureImgLoad(isLoad) {
      this.featureIsLoad = isLoad
    },
    swiperImgLoad(isLoad) {
      this.swiperIsLoad = isLoad
      if(this.featureIsLoad && this.swiperIsLoad){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      }
    },
    getHomeMultidata() {
      getHomeMultidata().then(result => {
        this.banners.push(...result.data.banner.list)
        this.recommends.push(...result.data.recommend.list)
      })
    },
    getHomeGoods(type) {
      this.goods[type].page ++
      getHomeGoods(type, this.goods[type].page).then(result => {
        this.goods[type].list.push(...result.data.list)
      })
    }
  },
  created () {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    let refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('homeImgLoad', () => {
      refresh()
    });
  },
}
</script>

<style scoped>
.nav-bar{
  background-color: rgb(230, 109, 133);
  color: aliceblue;
  position: relative;
  z-index: 10;
}
.content{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
.tab-control{
  position: relative;
  z-index: 1;
}
</style>
