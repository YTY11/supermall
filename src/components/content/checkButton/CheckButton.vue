<template>
<div class="check-button" :class="{isActive:isShow}">
    <img src="~assets/img/cart/tick.svg" alt="">
</div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    isShow:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style scoped>
.check-button{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #F2F2EE;
}
.isActive{
  background-color: var(--color-tint);
}
.isActive img{
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>
