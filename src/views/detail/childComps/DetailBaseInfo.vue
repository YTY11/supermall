<template>
  <!-- 加个判断，没有数据不显示 -->
  <div v-if="Object.keys(goods).length !== 0" class="detail-base-info">
    <div class="detail-base-title">
      {{ goods.title }}
    </div>
    <div class="detail-base-price">
      <span :style="{color:goods.discountBgColor}"
            class="new-price">{{ goods.newPrice }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discountDesc"
            :style="{background:goods.discountBgColor}"
            class="discountDesc">{{ goods.discountDesc }}</span>

      <div class="detail-base-columns">
        <div class="detail-base-columns1">{{ goods.columns[0] }}</div>
        <div class="detail-base-columns2">{{ goods.columns[1] }}</div>
        <div class="detail-base-columns3">{{ goods.services[1].name }}</div>
      </div>
    </div>

    <div class="detail-base-services">
      <span v-for="(item,index) in goods.services" :key="index">
        <img :src="item.icon"/>{{item.name}}
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .detail-base-title {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 0 10px;
  }

  .new-price {
    font-size: 24px;
  }

  .old-price {
    text-decoration: line-through;
    font-size: 13px;
    margin-left: 5px;
  }

  .detail-base-price {
    padding: 0 10px 10px 10px;
  }

  .discountDesc {
    font-size: 12px;
    color: white;
    border-radius: 8px;
    padding: 3px;
    margin-left: 5px;
    position: relative;
    top: -7px;
  }

  .detail-base-columns {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 15px;
  }

  .detail-base-columns2 {
    flex: 1;
  }

  .detail-base-services {
    box-shadow: 0 -1px 1px rgba(0, 0, 0 , 0.1);
    border-bottom: 2px solid rgba(0,0,0,0.1);
    height: 60px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* 下方注释解决webkit-box-orient属性丢失问题 */
    /* autoprefixer: ignore next */
    -webkit-box-orient: vertical;
    padding: 10px;

  }

  .detail-base-services span img{
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-left: 5px;

  }
</style>
