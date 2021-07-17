<template>
  <scroll class="cartgory-menu-scroll" ref="scroll">
    <div class="cartgory-menu-item" v-for="(item,index) in categoryList"
         :key="index"
         :class="{isActive:index==clickNumber}"
         @click="cartgoryClick(index,item.maitKey)">
      {{item.title}}
    </div>
  </scroll>
</template>

<script>
//better-scroll组件
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "CategoryMenu",
  props:{
    categoryList:{
      type:Array,
      default(){
        return []
      }
    },
  },
  data(){
    return{
      clickNumber:0
    }
  },
  mounted() {
    //刷新better-scroll 防止无法滚动
    setTimeout(()=>{
      this.$refs.scroll.refresh()
    },200)
  },
  components:{
    Scroll
  },
  methods:{
    //监听点击的分类
    cartgoryClick(index,maitKey){
      this.clickNumber = index
      this.$emit('cartgoryClick',maitKey)

    }
  }
}
</script>

<style scoped>
.cartgory-menu-scroll{
  width: 90px;
  height: 100%;
  background-color: #f6f6f6;
  box-sizing: border-box;
}
.cartgory-menu-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 2px;
}
.isActive{
  font-size: 16px;
  background-color: #fff;
  letter-spacing: 2px;
  color: var(--color-tint);
  border-left: 1px solid var(--color-tint);
}

</style>
