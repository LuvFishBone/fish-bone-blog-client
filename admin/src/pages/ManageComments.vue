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
        <Modal
            v-model="replyModal.display"
            width=800
            :title=replyModal.title
            @on-ok="replyModalOk">
            <textarea id="articleComment"></textarea>
        </Modal>
    </Layout>
</template>

<script>

    import Layout from '@/components/Layout'
    import moment from 'moment'
    import 'font-awesome/css/font-awesome.min.css'
    import 'simplemde/dist/simplemde.min.css'
    import SimpleMDE from 'simplemde'

    export default {
        data () {
            return {
                replyModal: {
                    display: false,
                    title: '',
                    commentId: '',
                    hasReply: ''
                },
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
                        width: 180,
                        align: 'center',
                        render: (h, params) => {
                            let approveBtnName = '通过', 
                                approveBtn = 'primary',
                                isPass = 1
                            if (params.row.isPass) {
                                approveBtn = 'warning'
                                approveBtnName = '审核'
                                isPass = 0
                            }
                            return h('div',[
                                h('Button', {
                                    props: {
                                        type: approveBtn,
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.updateCommentIsPassById(params.row.commentId, isPass)
                                        }
                                    }
                                }, approveBtnName),
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.replyComment(params.row.commentId, params.row.replyComment)
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
                                            this.deleteCommentById(params.row.commentId, params.row.replyComment)
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
                axios.get('/api/v1/comments/total/').then(res => {
                    this.total = res.data[0].total
                })
            },
            getLimitComments(pageNum) {
                const offset = (pageNum-1) * this.pageSize
                axios.get(`/api/v1/comments/allComments/${offset}/${this.pageSize}`).then(res => {
                    if(res.status === 200) {
                        this.comments = res.data
                    }
                })
            },
            pageChage(num) {
                this.getLimitComments(num)
            },
            updateCommentIsPassById(id, statu) {
                axios.put(`/api/v1/comments/update/${id}`, { statu:  statu }).then((res) => {
                    if (res.status === 200) {
                        this.getLimitComments(this.currentPageNum)
                        this.$Message.success({content: '更新成功！'})
                    }
                })
            },
            deleteCommentById(id, reply) {
                axios.delete(`/api/v1/comments/${id}`, { hasRely: reply }).then((res) => {
                    if (res.status === 200) {
                        this.getLimitComments(this.currentPageNum)
                        this.$Message.success({content: '删除成功！'})
                    }
                })
            },
            initSimpleMDE() {
                this.simplemde = new SimpleMDE({
                    element: document.getElementById("articleComment"),
                    autoDownloadFontAwesome: false,
                    spellChecker: false,
                })
            },
            replyComment(id, reply) {
                this.replyModal.title = '回复评论'
                if (reply) this.replyModal.title = '更新评论'
                this.replyModal.display = true
                reply = reply ? reply : ''
                this.replyModal.commentId = id
                this.replyModal.hasReply = reply
                setTimeout(() => {
                    this.simplemde.value(reply)
                }, 300)
            },
            replyOperation(id, hasRely, replyComment) {
                axios.post('/api/v1/comments/reply/operate/', {
                    commentId: id,
                    hasReply: hasRely,
                    replyComment: replyComment
                })
                .then(res => {
                    let tips = hasRely ? '更新回复成功！' : '回复成功！'
                    if (res.status === 200) {
                        this.$Message.success({
                            content: tips
                        })
                        this.getLimitComments(this.currentPageNum)
                    }
                })
            },
            replyModalOk() {
                this.replyOperation(this.replyModal.commentId, this.replyModal.hasReply, this.simplemde.value())     
            }
        },
        mounted() {
            this.initSimpleMDE()
            this.getTotal()
            this.getLimitComments(1)
        },
    }
</script>
