<template>
    <base-layout>
        <content-layout>
            <template slot="contentView">
                <article-detail />
            </template>
            <template slot="rightSide">
                <right-aside-layout>
                    <article-catalog />
                </right-aside-layout>
            </template>
        </content-layout>
    </base-layout>
</template>

<script>

    import BaseLayout from '@/components/BaseLayout'
    import ContentLayout from '@/components/ContentLayout'
    import RightAsideLayout from '@/components/RightAsideLayout'
    import ArticleCatalog from '@/components/ArticleCatalog'
    import ArticleDetail from '@/components/ArticleDetail'

    export default {
        components: {
            BaseLayout,
            ContentLayout,
            RightAsideLayout,
            ArticleCatalog,
            ArticleDetail,
        }
    }
</script>

<style scoped lang="less">
    
</style>

