<template>
  <swiper>
    <swiper-item v-for="(item,index) in itemImgs" :key="index">
      <img :src="item" alt=""/>
    </swiper-item>
  </swiper>
</template>

<script>
//轮播图组件
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'


export default {
  name: "DetailSwiper",
  props:{
    itemImgs:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>
