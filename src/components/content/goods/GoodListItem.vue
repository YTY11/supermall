<template>
  <div class="good-list-item" @click="clickGoods">
     <img v-lazy="showItemImage" :src="itemList.image" :alt="itemList.title" @load="imageLoad" />
    <div class="good-list-item-msg">
      <p>{{itemList.title}}</p>
      <div class="price-msg">
        <span class="price-color">{{itemList | priceFilters}}</span>
        <span class="cfav"><img src="~assets/img/common/collect.svg" />{{itemList.cfav}}</span>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodListItem',
    props: {
      itemList: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    computed:{
      //图片懒加载
      showItemImage(){
        return  this.itemList.image || this.itemList.show.img
      }
    },
    methods: {
      //使用事件总线将图片加载完成信息记录下来，用于其他组件使用
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      },

      //点击商品进入详情页面
      clickGoods(){
        if(this.itemList.iid!==undefined){
          this.$router.push('/detail/'+this.itemList.iid)
        }
        else{

          this.$router.push('/detail/'+this.itemList.item_id)
        }
      }
    },
    filters:{
      priceFilters(itemList){
        if(itemList.orgPrice !== undefined){
          return itemList.orgPrice
        }
        else{
          return '￥'+itemList.discountPrice
        }
      }
    }
  }
</script>

<style>
  .good-list-item {
    position: relative;
    /* padding-bottom: 42px; */
    width: 48%;
    font-size: 12px;
  }

  .good-list-item img {
    width: 100%;
    border-radius: 4px;
  }

  .good-list-item-msg p {
    height: 25px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* 下方注释解决webkit-box-orient属性丢失问题 */
    /* autoprefixer: ignore next */
    -webkit-box-orient: vertical;
    margin-top: 3px;
    margin-bottom: 4px;
  }

  .price-msg {
    display: flex;
    justify-content: space-between;
    height: 25px;
    line-height: 25px;
  }

  .price-msg span {
    padding: 0 5px;
  }

  .cfav img {
    width: 14px;
    height: 14px;
    margin-top: -4px;
    padding-top: 0px;
    vertical-align: middle;
  }
  .price-color{
    color: var(--color-tint);
  }
</style>
