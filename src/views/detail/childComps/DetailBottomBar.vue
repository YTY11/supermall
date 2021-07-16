<template>
<div class="detail-bottom-bar">
  <div class="bar-item bar-item-left">
    <div>
      <i class="service icon"></i>
      <span>客服</span>
    </div>
    <div>
      <i class="shop icon"></i>
      <span>店铺</span>
    </div>
    <div>
      <i class="collect icon"></i>
      <span>收藏</span>
    </div>
  </div>
  <div class="bar-item bar-item-right">
    <div class="shop-car" @click="shopCar">加入购物车</div>
    <div class="buy" @click="buy">购买</div>
  </div>
</div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods:{
    //加入购物车
    shopCar(){

      this.$emit("addToShopCar")
    },

    //购买
    buy(){
      console.log("///////////")
    }
  }
}
</script>

<style scoped>
.detail-bottom-bar{
  width: 100vw;
  height: 49px;
  background-color: #fff;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  text-align: center;
  font-size: 13px;

}
.bar-item{
  flex: 1;
  display: flex;
}
.bar-item-left div{
  flex: 1;
}

.bar-item-left .icon{
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 2px;
  background:url("~assets/img/detail/detail_bottom.png") 0 0/100%;;
}
.bar-item-left .shop{
  background-position: 0 52px;
}
.bar-item-left .service{
  background-position: 0 -52px;
}
.bar-item-left .collect{
  background-position: 0 0;
}
.bar-item-right div{
  flex: 1;
  height: 100%;
  line-height: 49px;
  padding: 0 5px;
}
.bar-item-right{
  height: 100%;
  font-size: 16px;
}
.shop-car{
  background-color: var(--color-tint);
}
.buy{
  background-color: #FAEB20;
}

</style>
