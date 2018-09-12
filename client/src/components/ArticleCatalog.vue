
<template>
    <div id="article-catalog" class="article-catalog">
        <div class="title">目录</div>
        <catalog-list />
    </div>
</template>

<script>

    import CatalogList from '@/components/CatalogList'

    export default{
        components:{
            CatalogList
        }
    }
</script>

<style scoped lang="less">
    .article-catalog{
        background: #fff;
        .title{
            height: 45px;
            line-height: 45px;
            padding-left: 15px;
            padding-right: 15px;
            font-size: 16px;
            border-bottom: 1px solid #f6f6f6; /*no*/
        }
    }
</style>
