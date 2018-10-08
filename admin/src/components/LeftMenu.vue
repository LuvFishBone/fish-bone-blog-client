<template>
  <Menu 
    :active-name="getMenuSelectedName" 
    theme="dark" 
    width="auto" 
    :class="menuitemClasses" 
    @on-select="setMenuSelectedName">
    <MenuItem name="publishAnalyze" to="/publishAnalyze">
        <Icon type="md-analytics" />
        <span>发布概览</span>
    </MenuItem>
    <MenuItem name="types" to="/types">
        <Icon type="md-list-box" />
        <span>类别管理</span>
    </MenuItem>
    <MenuItem name="tags" to="/tags">
        <Icon type="ios-pricetags" />
        <span>标签管理</span>
    </MenuItem>
    <MenuItem name="articlelist" to="/articlelist">
        <Icon type="ios-paper" />
        <span>文章列表</span>
    </MenuItem>
    <MenuItem name="publishArticle" to="/publishArticle">
        <Icon type="ios-paper-plane" />
        <span>文章发布</span>
    </MenuItem>
    <MenuItem name="manageComments" to="/manageComments">
        <Icon type="ios-chatbubbles" />
        <span>评论管理</span>
    </MenuItem>
    <MenuItem name="about" to="/about">
        <Icon type="md-person" />
        <span>About Me</span>
    </MenuItem>
  </Menu>
</template>

<script>

    import { mapMutations, mapGetters } from 'vuex'
    import { MENU_NAME_SELECTED } from '@/store/mutation-types'

    export default{
        computed: {
            menuitemClasses () {
                return [
                    'menu-item',
                    this.getIsCollapsed ? 'collapsed-menu' : ''
                ]
            },
            ...mapGetters([
                'getMenuSelectedName',
                'getIsCollapsed'
            ]),
        },
        methods: {
            ...mapMutations({
                setMenuSelectedName: MENU_NAME_SELECTED
            })
        }
    }
</script>

<style scoped lang="less">
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
</style>
