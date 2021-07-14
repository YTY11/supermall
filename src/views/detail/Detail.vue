<template>
  <div id="detail">
    <!-- 头部导航栏 -->
    <detail-nav-bar/>


    <!--轮播图-->
<!--    <detail-swiper :item-imgs="topImages" class="detail-swiper"/>-->
    <!--商品信息-->
    <detail-base-info :goods="goods"/>
    <!-- 店铺信息 -->
    <detail-shops-info :shops="shops"/>
    <h2>
      {{ this.$route.params.iid }}
    </h2>
  </div>
</template>



<script>
//导航栏组件
import DetailNavBar from './childComps/DetailNavBar.vue'
//头部轮播图组件
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
//商品信息组件
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
//店铺信息
import DetailShopsInfo from "@/views/detail/childComps/DetailShopsInfo";

//网路请求数据
import {getDetail,Goods,Shops} from "network/detail.js";

export default {
  name: 'Detail',
  data() {
    return {
      iid: '',
      topImages:[],
      goods:{},
      shops:{}

    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopsInfo
  },

  created() {
    this.iid = this.$route.params.iid
    this.getDetail(this.iid)
  },

  methods: {
    //网络请求数据
    //根据iid查询详情数据
    getDetail(iid) {
      getDetail(iid).then(res=>{
        const data = res.result
        console.log(res)
        //1.获取轮播图数据
        this.topImages = res.result.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shops = new Shops(data.shopInfo)
        console.log(this.shops)

      }).catch(err=>{
        console.log(err)
      })

    }
  }
}
</script>

<style>
 .detail-swiper{
   width: 100%;
   height: 260px;
 }
</style>
