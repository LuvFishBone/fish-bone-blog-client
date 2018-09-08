<template>
    <div id="fishbone">
        <mobile-menu />
        <div class="header-box">
            <pc-header />
            <mobile-header />
        </div>
        <div class="main-box">
            <slot></slot>
        </div>
        <Footer />
    </div>
</template>

<script>
    import MobileMenu from '@/components/MobileMenu'
    import PcHeader from '@/components/PcHeader'
    import MobileHeader from '@/components/MobileHeader'
    import Footer from '@/components/Footer'
    export default {
        data () {
            return {

            }
        },
        components: {
            MobileMenu,
            PcHeader,
            MobileHeader,
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
        }

        .main-box{
            position: relative;
            padding-top: 50px;
            max-width: 960px;
            margin: auto;
        }
    }
</style>

