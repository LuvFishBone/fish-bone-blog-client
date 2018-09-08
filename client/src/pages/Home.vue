<template>
    <base-layout>
        <content-aside-layout>
            <template slot="contentView">
                <article-list />
            </template>
            <template slot="rightSide">
                <right-aside-layout>
                    <blog-intro></blog-intro>
                    <right-aside-tags></right-aside-tags>
                </right-aside-layout>
            </template>
        </content-aside-layout>
    </base-layout>
</template>

<script>

    import BaseLayout from '@/components/BaseLayout'
    import ContentAsideLayout from '@/components/ContentAsideLayout'
    import RightAsideLayout from '@/components/RightAsideLayout'
    import ArticleList from '@/components/ArticleList'
    import BlogIntro from '@/components/BlogIntro'
    import RightAsideTags from '@/components/RightAsideTags'

    export default {
        components: {
            BaseLayout,
            ContentAsideLayout,
            RightAsideLayout,
            ArticleList,
            BlogIntro,
            RightAsideTags,
        }        
    }
</script>

<style scoped lang="less">
    
</style>

