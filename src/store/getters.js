export default{
  //获取购物车商品数量
  cartLength(state){
    return state.cartList.length
  },
  //获取购物车商品
  cartList(state){
    console.log(state.cartList)
    return state.cartList
  }
}
