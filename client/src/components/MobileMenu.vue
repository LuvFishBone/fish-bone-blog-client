<template>
  <div id="mobile-menu" class="mobile-menu">
    <ul class="main-menu">
        <li><router-link :to="{name:'index'}"><i class="icon ion-md-home"></i> 主页</router-link></li>
        <li><router-link :to="{name:'pigeonhole'}"><i class="icon ion-md-time"></i> 归档</router-link></li>
        <li><router-link :to="{name:'tags'}"><i class="icon ion-md-pricetags"></i> 标签</router-link></li>
        <li><router-link :to="{name:'about'}"><i class="icon ion-md-person"></i> 关于</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {

  } 
</script>

<style scoped lang="less">
  .mobile-menu{
      position: fixed;
      z-index: 260;
      background-color: #f9f9f9;
      padding: 20px;
      height: 100%;
      top: 0;
      left: 0;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
      transform: translate(-240px, 0);
      opacity: .95;
      .main-menu{
          li{
              width: 200px;
              height: 40px;
              border-bottom: 1px solid #f6f6f6;
              text-align: center;
              line-height: 40px;
              overflow: hidden;
          } 
      }
  }
</style>
