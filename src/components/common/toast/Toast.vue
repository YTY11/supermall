<template>
<div class="toast" v-if="isShow">
  <div>{{message}}</div>
</div>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return{
      message:"",
      isShow:false
    }
  },
  methods:{
    //显示信息
    show(msg = "默认信息",showTime = 2000){
      this.isShow = true
      this.message = msg
      setTimeout(()=>{
        this.isShow = false
        this.message = ""
      },showTime)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 9;
  background-color: rgba(0,0,0,0.6);
  padding: 5px 10px;
  border-radius: 8px;
  color: #fff;
}
</style>
