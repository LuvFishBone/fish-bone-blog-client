<template>
    <div class="main-content">
        <div class="content-view">
            <slot name="contentView"></slot>
        </div>
        <div id="right-aside" class="right-side">
            <slot name="rightSide"></slot>
        </div>
    </div>
</template>

<style scoped lang="less">
    .main-content{
        padding-top: 10px;
        display: flex;
        .content-view{
            flex: 1;
            max-width: 700px;
            word-wrap: break-word;
        }
        .right-side{
            width: 240px;
            min-height: 250px;
            min-width: 240px;
            margin-left: 20px;
        }
    }
</style>

