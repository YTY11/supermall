<template>
<div class="cart-list">
  <scroll class="cart-scroll" ref="scroll">
    <CartListItem v-for="(item,index) in cartList" :key="index" :cartMsg="item"/>
  </scroll>
</div>
</template>

<script>
//scroll组件
import Scroll from "@/components/common/scroll/Scroll";
//cart子组件
import CartListItem from "@/views/cart/childComps/CartListItem";

//引入getters 方法
import {mapGetters} from 'vuex'
//工具方法
import {
  debounce
} from 'common/utils.js'

export default {
  name: "CartList",
  components:{
    Scroll,
    CartListItem
  },
  computed:{
    //获取购物车数据
    ...mapGetters(["cartList"])
  }


}
</script>

<style scoped>
.cart-list{

}
.cart-scroll{
  width: 100%;
  position: absolute;
  top: 44px;
  bottom: 89px;
  overflow: hidden;
}
</style>
