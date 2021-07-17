<template>
<div class="sub-item">
  <a :href="subItem.link">
    <img :src="subItem.image" @load="subItemImageLoad"/>
    <div>{{subItem.title}}</div>
  </a>
</div>
</template>

<script>
export default {
  name: "CategorySubItem",
  props:{
    subItem:{
      type:Object,
      default(){
        return{}
      }

    }
  },
  methods:{
    subItemImageLoad(){
      this.$bus.$emit("subItemImageLoad")
    }
  }
}
</script>

<style scoped>
.sub-item{
  margin: 8px 0;
}
.sub-item img{
  width: 90px;
  height: 90px;
  text-align: center;
}
.sub-item div{
  width: 90px;
  font-size: 16px;
  text-align: center;
  padding-top: 5px;
}

</style>
