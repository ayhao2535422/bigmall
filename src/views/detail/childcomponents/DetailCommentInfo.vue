<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="title">
      <span class="rate">用户评价</span>
      <span class="more">更多</span>
    </div>
    <div class="user-info">
      <img class="user-avatar" :src="commentInfo.user.avatar" alt="">
      <span class="user-name">{{commentInfo.user.uname}}</span>
    </div>
    <p class="content">{{commentInfo.content}}</p>
    <div class="info">
      <span class="time">{{commentInfo.created | showDate}}</span>
      <span class="style">{{commentInfo.style}}</span>
    </div>
    <div>
      <img class="img" v-for="(image, index) in commentInfo.images" :key="index" :src="image" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import format from '../../../urils/utils'

export default {
  name: "",
  data() {
      return {}
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  components: {},
  methods: {},
  filters: {
    showDate: function(value) {
      let date = new Date(value * 1000)
      return date.format('yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.title{
  padding-bottom: 17px;
  border-bottom: 5px solid #f3f5f7;
  display: flex;
  justify-content: space-between;
}
.comment-info{
  padding: 0px 15px 15px 15px;
}
.user-info{
  display: flex;
  align-items: center;
  padding-top: 7px;
}
.user-avatar{
  height: 45px;
  width: 45px;
  border-radius: 50%;
}
.user-name{
  margin-left: 15px;
  font-weight: 500;
}
.content{
  font-size: 14px;
}
.style{
  margin-left: 15px;
}
.img{
  width: 60px;
  height: 60px;
  padding: 7px 4px 4px 0;
}
</style>
