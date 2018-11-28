<template>
    <base-layout>
        <content-aside-layout>
            <template slot="contentView">
                <Loading :loadingInfo="{display: isLoading ? 'block' : 'none'}" />
                <article-detail :articleInfo="article" />
            </template>
            <template slot="rightSide">
                <side-panel v-bind:titleInfo="{name:'目录'}">
                    <catalog-list />
                </side-panel>
            </template>
        </content-aside-layout>
    </base-layout>
</template>

<script>
    import BaseLayout from '@/components/BaseLayout'
    import ContentAsideLayout from '@/components/ContentAsideLayout'
    import SidePanel from '@/components/SiderPanel'
    import CatalogList from '@/components/CatalogList'
    import ArticleDetail from '@/components/ArticleDetail'
    import Loading from '@/components/Loading'

    export default {
        data () {
            return {
                article: {},
                isLoading: null
            }
        },
        mounted() {
            this.isLoading = true
            if (this.$route.query.uniqueMark) {
                const uniqueMark = this.$route.query.uniqueMark
                axios.get(`/api/v1/articles/${uniqueMark}`).then(res => {
                    if(res.status === 200) {
                        this.article = res.data[0]
                        this.isLoading = false
                    }
                })
            }
        },
        components: {
            Loading,
            BaseLayout,
            ContentAsideLayout,
            SidePanel,
            CatalogList,
            ArticleDetail,
        }
    }
</script>

