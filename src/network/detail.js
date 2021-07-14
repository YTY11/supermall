import {request} from "@/network/request";

//详情页根据iid查询的数据
export function getDetail(iid){
 return request({
    url:'/api/m5/detail',
    params:{
      iid
    }
  })
}

//后台返回的数据过于凌乱，通过定义对象整合前端展示所需要的数据，便于使用
//商品信息
export class Goods{
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title //标题
    this.newPrice = itemInfo.price //新的价格
    this.oldPrice = itemInfo.oldPrice //旧的价格
    this.discountDesc = itemInfo.discountDesc //优惠名称
    this.discountBgColor = itemInfo.discountBgColor //优惠名称背景色
    this.columns = columns //销量&收藏&默认快递
    this.services = services //购买商品享受的政策（7天无理由退货等）
  }
}
//商家信息
export class Shops{
  constructor(shopInfo){
    this.name = shopInfo.name // 商家名
    this.shopLogo = shopInfo.shopLogo // logo
    this.cGoods = shopInfo.cGoods // 商品数
    this.cSells = shopInfo.cSells // 销量
    this.score = shopInfo.score // 店铺评价信息

  }
}


