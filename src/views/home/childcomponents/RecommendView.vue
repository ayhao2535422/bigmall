<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(recommend, index) in recommends" :key="index">
      <a :href="recommend.link">
        <img :src="recommend.image" alt="">
        <p>{{recommend.title}}</p>
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
    recommends: {
      type: Array,
      default() {
        return []
      }
    },
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  padding: 10px 0 5px 0;
  border-bottom: 15px solid #eeeeee;
}
.recommend-item{
  flex: 1;
}
.recommend-item a{
  text-decoration: none;
  color: black;
  font-size: 15px;
}
.recommend img{
  width: 88%;
}
</style>
