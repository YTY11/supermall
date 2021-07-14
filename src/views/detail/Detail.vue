<template>
  <div id="detail">
    <!-- 头部导航栏 -->
    <detail-nav-bar @detailItemClick="detailItemClick" ref="nav"/>
<toast/>
    <scroll class="detail-scroll"
            :probe-type="3"
            ref="scroll" @scroll="scroll">
      <!--轮播图-->
<!--          <detail-swiper :item-imgs="topImages" class="detail-swiper"/>-->
      <!--商品信息-->
<!--      <detail-base-info :goods="goods"/>-->
      <!-- 店铺信息 -->
<!--      <detail-shops-info :shops="shops"/>-->
      <!-- 商品详情 -->
<!--      <detail-goods-info :detail-info="detailInfo" @imgsLoad="imgsLoad"/>-->
      <!-- 参数信息 -->
<!--      <detail-params-info :goods-params="goodsParams" ref="goodsParams"/>-->
      <!-- 评论信息 -->
<!--      <detail-comment-info :comment-info="commentInfo"  ref="commentInfo"/>-->
      <!-- 推荐商品信息 -->
<!--      <goods-list :showGoods="recommend" ref="recommend"/>-->
    </scroll>

    <!-- 回到顶部按钮 -->
    <back-top @click.native="clickTop" v-show="backTopShow" />

    <!-- 底部TabBar -->
    <detail-bottom-bar @addToShopCar="addToShopCar"/>
  </div>
</template>



<script>
//导航栏组件
import DetailNavBar from './childComps/DetailNavBar.vue'
//头部轮播图组件
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
//商品信息组件
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
//店铺信息组件
import DetailShopsInfo from "@/views/detail/childComps/DetailShopsInfo";
//商品详情组件
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
//参数组件
import DetailParamsInfo from "@/views/detail/childComps/DetailParamsInfo";
//评论组件
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
//推荐商品组件
import GoodsList from "@/components/content/goods/GoodsList";
//底部导航组件
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

import Toast from "@/components/common/toast/Toast";


//回到顶部组件
import BackTop from "@/components/content/backTop/BackTop";

//better-scroll滑动组件
import Scroll from "@/components/common/scroll/Scroll";

//引入防抖函数
import {debounce} from "@/common/utils";

//网路请求数据
import {getDetail,Goods,Shops,GoodsParams,getRecommend} from "network/detail.js";

export default {
  name: 'Detail',
  data() {
    return {
      iid: '',
      topImages:[],
      goods:{},
      shops:{},
      detailInfo:{},
      goodsParams:{},
      commentInfo:{},
      recommend:[],
      backTopShow:false,
      themeTopYs:[0],
      themTopYsFunction: null,
      detailItemIndex: 0
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopsInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Toast,

    BackTop,

    Scroll
  },

  created() {
    this.iid = this.$route.params.iid
    this.getDetail(this.iid)
    this.getRecommend()
  },
  mounted() {
    //使用防抖函数 实现图片加载完后刷新better-scroll 防止其获取的高度不正确造成页面无法滚动的问题
    this.themTopYsFunction = debounce(()=>{
      this.$refs.scroll.refresh()
      this.themeTopYs = [0]
      //当图片资源加载完后获取每一个模块的位置，用于定位
      this.themeTopYs.push(
        this.$refs.goodsParams.$el.offsetTop,
        this.$refs.commentInfo.$el.offsetTop,
        this.$refs.recommend.$el.offsetTop)
      console.log(this.themeTopYs)
    },500);
    // this.themTopYsFunction = debounce(this.$refs.scroll.refresh,300)

  },

  methods: {
    //网络请求数据
    //根据iid查询详情数据
    getDetail(iid) {
      getDetail(iid).then(res=>{
        const data = res.result
        // console.log(res)
        //1.获取轮播图数据
        this.topImages = res.result.itemInfo.topImages;
        //2.获取价格活动等信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //3.获取商家信息
        this.shops = new Shops(data.shopInfo)
        //4.获取详情信息
        this.detailInfo = data.detailInfo
        //5.获取参数信息
        this.goodsParams = new GoodsParams(data.itemParams.info,data.itemParams.rule)
        //6.获取评论信息
        if(data.rate.cRate !== 0) this.commentInfo = data.rate.list[0]

        // console.log(this.commentInfo)

      }).catch(err=>{
        console.log(err)
      })

    },

    //获取推荐商品数据
    getRecommend(){
      getRecommend().then((res)=>{
        this.recommend = res.data.list
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },

    //图片加载完毕调用函数
    imgsLoad(){
      this.themTopYsFunction()
    },

    //导航栏选择
    detailItemClick(index){
      //根据选择调到指定位置
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],300)
    },

    //返回顶部
    clickTop(){
      this.$refs.scroll.scrollTo(0,0,300)
    },

    //监听页面滚动位置
    scroll(p){
      //当页面向下滚动300时回到顶部按钮显示
      this.backTopShow = -p.y >= 300

      //实现滚动到相应位置，对应的导航选项变成选中状态
      const length = this.themeTopYs.length
      for (let i = 0; i < length - 1; i++) {
        if(this.detailItemIndex != i && this.themeTopYs[i] <= -p.y && -p.y < this.themeTopYs[i+1]){
          console.log(i)
          this.detailItemIndex = i
          this.$refs.nav.detailItemIndex = i
        }
      }
      if(this.detailItemIndex != length-1 && -p.y>=this.themeTopYs[length-1]){
        this.detailItemIndex = length - 1
        this.$refs.nav.detailItemIndex = length - 1
      }

    },

    //加入购物车所需数据
    addToShopCar(){
      console.log("-----------")
      const shopMsg = {}
      shopMsg.img = this.topImages[0]
      shopMsg.title = this.goods.title
      // shopMsg.desc = this.goods.desc
      shopMsg.price = this.goods.newPrice
      shopMsg.iid = this.iid


    }

  }
}
</script>

<style>
#detail{
  height: 100vh;
  background: #fff;
  position: relative;
}

 .detail-swiper{
   width: 100%;
   height: 260px;
 }
 .detail-scroll{
   width: 100%;
   position: absolute;
   overflow: hidden;
   top: 40px;
   bottom: 70px;
 }
</style>
