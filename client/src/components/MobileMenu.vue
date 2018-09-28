<template>
  <div class="mobile-menu-shade" :class="{open: mobileMenuDisplay}" @click="hideMenu">
    <div 
    id="mobile-menu" 
    :class="{'mobile-menu': true, open: mobileMenuDisplay}" 
    @click="hideMenu">
      <ul class="main-menu">
          <li v-for="item in menus" :key="item.name">
            <router-link :to="{name: item.name}">
              <i :class="['icon', item.icon]"></i> {{item.desc}}
            </router-link>
          </li>
      </ul>
      <div class="mobile-article-catalog" v-if="showCatalog">
        <div class="title">
          文章目录
        </div>
        <catalog-list />
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters, mapMutations } from 'vuex'
  import { menus } from '@/utils/static-data'
  import { MOBILE_MENU_TOGGLE, OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU } from '@/store/mutation-types'
  import CatalogList from '@/components/CatalogList'

  export default {
    data () {
      return {
        menus: []
      }
    },
    directives: {
      // clickoutside: {
      //   bind (el, binding, vnode) {
      //     function documentHandler (e) {
      //         if (el.contains(e.target)) {
      //             return false;
      //         }
      //         if (binding.expression) {
      //             binding.value(e);
      //         }
      //     }
      //     el.__vueClickOutside__ = documentHandler;
      //     document.addEventListener('click', documentHandler);
      //   },
      //   unbind (el, binding) {
      //       document.removeEventListener('click', el.__vueClickOutside__);
      //       delete el.__vueClickOutside__;
      //   }
      // }
    },
    beforeMount () {
      this.menus = menus;
    },
    methods: {
      ...mapMutations({
        closeMenu: CLOSE_MOBILE_MENU,
        openMenu: OPEN_MOBILE_MENU
      }),
      showMenu () {
        this.openMenu()
      },
      hideMenu (e) {
        console.log(e.target.className)
        console.log(e.target.className === 'mobile-menu-shade open')
        if(e.target.className === 'mobile-menu-shade open') this.closeMenu()
      }
    },
    components: {
      CatalogList
    },
    computed: {
      ...mapGetters([
        'mobileMenuDisplay'
      ]),
      showCatalog() {
        return this.$route.name === 'article'
      }
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
      height: 100%;
      position: fixed;
      z-index: 260;
      padding: 20px;
      top: 0;
      left: 0;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
      background-color: rgba(255,255,255,.9);
      transform: translate(-244px, 0);
      .main-menu{
          overflow-y: auto;
          li{
              min-width: 200px;
              height: 50px;
              line-height: 50px;
              border-bottom: 1px solid #eaecef; /*no*/
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

  .mobile-article-catalog{
    padding-top: 20px;
    border-bottom: 1px solid #eaecef; /*no*/
    .title{
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #eaecef; /*no*/
      font-size: 18px;
    }
  }

}
.mobile-menu-shade.open{
  z-index: 255;
  opacity: 1;
}
</style>
