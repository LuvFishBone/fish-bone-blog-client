<template>
  <Header :style="{padding: 0}" class="layout-header-bar">
    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
    <div class="user-info">
        <Menu class="user-info-menu" mode="horizontal" active-name="1" @on-select="handleMenuItemClick">
            <Submenu name="user-menu">
                <template slot="title">
                    <Icon type="ios-contact" size="24" />FishBone
                </template>
                <MenuGroup title="操作">
                    <MenuItem name="updatePwd">修改密码</MenuItem>
                    <MenuItem name="loginOut">退出登录</MenuItem>
                </MenuGroup>
            </Submenu>
        </Menu>
    </div>
  </Header>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'
    import { MENU_DISPLAY_TOGGLE } from '@/store/mutation-types'
    import md5 from 'md5'
    export default{
        data() {
          return {
            oldPwd: '',
            newPwd: '',
            confirmPwd: ''
          }
        },
        computed: {
          rotateIcon() {
              return [
                'menu-icon',
                this.getIsCollapsed() ? 'rotate-icon' : ''
              ];
          },

      },
      methods: {
        ...mapGetters([
            'getIsCollapsed'
        ]),
        ...mapMutations({
          displayMenu: MENU_DISPLAY_TOGGLE
        }),
        updatePwd() {
          this.$Modal.confirm({
              title: '修改密码',
              closable: true,
              render: (h) => {
                  return h('div',[
                    h('Input', {
                      style: { margin: '5px 0' },
                      props: {
                          value: this.oldPwd,
                          autofocus: true,
                          placeholder: '输入旧密码',
                          type: 'password',
                      },
                      on: {
                          input: (val) => {
                              this.oldPwd = val
                          },
                      }
                    }),
                    h('Input', {
                      style: { margin: '5px 0' },
                      type: 'password',
                      props: {
                          value: this.newPwd,
                          autofocus: true,
                          placeholder: '输入新密码',
                          type: 'password',
                      },
                      on: {
                          input: (val) => {
                              this.newPwd = val
                          }
                      }
                    }),
                    h('Input', {
                      style: { margin: '5px 0' },
                      type: 'password',
                      props: {
                          value: this.confirmPwd,
                          autofocus: true,
                          placeholder: '请确认新密码',
                          type: 'password',
                      },
                      on: {
                          input: (val) => {
                              this.confirmPwd = val;
                          }
                      }
                    }), 
                ])
              },
              onOk: () => {
                if(!this.oldPwd) {
                  this.$Message.error({
                    content: '旧密码不能为空！'
                  })
                  return;
                }
                if(!this.newPwd || !this.confirmPwd) {
                  this.$Message.error({
                    content: '新密码不能为空！'
                  })
                  return;
                }
                if(this.newPwd !== this.confirmPwd) {
                  this.$Message.error({
                    content: '两次密码输入不一样'
                  })
                  return;
                }
                axios.put('api/v1/password', { oldpwd: md5(md5(this.oldPwd)), newpwd: md5(md5(this.newPwd)) })
                .then(res => {
                  const data = res.data
                  if (data.msg) {
                    this.$Message.error({
                      content: data.msg
                    })
                  }
                  this.$Message.success({
                    content: '修改成功！'
                  })
                })
              },
          })
        },
        loginOut() {
          localStorage.clear('AuthToken')
          this.$router.push('/')
        },
        handleMenuItemClick (name) {
          this[name]()
        },
        collapsedSider() {
          this.displayMenu()
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
  .ivu-modal{
    .ivu-input-type{
      margin-top: 10px;
    }
  }
</style>
