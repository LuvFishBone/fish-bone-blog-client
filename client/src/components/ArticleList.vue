<template>
    <div class="article-box">
        <div class="title-bar">
            <h5 class="title">文章列表</h5>
            <article-types />
        </div>
        <div class="article-list">
            <ul>
                <li class="item" v-for="item in articles" :key="item.uniqueMark">
                    <router-link :to="{name: 'article', params: {uniqueMark: item.uniqueMark}}">
                        <div class="content-box">
                            <div class="info-box">
                                <div class="info-row title-row">
                                    {{item.title}}
                                </div>
                                <div class="info-row meta-row">
                                    <ul class="meta-list">
                                        <li class="tags">
                                            <span v-for="tag in item.tags.split(',')" :key="tag">
                                                <i class="icon ion-md-pricetags"></i> {{tag}}
                                            </span>
                                        </li>
                                        <li><i class="icon ion-md-time"></i> {{item.publishTime}}</li>
                                        <li v-if="item.views"><i class="icon ion-md-eye"></i> {{item.views}}</li>
                                        <li v-if="item.likes"><i class="icon ion-md-heart"></i> {{item.likes}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="article-thumb" v-if="item.thumbUrl">
                                
                            </div>
                        </div>
                    </router-link>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>

    import ArticleTypes from '@/components/ArticleTypes'

    export default{
        data () {
            return {
                articles: [],
                pageSize: 3,
                pageNum: 1
            }
        },
        components: {
            ArticleTypes
        },
        beforeMount () {
            const offset = (this.pageNum-1) * this.pageSize
            axios.get(`/api/v1/articles/allArticle/${offset}/${this.pageSize}`).then(res => {
                if(res.status === 200) {
                    this.articles = res.data
                }
            })      
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
                                .title-row{
                                    max-width: 550px;
                                    margin: 5px 0 8px;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    font-size: 18px;
                                    font-weight: bold;
                                }
                                .meta-row{
                                    font-size: 14px;
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
                                                font-size: 14px;
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
        }
    }
</style>

