<template>
  <swiper>
    <swiper-item v-for='(item,index) in banners' :key='index'>
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" @load="imgLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  //轮播组件
  import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
  export default{
    name:'HomeSwiper',
    props:{
      banners:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        isLoad:false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      imgLoad(){
        //监听轮播图加载完成刷新 better-scroll 防止无法下滑，因为图片横向展示，高度相同只需监听一次就行
        if(!this.isLoad){
          this.$emit('imgLoad')
          this.isLoad = true
        }

      }
    }
  }
</script>

<style>
</style>
