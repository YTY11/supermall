<template>
<div class="detail-params-info">
  <img v-if="goodsParams.image != ''" :src="goodsParams.image"/>
  <div class="detail-params">
    <table>
      <tr>
        <th colspan="2" class="params-title">{{goodsParams.infoKey}}</th>
      </tr>
      <tr v-for="(item,index) in goodsParams.infos" :key="index">
        <td class="params-name-width">{{item.key}}</td>
        <td class="params-color">{{item.value}}</td>
      </tr>
    </table>
    <table v-if="goodsParams.sizes">
      <tr class="params-title">
        <th :colspan="goodsParams.sizes[0].length">{{goodsParams.ruleKey}}</th>
      </tr>
      <tr v-for="(item,index) in goodsParams.sizes[0]" :key="index">
        <td v-for="(data,indey) in item" :key="indey+'y'">{{data}}</td>
      </tr>
    </table>
  </div>
</div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props:{
    goodsParams:{
      type:Object,
      default(){
        return {}
      }
    }
  }

}
</script>

<style scoped>
.detail-params-info{
  padding: 25px 10px;
}
.detail-params-info img{
  width: 100%;
}
.detail-params{
  text-align: left;
}
table{
  width: 100%;
}
table td{
  padding: 10px 10px;
  font-size: 14px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
.params-color{
  color: var(--color-tint);
}
.params-name-width{
  width: 80px;
}
.params-title{
  text-align: center;
  padding: 10px 0;
}
</style>
