<template>
    <div id="fishbone">
        <div class="header-box">
            <header class="">

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
                max-width: 960px;
                margin: auto;
                display: flex;
                align-items: center;
            }
        }
    }
</style>

