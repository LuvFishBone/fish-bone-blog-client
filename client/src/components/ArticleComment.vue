<template>
    <div class="article-comment">
        <div class="comment-list">
            <div class="no-comment">~暂无评论~</div>
            <!-- <div class="comment-item">
                <div class="title">1楼 · <span>Mike</span>说：</div>
                <div class="comment-date">2018年06月20日 10:23 </div>
                <div class="content">
                    <div class="quote-content">
                        <div>引用 FishBone 的发言:</div>
                        <div>是按剩余空间算的，因为你里面有文字，所以刨去了文字宽度，你去掉文字就好了</div>
                    </div>
                    问下，支付宝是否已经有页面部署了flex的布局？ 似乎各大浏览器，除了chrome支持的都不是特别好，比如IE8就，FireFox46之前的，Safari9.1之前的都不支持
                </div>
                <div class="footer">
                    <span class="quote">引用</span>
                </div>
                <div class="admin-reply">
                    <div class="title">FishBone 回复 <span>Mike</span>:</div>
                    <div class="content">
                        在我测试中有这样的感觉,还请指正
                        1.当主轴设置的是水平方向时(row,row-reverse)方向还和容器的dir属有关; 
                        flex-direction 的方向是相对dir设置的方向来设置的.
                    </div>
                    <div class="comment-date">2018年06月20日 10:23 </div>
                </div>
            </div> -->
        </div>
        <div class="comment-area">
            <div class="header">发表评论 <span class="total">目前共5条评论</span></div>
            <div class="comment-form">
                <div class="form-item">
                    <input type="text" class="input-default" placeholder="请输入昵称" maxlength="50" :bind="nickname">
                </div>
                <div class="form-item">
                    <input type="text" class="input-default" placeholder="请输入邮箱" maxlength="80" v-model="email">
                </div>
                <div class="form-item">
                    <input type="text" class="input-default" placeholder="请输入个人站点" maxlength="100" :bind="personalSite">
                </div>
                <div v-if="this.blockquote">您引用了：<a class="quote-link" href="#"><span>Mike</span>的发言</a></div>
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
    import SimpleMDE from 'simplemde'

    export default {
        data() {
            return {
                quoter: '',
                blockquote: '',
                articleId: '',
                articleTitle: '',
                comment: '',
                nickname: '',
                email: '',
                personalSite: '',
                createTime: '',
                isPass: 0,
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
            // this.simplemde.value(this.getArticle.content)
            // this.simplemde.codemirror.on("change", () => {
            //     this.setArticleContent(this.simplemde.value())
            // });
        },
        methods: {
            submit() {
                // console.log(this.simplemde.value())
                console.log(this.email);
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
                        cursor: pointer;
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
                    font-size: 14px;
                    color: #8f969c;
                }
            }
            .comment-form{
                .form-item{
                    padding: 5px 0;
                }
                .quote-link{
                    color: #007fff;
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
