<template>
<div class="detail-commen-info">
  <div class="commen-info-top">用户评价</div>
  <div class="commen-info-title" v-if="commentInfo.user">
    <img :src="commentInfo.user.avatar"/>
    <span>{{commentInfo.user.uname}}</span>
  </div>
  <div class="commen-info-msg">{{commentInfo.content}}</div>
  <div class="commen-info-type-and-time">{{commentInfo.created | dateFormat}} {{commentInfo.style}}</div>
</div>
</template>

<script>
//时间格式化函数
import {dateFormat} from "@/common/utils";

export default {

  name: "DetailCommentInfo",
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    //时间格式化
    dateFormat(data){
      return  dateFormat("YYYY-mm-dd HH:MM:SS",new Date(data*1000))
    }
  }

}
</script>

<style scoped>

.detail-commen-info{
  width: 100%;
  padding: 0 10px;
  margin-bottom: 30px;
}
.commen-info-top{
  width: 100%;
  border-top: 3px solid rgba(0,0,0,0.05);
  border-bottom: 1px solid rgba(0,0,0,0.1);
  font-size: 16px;
  padding: 20px 5px 5px 5px;
}
.commen-info-title{
  display: flex;
  font-size: 16px;
  align-items: center;
  margin-top: 10px;
}
.commen-info-title img{
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.commen-info-title span{
  margin-left: 8px;
}
.commen-info-msg{
  padding: 5px 8px;
  line-height: 22px;
}
.commen-info-type-and-time{
  padding: 5px 8px;
  font-size: 16px;

}

</style>
