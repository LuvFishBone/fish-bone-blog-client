<template>
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
</template>

<script>
    export default{
        computed: {
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>

<style>

</style>
