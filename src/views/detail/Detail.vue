<template>
  <div class="detail">
    <detail-nav-bar ref="nav" @navClick="navClick" class="nav-bar"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-params-info ref="params" :paramsInfo="itemParams"></detail-params-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <div ref="recommend" class="recommend-div">推荐</div>
      <goods-list class="recommends" :goods="recommends"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" ref="backTop"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import DetailNavBar from './childcomponents/DetailNavBar'
import DetailSwiper from './childcomponents/DetailSwiper'
import DetailBaseInfo from './childcomponents/DetailBaseInfo'
import DetailShopInfo from './childcomponents/DetailShopInfo'
import DetailGoodsInfo from './childcomponents/DetailGoodsInfo'
import DetailParamsInfo from './childcomponents/DetailParamsInfo'
import DetailCommentInfo from './childcomponents/DetailCommentInfo'
import DetailBottomBar from './childcomponents/DetailBottomBar'

import  GoodsList from '../../components/content/goodslist/GoodsList'
import BackTop from '../../components/content/backtop/BackTop'
import Scroll from '../../components/common/scroll/Scroll'
import {debounce} from '../../urils/utils'

import {getDetail, Goods, getRecommend} from '../../network/detail'

export default {
  name: "Detail",
  data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        itemParams: {},
        commentInfo: {},
        recommends: [],
        themeTopY: [],
        getOffsetTop: null,
        currentIndex: 0,
      }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    BackTop,
    Scroll,
  },
  methods: {
    scroll(position) {
      let positionY = -position.y
      if(positionY > 0 && positionY < this.themeTopY[1]){
        this.$refs.nav.currentIndex = 0
      }else if(positionY >= this.themeTopY[1] && positionY < this.themeTopY[2]){
        this.$refs.nav.currentIndex = 1
      }else if(positionY >= this.themeTopY[2] && positionY < this.themeTopY[3]){
        this.$refs.nav.currentIndex = 2
      }else if(positionY >= this.themeTopY[3]){
        this.$refs.nav.currentIndex = 3
      }
      positionY > 1000 ? this.$refs.backTop.isShow = true : this.$refs.backTop.isShow = false
    },
    addToCart() {
      let product = {}
      product.img = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      this.$store.dispatch('addToCart', product).then(result => {
        this.$toast.show()
      })

    },
    backTopClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 200)
    },
    navClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopY[index], 200)
    },
    getDetail(iid) {
      getDetail(iid).then(result => {
        let data = result.result
        this.topImages.push(...result.result.itemInfo.topImages)
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = data.shopInfo
        this.detailInfo = data.detailInfo
        this.itemParams = data.itemParams
        if(this.commentInfo) {
          this.commentInfo = data.rate.list[0]
        }
      })
      this.getOffsetTop = debounce(() => {
        this.themeTopY = []
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.params.$el.offsetTop + 50)
        this.themeTopY.push(this.$refs.comment.$el.offsetTop + 80)
        this.themeTopY.push(this.$refs.recommend.offsetTop + 50)
        // console.log(this.themeTopY);
      }, 200)
    },
    getRecommend() {
      getRecommend().then(result => {
        this.recommends = result.data.list 
      })
    }
  },
  created () {
    this.iid = this.$route.params.iid
    this.getDetail(this.iid)
    this.getRecommend()
  },
  mounted () {
    let GoodsRefresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('detailGoodsImgLoad', () => {
      GoodsRefresh()
      this.getOffsetTop()
    })
    
  },
}
</script>

<style scoped>
.detail{
  background-color: #ffffff;
}
.content{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 049px;
  z-index: 10;
  background-color: #ffffff
}
.recommend-div{
  padding: 15px 15px 15px 15px;
  border-bottom: 5px solid #f3f5f7;
  border-top: 5px solid #f3f5f7;
  display: flex;
  justify-content: space-between;
}
.recommends{
  margin-top: 15px;
}
</style>
