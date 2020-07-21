<template>
  <div class="">
    <div>
      <nav-bar class="nav-bar"><div slot="center">我的档案</div></nav-bar>
      <profile-info></profile-info>
      <profile-money></profile-money>
      <profile-app-list></profile-app-list>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from '../../components/common/navbar/NavBar'
import ProfileInfo from './childcomponents/ProfileInfo'
import ProfileMoney from './childcomponents/ProfileMoney'
import ProfileAppList from './childcomponents/ProfileAppList'

export default {
  name: "",
  data() {
      return {}
  },
  components: {
    NavBar,
    ProfileInfo,
    ProfileMoney,
    ProfileAppList
  },
  methods: {}
}
</script>

<style scoped>
.nav-bar{
  background-color: rgb(230, 109, 133);
  color: #ffffff;
}
</style>

