<template>
  <div class="profile-app-list">
    <div class="list1">
      <div v-for="(item, index) in list" :key="index" class="app-list-item">
        <div class="message-div"><img :src="item.img" alt=""></div>
        <div class="text">{{item.text}}</div>
      </div>
    </div>
    <div class="lsit2">
      <div v-for="(item, index) in list1" :key="index" class="app-list-item">
        <div class="message-div"><img :src="item.img" alt=""></div>
        <div class="text">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
      return {
        list: [
          {text: '我的消息', img: require('@/assets/img/profile/message.svg')},
          {text: '积分商城', img: require('@/assets/img/profile/pointer.svg')},
          {text: '会员卡', img: require('@/assets/img/profile/vip.svg')}
        ],
        list1: [
          {text: '我的购物车', img: require('../../../assets/img/profile/cart.svg')},
          {text: '下载购物APP', img: require('../../../assets/img/profile/shopping.svg')},
        ]
      }
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
.app-list-item{
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid rgb(243, 241, 241);
}
.list1{
  border-bottom: 20px solid rgb(243, 241, 241);
}
.message-div img{
  width: 20px;
  height: 20px;
}
.text{
  margin-left: 5px;
}
</style>