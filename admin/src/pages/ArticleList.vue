<template>
    <Layout>
        <Table :columns="columns" :data="articles"></Table>
        <Page class-name="paging" :total="total" :current.sync="currentPageNum" :page-size="pageSize" show-elevator prev-text="Previous" next-text="Next" @on-change="pageChage" />
    </Layout>
</template>

<script>
    import Layout from '@/components/Layout'
    export default{
        data () {
            return {
                columns: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: 'Thumbnail',
                        key: 'thumbnail',
                        render: (h, params) => {
                            if(params.row.thumbnail){
                                return h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                }, 'Review')
                            }else{
                                return h('span', {
                                }, '--')
                            }
                        }
                    },
                    {
                        title: 'Title',
                        key: 'title'
                    },
                    {
                        title: 'Tags',
                        key: 'tags',
                        render: (h, params) => {
                            function parseTags(h){
                                let res = []
                                const tagObj = JSON.parse(`[${params.row.tags}]`)
                                tagObj.map(item => {
                                    res.push(h('Tag', {
                                        attrs: {
                                            color: item.color,
                                            //closable: true
                                        },
                                        // on: {
                                        //     'on-close': () => {
                                        //         this.removeTag()
                                        //     }
                                        // }
                                    }, item.name))
                                })
                                return res
                            }
                            return h('div', parseTags(h))
                        }
                    },
                    {
                        title: 'Content',
                        key: 'content',
                        render: (h, params) => {
                            return h('div', {
                                style: {
                                   textOverflow:'ellipsis',
                                   overflow:'hidden',
                                   whiteSpace:'nowrap',
                                   width:'500px',
                                },
                            }, params.row.content)
                        }
                    },
                    {
                        title: 'Status',
                        key: 'isPublished',
                        render: (h, params) => {
                            const status = params.row.isPublished ? '已发布' : '未发布'
                            return h('div', {
                                style: {
                                    color: params.row.isPublished ? '#2d8cf0' : '#ff9900'
                                }
                            }, status)
                        }  
                    },
                    {
                        title: 'Publish Date',
                        key: 'publishTime',
                    },
                    {
                        title: 'Last Update',
                        key: 'updateTime',
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
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
                                            this.viewArticle(params.row.id)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.deleteArticle(params.row.id)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                articles: [],
                total: 0,
                pageSize: 3,
                currentPageNum: 1
            }
        },
        mounted () {
            this.getTotal()
            this.getLimitArticle(1)
        },
        components: {
            Layout
        },
        methods: {
            getTotal() {
                return axios.get('/api/v1/articles/allTotal/').then(res => {
                    if(res.status === 200) {
                        this.total = res.data[0].total
                    }
                })
            },
            getLimitArticle (pageNum) {
                const offset = (pageNum-1) * this.pageSize
                axios.get(`/api/v1/articles/allArticle/${offset}/${this.pageSize}`).then(res => {
                    if(res.status === 200) {
                        this.articles = res.data
                    }
                })
            },
            deleteArticle (id) {
                axios.delete(`/api/v1/articles/${id}`).then(res => {
                    //console.log(res)
                    if(res.status === 200){
                        this.$Notice.success({
                            title: '提示',
                            desc: '删除成功！'
                        })
                        
                        console.log(this.currentPageNum)
                        this.getTotal()
                        this.getLimitArticle(this.currentPageNum)
                    }
                })
            },
            viewArticle (id) {
                console.log(id)
                this.$router.push({ path: `/publishArticle?id=${id}`})
            },
            pageChage (num) {
                this.getLimitArticle(num)
            },
            reviewThumbnail () {
                alert('review img');
            }
        }
    }
</script>

<style scoped lang="less">
    .paging{
        padding: 10px;
    }
</style>
