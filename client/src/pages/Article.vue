<template>
    <base-layout>
        <content-aside-layout>
            <template slot="contentView">
                <article-detail :articleInfo="article" />
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
        data () {
            return {
                article:{}
            }
        },
        beforeRouteEnter (to, from, next) {
            const articleId = to.params.id
            axios.get(`/api/v1/articles/${articleId}`).then(res => {
                if(res.status === 200) {
                    next((vm) => {
                        vm.article = res.data[0]
                    })
                }
            })
        },
        components: {
            BaseLayout,
            ContentAsideLayout,
            RightAsideLayout,
            ArticleCatalog,
            ArticleDetail,
        }
    }
</script>

