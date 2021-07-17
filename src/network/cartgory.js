import {request} from "@/network/request";

//获取分类数据
export function getCategory() {
  return request({
    url:'/api/m5/category'
  })
}

//根据选中的分类获取对应数据
export function getCategorySub(maitKey) {
  return request({
    url:'/api/m5/subcategory',
    params:{
      maitKey
    }
  })
}
