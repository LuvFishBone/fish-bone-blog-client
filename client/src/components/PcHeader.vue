<template>
  <header id="pc-header" class="pc-header">
    <div class="pc-header-main">
        <a class="logo"></a>
        <div class="menu-box">
            <ul class="menu">
                <li class="active"><router-link :to="{name:'index'}">主页</router-link></li>
                <li><router-link :to="{name:'pigeonhole'}">归档</router-link></li>
                <li><router-link :to="{name:'tags'}">标签</router-link></li>
                <li><router-link :to="{name:'about'}">关于</router-link></li>
            </ul>
        </div>
    </div>
  </header>
</template>

<script>
  export default{

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