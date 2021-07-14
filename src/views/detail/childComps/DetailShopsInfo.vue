<template>
  <div v-if="Object.keys(shops).length !== 0" class="detail-shops-info">
    <div class="shops-logo-name">
      <img :src="shops.shopLogo"/>{{shops.name}}
    </div>
    <div class="shops-info">
      <div class="shops-info-left">
        <div class="shops-csells">
          <div class="shops-num">{{shops.cSells | sellCountFilter }}</div>
          <div class="shops-name">总销量</div>
        </div>
        <div class="shops-cGoods">
          <div class="shops-num">{{shops.cGoods}}</div>
          <div class="shops-name">全部宝贝</div>
        </div>
      </div>
      <div class="shops-info-right">
        <table>
          <tr v-for="(item,index) in shops.score" :key="index">
            <td>{{item.name}}</td>
            <td class="oldColor" :class="{isColor:item.isBetter}">{{item.score}}</td>
            <td class="oldColor" :class="{isColor:item.isBetter}">{{item.score | isShowHeight}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shops-bottom-button">
      <button @click="goTaoShopping">进店逛逛</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailShopsInfo",
  props:{
    shops:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    //过滤销量数据，大于一万的按万级显示
    sellCountFilter: function (sells) {
      if(sells >= 10000){
        return (sells/10000).toFixed(1) + "万"
      }
      else {
        return sells
      }
    },
    //透过评分显示高|低
    isShowHeight: function (value) {
      if(value == 5){
        return "高"
      }
      else{
        return "低"
      }
    }
  },
  methods:{
    goTaoShopping(){
      window.location.href="https://main.m.taobao.com/"
    }
  }
}
</script>

<style scoped>
.detail-shops-info{
  padding: 25px 15px;
  border-bottom: 2px solid rgba(0,0,0,0.1);
}

.shops-logo-name{
  height: 50px;
  line-height: 50px;
  font-size: 20px;


}
.shops-logo-name img{
  width: 40px;
  vertical-align: middle;
  margin-right: 15px;
}

.shops-info{
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}
.shops-info-left , .shops-info-right{
  flex: 1;
  text-align: center;
}

.shops-info-left{
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  border-right: 1px solid rgba(0,0,0,0.2);
  align-items: center;
}
.shops-num{
  font-size: 20px;
}
.shops-name{
  margin-top: 5px;
  font-size: 12px;
}
.oldColor{
  color: green;
}
.isColor{
  color: red;
}

.shops-info-right table{
  margin-left: auto;
  text-align: left;
  font-size: 14px;
}
table td{
  padding: 5px 3px;
}

.shops-bottom-button{
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
}
.shops-bottom-button button{
  border-radius: 10px;
  border: 0px;
  background: #f2f5f8;
  width: 100px;
  height: 25px;
  color: #666666;

}
</style>
