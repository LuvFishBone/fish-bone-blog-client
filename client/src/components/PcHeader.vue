<template>
  <header id="pc-header" class="pc-header">
    <div class="pc-header-main">
        <a class="logo"></a>
        <div class="menu-box">
            <ul class="menu">
                <li v-for="item in menus" :key="item.name" :class="{active: item.name == currentMenu}">
                    <router-link :to="{name:item.name}">{{item.desc}}</router-link>
                </li>
            </ul>
        </div>
    </div>
  </header>
</template>

<script>

    import { menus } from '@/utils/static-data'
    import { mapGetters, mapMutations } from 'vuex'
    import { SET_CURRENT_MENU_NAME } from '@/store/mutation-types'

    export default{
        data () {
            return {
                currentMenu: '',
                menus: []
            }
        },
        beforeMount () {
            this.menus = menus
            this.currentMenu = this.$route.name
        }
    }
</script>

<style scoped lang="less">
  header.pc-header{
    .pc-header-main{
        display: flex;
        .logo{
            width: 50px;
            height: 50px;
            margin-right: 20px;
            background: url('../assets/img/fish_logo.png') center center no-repeat;
            background-size: 50px;
            cursor: pointer;
        }
        .menu-box{
            flex: 1;
            .menu{
                display: flex;
                height: 100%;
                li{
                    height: 100%;
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    margin: 0;
                    font-size: 17px;
                    cursor: pointer;
                    a{
                        transition: all .3s ease-in-out;
                    }
                    a:hover{
                        color:#007fff;
                    }
                }
                li.active{
                    a{
                        color: #007fff;
                    } 
                }
            }
        }
    }
  }
</style>