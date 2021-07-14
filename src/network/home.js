import {request} from 'network/request.js'

//首页轮播图数据
export function getHomeMultidata(){
  return request({
    url:'/api/m5/home/multidata'
  })
}


//首页商品数据
export function getHomeGoods(type,page){
  return request({
    url:'api/m5/home/data',
    params:{
      type,
      page
    }
  })
}
