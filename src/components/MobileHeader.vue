<template>
  <header id="mobile-header" class="mobile-header">
    <a class="menu-button" @click.stop="showMenu"></a>
    <router-link :to="{name: 'index'}" class="logo"></router-link>
  </header>
</template>

<script>

  import { mapMutations } from 'vuex'
  import { OPEN_MOBILE_MENU } from '@/store/mutation-types'

  export default{
    methods: {
      ...mapMutations([
        OPEN_MOBILE_MENU
      ]),
      showMenu () {
        this.OPEN_MOBILE_MENU()     
      }
    }
  }
</script>

<style scoped lang="less">
  header.mobile-header{
    .menu-button{
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        background: url('../assets/img/menu_icon.png') center center no-repeat;
        background-size: 30px;
    }
    .logo{
        position: absolute;
        width: 50px;
        height: 50px;
        background: url('../assets/img/fish_logo.png') center center no-repeat;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-size: 50px;
    }
  }
</style>
