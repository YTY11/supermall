<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
      :key="index" @click="tabClick(index)" :class="{isActive:index===clickNum}">
       <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'TabControl',
    props:{
      titles:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        clickNum:0
      }
    },
    methods:{
      tabClick(index){
        this.clickNum = index
        //子传父 传递用户点击数据
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style>
  .tab-control{
    width: 100%;
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    color: #000;
  }
  .tab-control div{
    flex: 1;
  }
  .isActive{
    color: var(--color-high-text);
  }
  .isActive span{
    padding: 5px;
    border-bottom: 1px solid var(--color-high-text);
  }
</style>
