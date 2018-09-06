<template>
    <base-layout>
        <div class="home-main">
            <!-- <article-list />
            <right-aside /> -->
            <content-layout>
                <template slot="contentView">
                    <ArticleList />
                </template>
                <template slot="rightSide">
                    <right-aside-layout>
                        <blog-intro></blog-intro>
                        <right-aside-tags></right-aside-tags>
                    </right-aside-layout>
                </template>
            </content-layout>
        </div>
    </base-layout>
</template>

<script>

    import BaseLayout from '@/components/BaseLayout'
    import ContentLayout from '@/components/ContentLayout'
    import RightAsideLayout from '@/components/RightAsideLayout'
    import ArticleList from '@/components/ArticleList'
    import BlogIntro from '@/components/BlogIntro'
    import RightAsideTags from '@/components/RightAsideTags'

    export default {
        components: {
            BaseLayout,
            ContentLayout,
            RightAsideLayout,
            ArticleList,
            BlogIntro,
            RightAsideTags,
        }        
    }
</script>

<style scoped lang="less">
    .home-main{
        padding-top: 20px;
    }
</style>

