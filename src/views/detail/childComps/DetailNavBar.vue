<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="detail-nav-bar-left" @click="clickBack">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="detail-nav-bar-conter">
       <div v-for="(item,index) in detailItems"
       :key="index"
       :class="{isActive:index===detailItemIndex}"

       @click="detailItemClick(index)">{{item}}</div>
      </div>

    </nav-bar>
  </div>
</template>

<script>
  //导入导航组件
  import NavBar from 'components/common/navbar/NavBar.vue'
  export default{
    name:'DetailNavBar',
    data(){
      return{
        detailItems:['商品','参数','评论','推荐'],
        detailItemIndex:0
      }
    },
    components:{
      NavBar
    },

    methods:{

      //监听点击的选项
      detailItemClick(index){
        this.detailItemIndex = index
        this.$emit('detailItemClick',index)
      },

      //导航栏返回按钮
      clickBack(){
        this.$router.go(-1)
      }

    }
  }
</script>

<style>
  .detail-nav-bar{
    background-color: #fff;
  }
  .detail-nav-bar-conter{
    display: flex;
  }
  .detail-nav-bar-left img{
    margin-top: 10px;
  }
  .detail-nav-bar-conter div{
    flex: 1;
  }
  .isActive{
    color: var(--color-high-text);
  }
</style>
