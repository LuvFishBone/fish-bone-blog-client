<template>
    <div class="sider-panel">
        <div class="title" v-if="titleInfo">
            <span class="name">{{titleInfo.name}}</span>
            <router-link class="more" v-if="titleInfo.more" :to="{name: titleInfo.more.pathName}">更多</router-link>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            titleInfo: Object,
        }
    }
</script>

<style scoped lang="less">
    .sider-panel{    
        border-radius: 2px;
        margin-bottom: 15px;
        overflow: hidden;
        background-color: #fff;
        .title{
            height: 45px;
            line-height: 45px;
            padding-left: 15px;
            padding-right: 15px;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            border-bottom: 1px solid #f6f6f6; /*no*/
            .name{
                font-size: 16px;
            }
            .more{
                color: #007fff;
                font-size: 12px;
            }
        }
        .content{
            padding: 10px;
        }
    }
</style>
