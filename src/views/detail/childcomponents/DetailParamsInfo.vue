<template>
  <div class="param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table v-for="(table, index) in paramsInfo.rule.tables" :key="index">
      <tr v-for="(tr, indextr) in table" :key="indextr">
        <td v-for="(td, indextd) in tr" :key="indextd">{{td}}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(item, index) in paramsInfo.info.set" :key="index">
        <td class="info-key">{{item.key}}</td>
        <td class="info-value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
      return {}
  },
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
.param-info{
  padding: 20px 15px;
  font-size: 14px;
}
.param-info table{
  width: 100%;
  border-collapse: collapse;
  border-bottom: 5px solid #f3f5f7;
}
.param-info table tr{
  height: 42px;
}
.param-info table tr td{
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-key{
  width: 96px;
}
.info-value{
  color: rgb(231, 63, 63);
}
</style>
