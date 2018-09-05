<template>
    <div id="fishbone">
        <div class="header-box">
            <header>
                <div id="mobile-header">
                    <div class="mobile-header-menu">
                        <a class="menu-button"></a>
                    </div>
                </div>
                <div id="pc-header">
                    <div class="pc-header-menu">
                        <a class="logo">
                            <img src="../assets/img/fishbone_72px.png" />
                        </a>
                        <nav>
                            <ul class="menu">
                                <li class="menu-item active">
                                    <a href="/">首页</a>
                                </li>
                                <li class="menu-item">
                                    <a>归档</a>
                                </li>
                                <li class="menu-item">
                                    <a>标签</a>
                                </li>
                                <li class="menu-item">
                                    <a>关于</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
        <div class="main-box">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style scoped lang="less">
    #fishbone{
        position: relative;
        .header-box{
            position: fixed;
            top: 0;
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #f1f1f1;
            color: #909090;
            z-index: 250;
            background: #fff;
            header{
                height: 100%;
                .pc-header-menu{
                    height: 100%;
                    max-width: 960px;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    .logo{
                        display: inline-block;
                        width: 50px;
                        height: 50px;
                        img{
                            width: 100%;
                        }
                    }
                    nav{
                        height: 50px;
                        flex: 1;
                        .menu{
                            height: 100%;
                            display: flex;
                            li{
                                color: #71777c;
                                padding: 0 1.2rem;
                                -webkit-box-pack: center;
                                -ms-flex-pack: center;
                                justify-content: center;
                                cursor: pointer;
                            }
                            .menu-item{
                                display: -webkit-box;
                                display: -ms-flexbox;
                                display: flex;
                                -webkit-box-align: center;
                                -ms-flex-align: center;
                                align-items: center;
                                height: 100%;
                                margin: 0;
                            }
                            .active{
                                a{
                                    color: #007fff
                                }
                            }
                        }
                    }
                }
                .mobile-header-menu{
                    height: 100%;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    .menu-button{
                        width: 24px;
                        height: 24px;
                        margin-left: 20px;
                        background: url(../assets/img/menu_icon.png) center center no-repeat;
                        background-size: 24px;
                    }
                }
            }
        }

        .main-box{
            padding-top: 50px;
            max-width: 960px;
            margin: auto;
        }
    }
</style>

