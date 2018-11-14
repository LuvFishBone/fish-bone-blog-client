<template>
    <div class="article-box">
        <div class="title-bar">
            <h5 class="title">文章列表</h5>
            <article-types />
        </div>
        <div class="article-list">
            <ul>
                <li class="item" v-for="item in articles" :key="item.uniqueMark">
                    <router-link :to="{name: 'article', query: {uniqueMark: item.uniqueMark}}">
                        <div class="content-box">
                            <div class="info-box">
                                <div class="info-row title-row">
                                    {{item.title}}
                                </div>
                                <div class="article-desc">{{item.intro}}</div>
                                <div class="info-row meta-row">
                                    <ul class="meta-list">
                                        <li class="tags">
                                            <span v-for="tag in item.tags.split(',')" :key="tag">
                                                <i class="icon ion-md-pricetags"></i> {{tag}}
                                            </span>
                                        </li>
                                        <li>
                                            <i class="icon ion-md-time" v-date-interval="item.createTime"></i>
                                        </li>
                                        <li v-if="item.views"><i class="icon ion-md-eye"></i> {{item.views}}</li>
                                        <li v-if="item.likes"><i class="icon ion-md-heart"></i> {{item.likes}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="article-thumb" v-if="false"></div>
                        </div>
                    </router-link>
                </li>
            </ul>
            <Loading :loadingInfo="{width:'100', height:'20', display: isLoading ? 'block' : 'none'}" />
            <div class="load-more" @click="loadMore" :style="{display: isLoading ? 'none' : 'block'}">
                {{this.hasMore ? '+点击加载更多' : '暂无更多'}}
            </div>
        </div>
    </div>
</template>

<script>

    import ArticleTypes from '@/components/ArticleTypes'
    import Loading from '@/components/Loading'
    import { INCREASE_PAGE_NUM } from '@/store/mutation-types'
    import { mapGetters, mapMutations } from 'vuex'
    import { REDUCE_PAGE_NUM, RESET_PAGE_NUM } from '../store/mutation-types';
    
    export default{
        data () {
            return {
                articles: [],
                pageSize: 3,
                pageNum: 1,
                hasMore: true,
                isLoading: null,
            }
        },
        computed: {
            ...mapGetters([
                'getCurrentPageNum',
                'getCurrentArticleType'
            ])
        },
        mounted() {
            this.RESET_PAGE_NUM()
            this.pageNum = this.getCurrentPageNum
            this.getArticles()
        },
        components: {
            Loading,
            ArticleTypes,
        },
        methods: {
            ...mapMutations([
                INCREASE_PAGE_NUM,
                REDUCE_PAGE_NUM,
                RESET_PAGE_NUM
            ]),
            getArticles() {
                if(!this.getCurrentArticleType) return
                const offset = (this.getCurrentPageNum-1) * this.pageSize
                const prefix = '/api/v1/articles'
                const requestUrl = this.getCurrentArticleType === 'recommend' ? 
                `${prefix}/articlesByRecommend/${offset}/${this.pageSize}` :
                `${prefix}/articlesByType/${offset}/${this.pageSize}/${this.getCurrentArticleType}`
                this.isLoading = true
                axios.get(requestUrl).then(res => {
                    if(res.status === 200) {
                        if(res.data.length) {
                            this.articles = this.articles.concat(res.data)
                        }else{
                            this.REDUCE_PAGE_NUM()
                            this.hasMore = false
                        }
                        this.isLoading = false
                    }
                })  
            },
            loadMore() {
                if(!this.hasMore) return
                this.INCREASE_PAGE_NUM()
                this.getArticles()
            }
        },
        watch: {
            getCurrentArticleType: function(newVal, oldVal) {
                this.articles = []
                this.hasMore = true
                this.getArticles()
            }
        }
    }
</script>

<style scoped lang="less">

    .article-box{

        .title-bar{
            background-color: #fff;
            padding: 15px 20px;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            border-bottom: 1px solid #f6f6f6;
            .title{
                font-size: 16px;
            }
        }

        .article-list{
            background: #fff;
            ul{
                li.item:not(:last-child){
                    border-bottom: 1px solid rgba(178,186,194,.15);
                }
                li.item{
                    a{
                        display: block;
                        .content-box{
                            display: flex;
                            align-items: center;
                            padding: 10px 20px;
                            min-height: 100px;
                            .info-box{
                                flex: 1;
                                .article-desc{
                                    // max-height: 45px;
                                    // max-width: 540px;
                                    margin: 5px 0;
                                    overflow : hidden;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical;
                                }
                                .title-row{
                                    margin: 5px 0 4px;
                                    overflow : hidden;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 1;
                                    -webkit-box-orient: vertical;
                                    font-size: 16px;
                                    font-weight: bold;
                                }
                                .meta-row{
                                    font-size: 13px;
                                    color: #8f969c;
                                    .meta-list{
                                        display: flex;
                                        align-items: baseline;
                                        white-space: nowrap;
                                        .tags{
                                            margin-right: 20px;
                                        }
                                        li:not(:first-child){
                                            &:after{
                                                content: "\B7";
                                                margin: 0 .4em;
                                                font-size: 13px;
                                                color: #8f969c;
                                            }
                                        }
                                    }
                                }
                            }
                            .article-thumb{
                                width: 89px;
                                height: 57px;
                                margin-left: 20px;
                                background-color: #007fff;
                                border-radius: 2px;
                            }
                        }
                    }
                }
            }
            .load-more{
                text-align: center;
                height: 60px;
                line-height: 60px;
                font-size: 16px;
                cursor: pointer;
                color: #90979c;
                transition: all .3s ease-in-out;
                &:hover{
                    color: #34495e;
                }
            }
        }
    }
</style>

