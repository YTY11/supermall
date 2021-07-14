//函数防抖
export function debounce(fun, wait) {
  let time = null
  //...args 可以传递多个参数
  return function(...args) {

    //判断time 是否为null 有就清楚定时器,防止连续触发,降低服务器压力
    if (time) {
      clearTimeout(time)

    }

    time = setTimeout(function() {
      //回调函数
      fun.apply(this, args)
    }, wait)
  }
}
