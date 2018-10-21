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
    import moment from 'moment'
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
                        key: 'articleId',
                        align: 'center',
                    },
                    {
                        title: '标题',
                        key: 'articleTitle',

                    },
                    {
                        title: '评论',
                        key: 'comment',
                        align: 'center',
                        render: (h, params) => {
                            return h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.$Modal.info({
                                                width: 700,
                                                title: '文章评论',
                                                content: params.row.comment
                                            })
                                        }
                                    }
                            }, '预览')
                        }
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
                        key: 'personalSite',
                        render: (h, params) => {
                            return h('Button', {
                                props: {
                                    type: 'text',
                                    target: '_blank',
                                    to: params.row.personalSite,
                                },
                            }, params.row.personalSite)
                        }
                    },
                    {
                        title: '评论时间',
                        key: 'commentTime',
                        width: 140,
                        render:(h, params) => {
                            return h('span', moment(params.row.commentTime).format('YYYY/MM/DD HH:mm'))
                        }
                    },
                    {
                        title: '回复',
                        key: 'replyComment',
                        align: 'center',
                        render: (h, params) => {
                            if (params.row.replyComment) {
                                return h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.$Modal.info({
                                                width: 700,
                                                title: '回复内容',
                                                content: params.row.replyComment
                                            })
                                        }
                                    }
                                }, '预览')
                            }
                        }
                    },
                    {
                        title: '回复时间',
                        key: 'replyTime',
                        width: 140,
                        align: 'center',
                        render: (h, params) => {
                            if (params.row.replyTime) {
                                return h('span',moment(params.row.replyTime).format('YYYY/MM/DD HH:mm'))
                            }
                        }
                    },
                    {
                        title: '状态',
                        key: 'isPass',
                        align: 'center',
                        render: (h, params) => {
                            let status = '待审', color = '#ff9900'
                            if (params.row.isPass) {
                                status = '通过'
                                color = '#2d8cf0'
                            }
                            return h('span', {
                                style: {
                                    color: color
                                }
                            }, status)
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div',[
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            
                                        }
                                    }
                                }, '回复'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            
                                        }
                                    }
                                }, '删除')
                            ])
                        }
                    }
                    
                ],
                comments: [],
                total: 0,
                pageSize: 10,
                currentPageNum: 1
            }
        },
        components: {
            Layout
        },
        methods: {
            getTotal() {
                axios.get('/api/v1/comments/total/').then((res) => {
                    this.total = res.data[0].total
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
        },
        mounted() {
            this.getTotal()
            this.getLimitComments(1)
        },
    }
</script>

<style>

</style>
