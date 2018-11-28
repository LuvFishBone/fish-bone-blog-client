<template>
    <div class="article-comment">
        <div class="comment-list">
            <div class="no-comment" v-if="!this.list.length">~暂无评论~</div>
            <div class="comment-item" v-for="(item, index) in list" :key="index" :id="`quote-${index}`">
                <div class="title">{{index + 1}}楼 · <span>{{item.nickname}}</span>说：</div>
                <div class="comment-date">{{formatDate(item.commentTime)}}</div>
                <div class="content">
                    <div class="quote-content" v-if="item.quoter">
                        <div>引用 {{item.quoter}} 的发言:</div>
                        <div>{{item.blockquote}}</div>
                    </div>
                    <div class="markdown-body" v-html="parseMarkdown(item.comment)"></div>
                </div>
                <div class="footer">
                    <a class="quote" href="#comment-area" @click="setCurrentQuote(item, index)">引用</a>
                </div>
                <div class="admin-reply" v-if="item.replyname">
                    <div class="title">{{item.replyname}} 回复 <span>{{item.nickname}}</span>:</div>
                    <div class="content">
                        <div class="markdown-body" v-html="parseMarkdown(item.replyComment)"></div>
                    </div>
                    <div class="comment-date">{{formatDate(item.replyTime)}}</div>
                </div>
            </div>
        </div>
        <div class="comment-area" id="comment-area">
            <div class="header">发表评论 <span class="total">共{{list.length}}条评论</span></div>
            <div class="comment-form">
                <div class="form-item">
                    <span>*昵称</span><input type="text" class="input-default" placeholder="请输入昵称" maxlength="50" v-model="data.nickname">
                </div>
                <div class="form-item">
                    <span>*邮箱</span>
                    <input type="text" class="input-default" placeholder="请输入邮箱" maxlength="80" v-model="data.email">
                </div>
                <div class="form-item">
                    <span>站点</span>
                    <input type="text" class="input-default" placeholder="请输入个人站点" maxlength="100" v-model="data.personalSite">
                </div>
                <div v-if="data.blockquote">
                    您引用了：<a class="quote-link" :href="currentQuoteIndex"><i>{{data.quoter}}</i>的发言</a>
                    <span class="delete-quote" @click="deleteQuote">删除引用</span>
                </div>
                <div class="comment-box">
                    <textarea v-model="data.comment" placeholder="请输入内容，可使用marketdown语法编写代码"></textarea>
                </div>
            </div>
            <div class="submit">
                <button class="btn btn-primary" @click="submit">发表</button>
            </div>
        </div>
    </div>
</template>

<script>
    import parseMarkdown from '@/utils/parseMarkdown'
    // import moment from 'moment'

    export default {
        data() {
            return {
                data: {
                    quoter: '',
                    blockquote: '',
                    articleId: this.id,
                    articleTitle: this.title,
                    comment: '',
                    nickname: '',
                    email: '',
                    personalSite: '',
                    createTime: '',
                    isPass: 0,
                },
                list:[]
            }
        },
        props: {
            articleInfo: Object
        },
        watch: {
            articleInfo: function(val, oldVal) {
                this.data.articleId = val.id
                this.data.articleTitle = val.title
                this.getMomentsByArticleId(val.id)
            }
        },
        methods: {
            parseMarkdown,
            formatDate(datetime) {
                return moment(datetime).format('YYYY年MM月DD日 HH时mm分')
            },
            setCurrentQuote(item, index) {
                this.data.blockquote = item.comment
                this.data.quoter = item.nickname
                this.currentQuoteIndex = `#quote-${index}`
            },
            getMomentsByArticleId(articleId) {
                axios.get(`/api/v1/comments/comment/${articleId}`)
                .then((res) => {
                    this.list = res.data
                })
            },
            deleteQuote() {
                this.data.blockquote = ''
                this.data.quoter = ''
                this.currentQuoteIndex = ''
            },
            submit() {
                if (this.data.nickname === '') {
                    this.$toasted.error('昵称不能为空！')
                    return
                }
                if (this.data.email === '') {
                    this.$toasted.error('邮箱不能为空！')
                    return
                }
                if (!/^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/.test(this.data.email)) {
                    this.$toasted.error('邮箱格式不正确！')
                    return
                }
                if (this.data.comment === '') {
                    this.$toasted.error('评论不能为空不能为空！')
                    return
                }
                if (this.data.comment.length > 1000) {
                    this.$toasted.error('评论不能大于1000字符！')
                    return
                }
                const { quoter, blockquote, articleId, articleTitle, comment, nickname, email, personalSite, isPass } = this.data;
                axios.post('/api/v1/comments', { quoter, blockquote, articleId, articleTitle, comment, nickname, email, personalSite, isPass })
                .then((res) => {
                    this.$toasted.success('评论成功，待管理员审核以后才可显示评论！')
                    this.data.blockquote = ''
                    this.data.quoter = ''
                    this.data.comment = ''
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .article-comment{
        padding-top: 20px;
        .comment-list{
            .comment-item{
                border:1Px solid #eaecef;
                border-radius: 5px;
                padding: 10px;
                color: #8f969c;
                .title{
                    font-size: 14px;
                    padding: 5px 0;
                }
                .comment-date{
                    padding: 2px;
                    text-align: right;
                }
                .content{
                    font-size: 15px;
                    padding-bottom: 10px;
                    color: #34495e;
                    .quote-content{
                        padding: 10px;
                        margin: 5px 0 10px;
                        font-size: 13px;
                        border-radius: 5px;
                        background-color: #eaecef;
                        color: #8f969c;
                    }
                }
                .footer{
                    text-align: right;
                    padding: 5px 0;
                    font-size: 14px;
                    color: #8f969c;
                    .quote{
                        color: #007fff;
                    }
                }
                .admin-reply{
                    border-top: 1Px dashed #eaecef;
                    padding: 5px;                
                }
                &:not(first-child){
                    margin-top: 10px;
                }
            }
            .no-comment{
                text-align: center;
                padding-bottom: 20px;
                font-size: 16px;
            }
        }
        .comment-area{
            padding: 20px 0 5px;
            .header{
                padding-bottom: 10px;
                font-size: 18px;
                .total{
                    font-size: 13px;
                    color: #8f969c;
                }
            }
            .comment-form{
                .form-item{
                    padding: 5px 0;
                }
                .quote-link{
                    color: #007fff;
                    cursor: pointer;
                }
                .delete-quote{
                    color: #8f969c;
                    float: right;
                    cursor: pointer;
                }
            }
            .comment-box{
                margin-top: 10px;
                textarea{
                    width: 100%;
                    min-height: 300px;
                    padding: 5px;
                    border: 1Px solid #dcdee2;
                    border-radius: 4px;
                    color: #515a6e;
                }
            }
            .submit{
                padding: 10px 0 0;
            }
        }
    }
    .CodeMirror {
        height: 200px;
    }
</style>
