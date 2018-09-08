<template>
    <base-layout>
        <content-aside-layout>
            <template slot="contentView">
                <article-detail />
            </template>
            <template slot="rightSide">
                <right-aside-layout>
                    <article-catalog />
                </right-aside-layout>
            </template>
        </content-aside-layout>
    </base-layout>
</template>

<script>

    import BaseLayout from '@/components/BaseLayout'
    import ContentAsideLayout from '@/components/ContentAsideLayout'
    import RightAsideLayout from '@/components/RightAsideLayout'
    import ArticleCatalog from '@/components/ArticleCatalog'
    import ArticleDetail from '@/components/ArticleDetail'

    export default {
        components: {
            BaseLayout,
            ContentAsideLayout,
            RightAsideLayout,
            ArticleCatalog,
            ArticleDetail,
        }
    }
</script>

<style scoped lang="less">
    
</style>

