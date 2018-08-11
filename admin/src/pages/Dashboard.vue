<style scoped lang="less">
    .user-info{
        display: inline-block;
        float: right;
        .user-info-menu{
            height: 48px;
            line-height: 48px;
        }
    }
    .layout{
        height: 100%;
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .ivu-layout-has-sider{
        height: 100%;
    }
    .layout-header-bar{
        height: 48px;
        line-height: 48px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
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
    .ivu-menu-horizontal.ivu-menu-light:after{
        height: 0;
    }
    .ivu-layout-content{
        margin: 10px;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider ref="menuLeft" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1" to="/">
                        <Icon type="ios-analytics-outline" />
                        <span>发布概览</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="ios-paper-plane" />
                        <span>文章发布</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="ios-paper" />
                        <span>文章列表</span>
                    </MenuItem>
                    <MenuItem name="1-4">
                        <Icon type="ios-pricetags" />
                        <span>标签管理</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                    <div class="user-info">
                        <Menu class="user-info-menu" mode="horizontal" active-name="1">
                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="ios-contact" size="24" />FishBone
                                </template>
                                <MenuGroup title="操作">
                                    <MenuItem name="3-1">修改密码</MenuItem>
                                    <MenuItem name="3-2">退出登录</MenuItem>
                                </MenuGroup>
                            </Submenu>
                        </Menu>
                    </div>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.menuLeft.toggleCollapse();
            }
        }
    }
</script>
