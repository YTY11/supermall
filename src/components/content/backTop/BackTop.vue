<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" />
  </div>
</template>

<script>
  export default{
    name:'BackTop',

  }
</script>

<style>
  .back-top{
    position: fixed;

    right: 20px;
    bottom: 69px;
    /* z-index: 10; */
  }
  .back-top img{
    width: 45px;
    height: 45px;
  }
</style>
