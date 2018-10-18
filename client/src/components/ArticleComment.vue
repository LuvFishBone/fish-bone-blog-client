<template>
    <div class="article-comment">
        <div class="comment-list">
            <div class="no-comment" v-if="!this.list.length">~暂无评论~</div>
            <div class="comment-item" v-for="(item, index) in list" :key="index">
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
                    <a class="quote" href="#comment-area" @click="setCurrentQuote(item)">引用</a>
                </div>
                <div class="admin-reply" v-if="item.replyname">
                    <div class="title">{{item.replyname}} 回复 <span>{{item.nickname}}</span>:</div>
                    <div class="content">
                        {{item.replyComment}}
                    </div>
                    <div class="comment-date">{{formatDate(item.replyTime)}}</div>
                </div>
            </div>
        </div>
        <div class="comment-area" id="comment-area">
            <div class="header">发表评论 <span class="total">共{{list.length}}条评论</span></div>
            <div class="comment-form">
                <div class="form-item">
                    <span>*昵称</span><input type="text" class="input-default" placeholder="请输入昵称" maxlength="50" v-model="comment.nickname">
                </div>
                <div class="form-item">
                    <span>*邮箱</span>
                    <input type="text" class="input-default" placeholder="请输入邮箱" maxlength="80" v-model="comment.email">
                </div>
                <div class="form-item">
                    <span>站点</span>
                    <input type="text" class="input-default" placeholder="请输入个人站点" maxlength="100" v-model="comment.personalSite">
                </div>
                <div v-if="comment.blockquote">
                    您引用了：<span class="quote-link"><i>{{comment.quoter}}</i>的发言</span>
                </div>
                <div class="simplemde-box">
                    <textarea id="articleComment"></textarea>
                </div>
            </div>
            <div class="submit">
                <button class="btn btn-primary" @click="submit">发表</button>
            </div>
        </div>
    </div>
</template>

<script>

    import 'font-awesome/css/font-awesome.min.css'
    import 'simplemde/dist/simplemde.min.css'
    import parseMarkdown from '@/utils/parseMarkdown'
    import SimpleMDE from 'simplemde'
    import moment from 'moment'

    export default {
        data() {
            return {
                comment: {
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
                this.comment.articleId = val.id
                this.comment.articleTitle = val.title
                this.getMomentsByArticleId(val.id)
            }
        },
        mounted() {
            this.simplemde = new SimpleMDE({
                element: document.getElementById("articleComment"),
                autoDownloadFontAwesome: false,
                placeholder: '请填写评论！(支持Markdown语法)',
                spellChecker: false,
                toolbar: false,
            })
            this.simplemde.codemirror.on("change", () => {
                this.comment.comment =  this.simplemde.value()
            });
        },
        methods: {
            parseMarkdown,
            formatDate(datetime) {
                return moment(datetime).format('YYYY年MM月DD日 HH时mm分')
            },
            setCurrentQuote(item) {
                this.comment.blockquote = item.comment
                this.comment.quoter = item.nickname
            },
            getMomentsByArticleId(articleId) {
                axios.get(`/api/v1/comments/${articleId}`)
                .then((res) => {
                    this.list = res.data
                })
            },
            submit() {
                if (this.comment.nickname === '') {
                    this.$toasted.error('昵称不能为空！')
                    return
                }
                if (this.comment.email === '') {
                    this.$toasted.error('邮箱不能为空！')
                    return
                }
                if (!/^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/.test(this.comment.email)) {
                    this.$toasted.error('邮箱格式不正确！')
                    return
                }
                if (this.comment.comment === '') {
                    this.$toasted.error('评论不能为空不能为空！')
                    return
                }
                if (this.comment.comment.length > 1000) {
                    this.$toasted.error('评论不能大于1000字符！')
                    return
                }
                const { quoter, blockquote, articleId, articleTitle, comment, nickname, email, personalSite, isPass } = this.comment;
                axios.post('/api/v1/comments', { quoter, blockquote, articleId, articleTitle, comment, nickname, email, personalSite, isPass })
                .then((res) => {
                    this.$toasted.success('评论成功，待管理员审核以后才可显示评论！')
                    this.comment.blockquote = ''
                    this.comment.quoter = ''
                    this.comment.comment = ''
                    this.simplemde.value('')
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
            }
            .simplemde-box{
                margin-top: 10px;
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
