<template>
<div class="cart-bottom">
  <div class="cart-bottom-active">
    <check-button :is-show="isShow" @click.native="isAllShow"/>
    <span>全选</span>
  </div>
  <div class="cart-all-price">
    <span>总计：</span>
    <span>{{allPrice}}</span>
  </div>
  <div class="cart-account">结算({{shopNum}})</div>

</div>
</template>

<script>
//选中组件
import CheckButton from "@/components/content/checkButton/CheckButton";

//vuex getters 方法
import {mapGetters} from 'vuex'


export default {
  name: "CartBottom",
  components:{
    CheckButton
  },
  computed:{
    ...mapGetters(['cartList']),

    //判断全选是否选中
    isShow(){
      if(this.cartList.length == 0) return false

      return !this.cartList.find(item => !item.checked)
    },

    //总价格
    allPrice(){
      //1.先通过filter将选中的商品删选出来
      //2.通过reduce将商品价格和对应数量 相乘 计算出总价格返回
      return '￥' +  this.cartList.filter(item=>
         item.checked
      ).reduce((befor,after)=>{
          return befor+ parseFloat(after.price.substr(1)) * after.count
        },0).toFixed(2)

    },

    //商品数量
    shopNum(){
      return this.cartList.filter(item=> item.checked).length
    }

  },
  methods:{
    //全选或全不选
    isAllShow(){
      if(this.isShow){
        this.cartList.forEach(item=> item.checked = false)
      }
      else{
        this.cartList.forEach(item=> item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
.cart-bottom{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 44px;
  width: 100%;

  display: flex;
  align-items: center;
}
.cart-bottom-active{
  display: flex;
  background-color: #F2F2EE;
  width: 75px;
  height: 100%;
  align-items: center;
  padding-left: 10px;
}

.cart-bottom-active span{
  font-size: 14px;
  margin-left: 8px;
}
.cart-all-price{
  background-color: #F2F2EE;
  height: 100%;
  flex: 1;
  font-size: 14px;
  padding: 0 0 0 20px;
  display: flex;
  align-items: center;
}
.cart-account{
  width: 90px;
  background-color: var(--color-tint);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
