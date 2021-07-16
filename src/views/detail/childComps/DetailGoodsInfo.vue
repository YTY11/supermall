<template>
<div class="detail-goods-info">
  <div class="goods-info-info-start"></div>
  <div class="goods-info-info-title">{{detailInfo.desc}}</div>
  <div class="goods-info-info-end"></div>
  <div v-if="detailInfo.detailImage">{{goodsTitleKey}}</div>
  <div class="detail-goods-img" v-if="detailInfo.detailImage">
    <img
      v-for="(item,index) in detailInfo.detailImage[0].list"
      :key="index"
      :src="item" @load="imgsLoad"/>
  </div>

</div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    goodsTitleKey(){

      return this.detailInfo.detailImage["0"].key
    }
  },
  methods:{
    //图片加载
    imgsLoad(){
      this.$emit("imgsLoad")
    }
  }
}
</script>

<style scoped>
.detail-goods-info{
  margin-top: 15px;
  padding: 0 10px;
}
.goods-info-info-start, .goods-info-info-end{
  width: 90px;
  height: 1px;
  background: #999999;
}
.goods-info-info-end{
  text-align: end;
  margin-left: auto;
}
.goods-info-info-start::before,.goods-info-info-end::before {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: black;
  position: absolute;
  content: '';
  margin-top: -2px;
}
.goods-info-info-title{
  padding: 8px 5px;
  font-size: 14px;
}
.detail-goods-img img{
  width: 100%;
  padding: 5px 0;
  border-radius: 10px;
}
</style>
