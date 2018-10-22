<template>
    <div class="layout">
        <Layout>
            <Sider ref="menuLeft" hide-trigger collapsible :collapsed-width="78" v-model="getIsCollapsed">
              <LeftMenu></LeftMenu>
            </Sider>
            <Layout>
                <Header></Header>
                <Content :style="{margin: '10px', background: '#fff'}">
                    <slot></slot>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'
    import LeftMenu from './LeftMenu'
    import Header from './Header'
    import { MENU_NAME_SELECTED } from '@/store/mutation-types'

    export default {
        data () {
            return {
              isCollapsed: this.getIsCollapsed
            }
        },
        components:{
          LeftMenu,
          Header
        },
        computed: {
            ...mapGetters([
                'getIsCollapsed'
            ])
        },
        methods: {
            ...mapMutations({
                setMenuSelectedName: MENU_NAME_SELECTED
            })
        },
        mounted(){
          const routeName = this.$route.name
          this.setMenuSelectedName(routeName)
        }
    }
</script>

<style scoped lang="less">
  .layout{
    height: 100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    .ivu-layout-has-sider{
        height: 100%;
        .ivu-layout-sider{
            z-index: 0;
        }
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
  }
</style>
