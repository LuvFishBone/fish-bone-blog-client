<template>
    <Layout>
        <div class="p10">
            <Table :columns="columns" :data="articles"></Table>
            <Page 
                class-name="p10"
                :total="total"
                :current.sync="currentPageNum"
                :page-size="pageSize"
                show-elevator
                prev-text="Previous"
                next-text="Next"
                @on-change="pageChage"
            />
        </div>
    </Layout>
</template>

<script>
    import Layout from '@/components/Layout'
    export default {
                data () {
            return {
                typeList: [],
                columns: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: '文章ID',
                        key: 'articleId'
                    },
                    {
                        title: '文章标题',
                        key: 'articleTitle'
                    },
                    {
                        title: '昵称',
                        key: 'nickname'
                    },
                    {
                        title: '邮箱',
                        key: 'email'
                    },
                    {
                        title: '个人站点',
                        key: 'personalSite'
                    },
                    {
                        title: '评论',
                        key: 'comment'
                    },
                    {
                        title: '状态',
                        key: 'isPass'
                    },
                    {
                        title: '创建时间',
                        key: 'createTime'
                    },
                    {
                        title: '操作',
                        key: 'action'
                    }
                    
                ],
                articles: [],
                total: 0,
                pageSize: 10,
                currentPageNum: 1
            }
        },
       components:{
           Layout
       },
    }
</script>

<style>

</style>
