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
        padding-top: 20px;
        .content-view{
            min-height: 250px;
            background: #fff;
        }
    }
</style>

