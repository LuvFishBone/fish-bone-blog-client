<template>
    <Layout>
        <div class="p10">
            <Table :columns="columns" :data="comments"></Table>
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
                        key: 'commentId'
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
                        title: '文章评论',
                        key: 'comment'
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
                        title: '评论时间',
                        key: 'commentTime'
                    },
                    {
                        title: '状态',
                        key: 'isPass'
                    },
                    {
                        title: '回复',
                        key: 'replyComment'
                    },
                    {
                        title: '回复时间',
                        key: 'replyTime'
                    },
                    {
                        title: '操作',
                        key: 'action'
                    }
                    
                ],
                comments: [],
                total: 0,
                pageSize: 2,
                currentPageNum: 1
            }
        },
        components: {
            Layout
        },
        mounted() {
            this.getTotal()
            this.getLimitComments(1)
        },
        methods: {
            getTotal() {
                return axios.get('/api/v1/comments/allCommentsTotal/').then(res => {
                    if(res.status === 200) {
                        //this.total = res.data[0].total
                        console.log(res, 'res----');
                    }
                })
            },
            getLimitComments (pageNum) {
                const offset = (pageNum-1) * this.pageSize
                axios.get(`/api/v1/comments/allComments/${offset}/${this.pageSize}`).then(res => {
                    if(res.status === 200) {
                        this.comments = res.data
                    }
                })
            },
            pageChage (num) {
                this.getLimitComments(num)
            },
        }
    }
</script>

<style>

</style>
