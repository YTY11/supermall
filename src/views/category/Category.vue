<template>
  <div class="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">分类</div>
    </nav-bar>

    <div class="category-msg" ref="categoryMenu" >
      <!-- 左侧分类导航 -->
      <category-menu  :categoryList="categoryList" @cartgoryClick="cartgoryClick"/>
      <!-- 分类详情 -->
      <scroll class="category-sub-scroll" ref="scroll"  >
        <category-sub  :categorySub="categorySub"/>
      </scroll>
    </div>


  </div>
</template>

<script>
//头部导航
import NavBar from "@/components/common/navbar/NavBar";
//滚动组件
import Scroll from "@/components/common/scroll/Scroll";
//左边分类组件
import CategoryMenu from "@/views/category/childComps/CategoryMenu";
//详情组件
import CategorySub from "@/views/category/childComps/CategorySub";
//
import {debounce} from "@/common/utils";

//网络请求数据
import {getCategory, getCategorySub} from "@/network/cartgory";

export default {
  name: 'Category',
  data(){
    return{
      categoryList:[],
      categorySub:[],
      maitKey: "3627",
    }
  },
  components: {
    CategorySub,
    NavBar,
    CategoryMenu,
    Scroll
  },
  created() {
    this.getCategory()
    this.getCategorySub(this.maitKey)
  },
  mounted() {
    //防抖函数
    let refresh = debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on('subItemImageLoad',()=>{
      refresh()
    })
  },
  methods: {
    //网络请求数据
    //分类数据
    getCategory() {
      getCategory().then(res => {
       this.categoryList = res.data.category.list
      }).catch(err => {
        console.log(err)
      })
    },

    //分类详情数据
    getCategorySub(maitKey){
      getCategorySub(maitKey).then(res=>{
        this.categorySub = res.data.list
      }).catch(err=>{
        console.log(err)
      })
    },


    cartgoryClick(maitKey){
      this.$refs.scroll.scrollTo(0,0,0)
      this.categorySub = []
      this.getCategorySub(maitKey)
    }
  }
}
</script>

<style>
.category {

}

.category-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.category-msg {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  display: flex;
}
.category-sub-scroll{
  flex: 1;
}
</style>
