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
                                        <li>
                                            <svg viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>
                                            <span v-date-interval="item.createTime" />    
                                        </li>
                                        <li v-if="item.views">
                                            <svg viewBox="0 0 576 512"><path d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"/></svg>
                                            <span>{{item.views}}</span>
                                        </li>
                                        <li v-if="item.likes">
                                            <svg viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg>
                                            <span>{{item.likes}}</span>
                                        </li>
                                    </ul>
                                    <ul class="meta-list">
                                        <li>
                                            <span class="tags" v-for="tag in item.tags.split(',')" :key="tag">
                                                <svg viewBox="0 0 640 512"><path d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"/></svg>
                                                <span>{{tag}}</span>
                                            </span>
                                        </li>
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
                    list-style: none;
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
                                        li:not(:last-child){
                                            &:after{
                                                content: "\B7";
                                                margin: 0 .4em;
                                                font-size: 13px;
                                                color: #8f969c;
                                            }
                                        }
                                        li{
                                            height: 20px;
                                            line-height: 20px;
                                            list-style: none;
                                            svg{
                                                vertical-align: middle;
                                                width: 13px;
                                                height: 13px;
                                                path{
                                                    fill: #8f969c;
                                                }
                                            }
                                            span.tags:not(:first-child){
                                                padding-left: 10px;
                                            }
                                            span{
                                                vertical-align: middle;
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

