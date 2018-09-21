<template>
    <base-layout>
        <content-aside-layout>
            <template slot="contentView">
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

    export default {
        data () {
            return {
                article:{}
            }
        },
        beforeRouteEnter (to, from, next) {
            const uniqueMark = to.params.uniqueMark
            axios.get(`/api/v1/articles/${uniqueMark}`).then(res => {
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
            SidePanel,
            CatalogList,
            ArticleDetail,
        }
    }
</script>

