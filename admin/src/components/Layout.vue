<template>
    <div class="layout">
        <Layout>
            <Sider ref="menuLeft" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
              <LeftMenu></LeftMenu>
            </Sider>
            <Layout>
                <Header></Header>
                <Content :style="{margin: '10px', background: '#fff', minHeight: '260px'}">
                    <slot></slot>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    import LeftMenu from './LeftMenu'
    import Header from './Header'
    export default {
        data () {
            return {
              isCollapsed: false
            }
        },
        components:{
          LeftMenu,
          Header
        },
        computed: {
          
        },
        methods: {

        },
        mounted(){
          //this.$refs.menuLeft.toggleCollapse();
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
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
  }
</style>
