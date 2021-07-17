<template>
  <div class="profile">
    <nav-bar class="profile-nav-bar">
      <div slot="center">个人中心</div>
    </nav-bar>

    <!-- 用户信息 -->
    <user-info/>

    <!-- 余额积分优惠券 -->
    <section class="section">
      <div>
        <span>0.00</span>元
        <div>我的余额</div>
      </div>
      <div>
        <span>0</span>个
        <div>优惠券</div>
      </div>
      <div>
        <span>0</span>个
        <div>积分</div>
      </div>
    </section>

    <!-- 消息 -->
    <list-view/>
  </div>
</template>

<script>
//头部导航
import NavBar from "@/components/common/navbar/NavBar";
//用户信息
import UserInfo from "@/views/profile/childComps/UserInfo";
//消息组件
import ListView from "@/views/profile/childComps/ListView";

  export default{
    name:'Profile',
    components:{
      NavBar,
      UserInfo,
      ListView
    }
  }
</script>

<style>
.profile{

}
.profile-nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
.section{
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  border-bottom: 5px solid rgba(168,167,166,0.1);
  font-size: 14px;
}
.section > div{
  flex: 1;
  text-align: center;
}
.section div span{
  font-size: 20px;
  color: var(--color-tint);
}
.section div div{
  margin-top: 8px;
}

</style>
