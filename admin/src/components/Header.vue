<template>
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
</template>

<script>
    export default{
        data(){
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
          collapsedSider () {
            this.$refs.menuLeft.toggleCollapse();
          }
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
  .user-info{
    display: inline-block;
    float: right;
    .user-info-menu{
      height: 48px;
      line-height: 48px;
    }
  }
  .layout-header-bar{
    height: 48px;
    line-height: 48px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .ivu-menu-horizontal.ivu-menu-light:after{
    height: 0;
  }
</style>
