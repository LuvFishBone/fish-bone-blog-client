<template>
    <Layout>
        <div class="p10" >
            <Table :columns="columns" :data="articles"></Table>
        </div>
        <Page 
            class-name="p10" 
            :total="total" 
            :current.sync="currentPageNum" 
            :page-size="pageSize" 
            show-elevator 
            prev-text="Previous" 
            next-text="Next" 
            @on-change="pageChage" />
    </Layout>
</template>

<script>
    import Layout from '@/components/Layout'
    import { mapGetters, mapMutations, mapActions } from 'vuex'
    import { SET_TYPE_LIST } from '../store/mutation-types'
    import moment from 'moment'
    import utils from '@/utils'

    export default{
        data () {
            return {
                typeList: [],
                columns: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: '缩略图',
                        key: 'thumbUrl',
                        render: (h, params) => {
                            return h('div', {
                            }, '缩略图')
                        }   
                    },
                    {
                        title: '推荐',
                        key: 'isRecommend',
                        render: (h, params) => {
                            const status = params.row.isRecommend ? '是' : '否'
                            return h('div', {
                                style: {
                                    color: params.row.isRecommend ? '#2d8cf0' : '#ff9900'
                                }
                            }, status)
                        }   
                    },
                    {
                        title: '类型',
                        key: 'type',
                        render: (h, params) => {
                            const _this = this
                            function articleTypeFilter (value) {
                                let res = '';
                                for(let item of _this.getAllTypes){
                                    if(value === item.id){
                                        res = item.name;
                                        break;
                                    }
                                }
                                return res;
                            } 
                            return h('span', articleTypeFilter(params.row.type))
                        }
                    },
                    {
                        title: '标题',
                        key: 'title'
                    },
                    {
                        title: '标签',
                        key: 'tags',
                        render: (h, params) => {
                            const _this = this
                            function parseTags(h){
                                let res = []
                                // const tagObj = JSON.parse(`[${params.row.tags}]`)
                                const tagArr = params.row.tags.split(',')
                                const allTags = _this.getAllTags()
                                const tagObjs = utils.createTagObjs(tagArr, allTags)
                                tagObjs.map(item => {
                                    res.push(h('Tag', {
                                        attrs: {
                                            color: item.color,
                                        },
                                    }, item.name))
                                })
                                return res
                            }
                            return h('div', parseTags(h))
                        }
                    },
                    {
                        title: '状态',
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
                        title: '创建时间',
                        key: 'createTime',
                        width: 140,
                        render:(h, params) => {
                            return h('span', moment(params.row.createTime).format('YYYY-MM-DD-HH:mm'))
                        }
                    },
                    {
                        title: '修改时间',
                        key: 'publishTime',
                        width: 140,
                        render:(h, params) => {
                            return h('span', moment(params.row.publishTime).format('YYYY-MM-DD HH:mm'))
                        }
                    },
                    {
                        title: '操作',
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
                                }, '详情'),
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
                                }, '删除')
                            ]);
                        }
                    }
                ],
                articles: [],
                total: 0,
                pageSize: 10,
                currentPageNum: 1
            }
        },
        mounted () {
            this.getTotal()
            this.getLimitArticle(1)
            this.getTypes()
            this.getTagList()
        },
        components: {
            Layout
        },
        computed: {
            ...mapGetters([
                'getAllTypes'
            ])
        },
        methods: {
            ...mapMutations({
                'setTypeList': SET_TYPE_LIST
            }),
            ...mapActions([
                'getTypeList',
                'getTagList'
            ]),
            ...mapGetters([
                'getAllTags'
            ]),
            getTypes () {
                this.getTypeList().then(res => {
                    this.setTypeList(res.data)
                    this.typeList = this.getAllTypes
                })
            },
            getTotal () {
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
                    if(res.status === 200){
                        this.$Notice.success({
                            title: '提示',
                            desc: '删除成功！'
                        })
                        this.getTotal()
                        this.getLimitArticle(this.currentPageNum)
                    }
                })
            },
            viewArticle (id) {
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
