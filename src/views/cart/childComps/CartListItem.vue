<template>
  <div class="cart-list-item">
    <div class="active-item">
      <check-button :is-show="cartMsg.checked" @click.native="checkedClick"/>
    </div>
    <div class="item-img">
      <img :src="cartMsg.img" @load="cartImgLoad"/>
    </div>
    <div class="item-msg">
      <div class="item-title">{{ cartMsg.title }}</div>
      <div class="item-title-litter">{{ cartMsg.title }}</div>
      <div class="item-price">
        <span class="cart-item-price">{{ cartMsg.price }}</span>
        <span class="cart-item-count">×{{ cartMsg.count }}</span>
      </div>
    </div>

  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  name: "CartListItem",
  props: {
    cartMsg: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components:{
    CheckButton
  },
  methods:{
    cartImgLoad(){
      this.$bus.$emit("cartImgLoad")
    },
    //选中与不选切换
    checkedClick(){
      this.cartMsg.checked = !this.cartMsg.checked
    }
  }

}
</script>

<style scoped>
.cart-list-item {
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  padding: 10px;
}

.item-img {
  padding: 5px;
}

.item-img img {
  width: 55px;
  height: 82.5px;
  border-radius: 8px;
}

.item-msg{
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  height: 100%;

}
.item-msg div{
  padding: 5px;
}

.item-title, .item-title-litter {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.item-title {
  font-size: 20px;
}

.item-title-litter {
  font-size: 16px;
}

.cart-item-price {
  color: var(--color-tint);
  font-size: 16px;
}
.item-price {
  display: flex;
}
.item-price span{
  flex: 1;
}

</style>
