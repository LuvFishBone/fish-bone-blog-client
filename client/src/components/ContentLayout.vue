<template>
    <div class="main-content">
        <div class="content-view">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped lang="less">
    .main-content{
        padding-top: 10px;
        .content-view{
            width: 100%;
            word-wrap: break-word;
            min-height: 250px;
            background: #fff;
        }
    }
</style>

