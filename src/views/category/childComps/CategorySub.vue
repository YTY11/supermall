<template>
  <div class="category-sub-scroll-div" v-if="Object.keys(categorySub).length !== 0">
    <category-sub-item v-for="(item,index) in categorySub"
                       :key="index"
                       :sub-item="item" />
  </div>

</template>

<script>
//分类详情子组件
import CategorySubItem from "@/views/category/childComps/CategorySubItem";

export default {
  name: "CategorySub",
  props:{
    categorySub:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    CategorySubItem
  }
}
</script>

<style scoped>

.category-sub-scroll-div{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

}
</style>
