<template>
  <div class="goods">
    <good-list-item v-for="(item,index) in showGoods" :key="index" :item-list="item" />
  </div>
</template>

<script>

  //goodsList 子组件 展示每一个商品
  import GoodListItem from './GoodListItem.vue'

  export default{
    name:'GoodsList',
    props:{
      showGoods:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
      GoodListItem
    }
  }
</script>

<style>
  .goods{
    padding: 0 2px;
    display: flex;
    /* text-align: center; */
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
