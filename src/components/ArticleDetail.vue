<template>
    <div>
        <div class="article-details">
            <div class="title">
                <h1>{{article.title}}</h1>
            </div>
            <div class="date-info">
                <span class="datetime">
                    <svg viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>
                    <i v-date-interval="article.createTime" /> 
                </span>
                <span class="readers" v-if="article.views">
                    <svg viewBox="0 0 576 512"><path d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"/></svg>
                    <i>{{article.views}}</i>
                </span>
                <span class="readers" v-if="article.likes">
                    <svg viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/></svg> 
                    <i>{{article.likes}}</i>
                </span>
                <div class="tags-box">
                    <a class="i-tag" v-for="item in tagArr" :key="item">
                        <svg viewBox="0 0 640 512"><path :style="{fill: getTagColor(item)}" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"/></svg>
                        <i :style="{color: getTagColor(item)}">{{item}}</i>
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
                    Array.from(this.$refs.post.querySelectorAll('h1,h2,h3,h4,h5,h6'))
                    .forEach((item, index) => {
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
    .svg(){
        vertical-align: middle;
        width: 14px;
        height: 14px;
        path{
        fill: #909090;
        }
    }
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
                svg{
                    .svg();
                }
            }
            span{  
                svg{
                    .svg();
                }
                i{
                    vertical-align: middle;
                }
            }
        }
        .content{
            font-size: 15px;
        }
    }
</style>
