import {request} from 'network/request.js'

//首页轮播图数据
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}


//首页商品数据
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
