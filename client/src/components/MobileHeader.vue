<template>
  <header id="mobile-header" class="mobile-header">
    <a class="menu-button"></a>
    <a class="logo"></a>
  </header>
</template>

<script>
  export default{
    
  }
</script>

<style scoped lang="less">
  header.mobile-header{
    .menu-button{
        position: absolute;
        width: 24px;
        height: 24px;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
        background: url('../assets/img/menu_icon.png') center center no-repeat;
        background-size: 24px;
    }
    .logo{
        position: absolute;
        width: 30px;
        height: 30px;
        background: url('../assets/img/fish_logo.png') center center no-repeat;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-size: 30px;
    }
  }
</style>
