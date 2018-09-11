<template>
  <div class="mobile-menu-shade" :class="{open: mobileMenuDisplay}" @click.stop="menuClickHandle">
    <div id="mobile-menu" :class="{'mobile-menu': true, open: mobileMenuDisplay}">
      <ul class="main-menu">
          <li v-for="item in menus" :key="item.name" @click.stop="menuClickHandle">
            <router-link :to="{name: item.name}">
              <i :class="['icon', item.icon]"></i> {{item.desc}}
            </router-link>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>

  import { mapGetters, mapMutations } from 'vuex'
  import { menus } from '@/utils/static-data'
  import { MOBILE_MENU_TOGGLE } from '@/store/mutation-types'

  export default {
    data () {
      return {
        menus: []
      }
    },
    beforeMount () {
      this.menus = menus;
    },
    methods: {
      ...mapMutations({
        menuToggle: MOBILE_MENU_TOGGLE
      }),
      menuClickHandle (e) {
        console.log(e)
        this.menuToggle()
      }
    },
    computed: {
      ...mapGetters([
        'mobileMenuDisplay'
      ])
    }
  } 
</script>

<style scoped lang="less">
.mobile-menu-shade{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  background: rgba(0,0,0,.6);
  // transition: opacity 0.5s cubic-bezier(0.5, 0, 0, 1);
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
      transform: translate(-244px, 0);
      .main-menu{
          height: 100%;
          overflow-y: auto;
          li{
              width: 200px;
              height: 50px;
              line-height: 50px;
              border-bottom: 1px solid #f6f6f6; /*no*/
              text-align: center;
              overflow: hidden;
              font-size: 18px;
              a{
                display: block;
                width: 100%;
              }
          } 
      }
  }
  .mobile-menu.open{
    transform: translate(0, 0);
  }
}
.mobile-menu-shade.open{
  z-index: 255;
  opacity: 1;
}
</style>
