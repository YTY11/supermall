<template>
  <div class="cart">
    <!-- 头部导航 -->
    <nav-bar class="car-nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!-- 购物车商品展示 -->
    <cart-list/>

    <!-- 结算 -->
    <cart-bottom/>

  </div>
</template>

<script>
//头部导航
import NavBar from "@/components/common/navbar/NavBar";
//购物车商品组件
import CartList from "@/views/cart/childComps/CartList";
//底部结算组件
import CartBottom from "@/views/cart/childComps/CartBottom";

//引入getters
import {mapGetters} from 'vuex'
  export default{
    name:'Cart',
    components:{
      NavBar,
      CartList,
      CartBottom
    },
    computed:{
      //vuex方法引入 getters 函数
      ...mapGetters(["cartLength"])

    }
  }
</script>

<style>
.cart{
  height: 100vh;
}
.car-nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
