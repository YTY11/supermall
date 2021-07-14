<template>

  <div class="recommend-view">
    <div v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default{
    name:'RecommendView',
    props:{
      recommends:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style>
  .recommend-view{
    display: flex;
    text-align: center;
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 14px;
    padding-bottom: 15px;
    border-bottom: 10px solid rgba(197,198,208,0.3);

  }
  .recommend-view div{
    flex: 1;

  }
  .recommend-view img{
    width: 70px;
    height: 70px;
  }
</style>
