<template>
    <base-layout>
        <content-aside-layout>
            <template slot="contentView">
                <article-list />
            </template>
            <template slot="rightSide">
                <right-aside />
            </template>
        </content-aside-layout>
    </base-layout>
</template>

<script>

    import BaseLayout from '@/components/BaseLayout'
    import ContentAsideLayout from '@/components/ContentAsideLayout'
    import ArticleList from '@/components/ArticleList'
    import RightAside from '@/components/RightAside'
    
    export default {
        components: {
            BaseLayout,
            ContentAsideLayout,
            ArticleList,
            RightAside,
        }        
    }
</script>

