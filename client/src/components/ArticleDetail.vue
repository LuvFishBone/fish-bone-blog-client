<template>
    <div>
        <div class="article-details">
            <div class="title">
                <h1>{{article.title}}</h1>
            </div>
            <div class="date-info">
                <span class="datetime"><i class="icon ion-ios-time" v-date-interval="article.publishTime"></i></span>
                <span class="readers" v-if="article.views"><i class="icon ion-ios-eye"></i> {{article.views}}</span>
                <span class="readers" v-if="article.likes"><i class="icon ion-ios-heart"></i> {{article.likes}}</span>
                <div class="tags-box">
                    <a class="i-tag" v-for="item in tagArr" :key="item" :style="{color: getTagColor(item)}">
                        <i class="icon ion-ios-pricetags"></i> {{item}}
                    </a>
                </div>
            </div>
            <div class="content markdown-body" v-html="parsedMarkdownStr" ref="post"></div>
            <article-end />
            <article-comment v-bind:articleInfo="articleInfo" />
        </div>
    </div>
</template>

<script>

    import { mapGetters, mapMutations } from 'vuex'
    import { SET_ARTICLE_CATALOG } from '@/store/mutation-types'
    import parseMarkdown from '@/utils/parseMarkdown'
    import ArticleComment from './ArticleComment'
    import ArticleEnd from './ArticleEnd'

    export default{
        data () {
           return {
               article: {},
               parsedMarkdownStr: '',
               catalog: [],
               tagArr: []
           }
        },
        components: {
            ArticleComment,
            ArticleEnd
        },
        computed: {
            ...mapGetters([
                'getArticleTags'
            ]),
        },
        props: {
            articleInfo: Object
        },
        methods: {
            parseMarkdown,
            ...mapMutations({
                setArticleCatalog: SET_ARTICLE_CATALOG
            }),
            createArticleCatalog () {
                this.$nextTick(() => {
                    Array.from(this.$refs.post.querySelectorAll('h1,h2,h3,h4,h5,h6')).forEach((item, index) => {
                        item.id = item.localName + '-' + index;
                        this.catalog.push({
                            tagName: item.localName,
                            text: item.innerText,
                            href: '#' + item.localName + '-' + index,
                        });
                    });
                    this.setArticleCatalog(this.catalog)
                })
            },
            getTagColor (tagName) {
                let tagColor = ''
                for(let item of this.getArticleTags) {
                    if(tagName === item.name) {
                        tagColor = item.color
                        break;
                    }
                }
                return tagColor
            }
        },
        watch: {
            articleInfo: function(val, oldVal) {
                this.article = val
                this.tagArr = val.tags.split(',')
                this.parsedMarkdownStr = this.parseMarkdown(val.content)
                this.createArticleCatalog()
            }
        }
    }
</script>

<style scoped lang="less">
    .article-details{
        background: #fff;
        padding: 10px 15px 20px;
        min-height: 250px;
        .title{
            height: 50px;
            line-height: 50px;
            h1{
                font-size: 20px;
            }
        }
        .date-info{
            font-size: 14px;
            color: #909090;
            margin-bottom: 20px;
            .readers{
                margin-left: 5px;
            }
            .tags-box{
                display: inline-block;
                padding-left: 20px;
            }
        }
        .content{
            font-size: 15px;
        }
    }
</style>
