<template>
    <div id="fishbone">
        <div class="header-box">
            <header id="pc-header" class="pc-header">
                <div class="pc-header-main">
                    <a class="logo"></a>
                    <div class="menu-box">
                        <ul class="menu">
                            <li class="active"><a>主页</a></li>
                            <li><a>归档</a></li>
                            <li><a>标签</a></li>
                            <li><a>关于</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <header id="mobile-header" class="mobile-header">
                <a class="menu-button"></a>
                <a class="logo"></a>
            </header>
        </div>
        <div class="main-box">
            <slot></slot>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Footer from '@/components/Footer'
    export default {
        data () {
            return {

            }
        },
        components: {
            Footer
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
                max-width: 960px;
                height: 100%;
                margin: auto;
            }
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
            header.mobile-header{
                .menu-button{
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    top: 50%;
                    left: 12px;
                    transform: translateY(-50%);
                    background: url('../assets/img/menu_icon.png') center center no-repeat;
                    background-size: 24px;
                }
                .logo{
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    background: url('../assets/img/fishbone_72px.png') center center no-repeat;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-size: 30px;
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

