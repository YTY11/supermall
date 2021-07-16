<template>
  <!-- 直接使用goodsList 组件就行，这两个功能一样我写重了 -->
<div class="detail-recommend-info">
  <img v-for="(item,index) in recommend"
       :key="index"
       :src="item.image" @load="recommendImgLoad"/>
</div>
</template>

<script>
export default {
  name: "DetailRecommendInfo",
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    recommendImgLoad(){
      this.$bus.$emit("recommendImgLoad")
    }
  }
}
</script>

<style scoped>
.detail-recommend-info{
  display: flex;
  padding: 10px 10px;
  justify-content: space-around;
  flex-flow: wrap;
}
.detail-recommend-info img{
  flex: 1;
  width: 48%;
  padding: 5px 5px;
  border-radius: 20px;
}
</style>
