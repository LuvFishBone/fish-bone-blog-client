<template>
  <Menu 
    :active-name="getMenuSelectedName" 
    theme="dark" 
    width="auto" 
    :class="menuitemClasses" 
    @on-select="setMenuSelectedName">
    <MenuItem name="publishAnalyze" to="/publishAnalyze">
        <Icon type="ios-analytics-outline" />
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
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            ...mapGetters([
                'getMenuSelectedName'
            ]),
        },
        methods: {
            ...mapMutations({
                setMenuSelectedName: MENU_NAME_SELECTED
            })
        }
    }
</script>

<style>

</style>
