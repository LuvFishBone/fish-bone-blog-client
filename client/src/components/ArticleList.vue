<template>
    <div class="article-box">
        <div class="title-bar">
            <h5>文章列表</h5>
            <ul class="category">
                <li class="active">
                    <span>推荐</span>
                </li>
                <li>
                    <span>JAVA</span>
                </li>
                <li>
                    <span>CSS</span>
                </li>
            </ul>
        </div>
        <div class="article-list">
            <ul>
                <li class="item">
                    <a href="">
                        <div class="content-box">
                            <div class="info-box">
                                <div class="info-row title-row">
                                    OkHttp、rxJava、Retrofit联合网络请求（一）
                                </div>
                                <div class="info-row meta-row">
                                    <ul class="meta-list">
                                        <li class="tags"><span>标签1</span></li>
                                        <li>4天前</li>
                                        <li>1111 次阅读</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="article-thumb">

                            </div>
                        </div>
                    </a>
                </li>
                                <li class="item">
                    <a href="">
                        <div class="content-box">
                            <div class="info-box">
                                <div class="info-row title-row">
                                    OkHttp、rxJava、Retrofit联合网络请求（一）
                                </div>
                                <div class="info-row meta-row">
                                    <ul class="meta-list">
                                        <li class="tags"><span>标签1</span></li>
                                        <li>4天前</li>
                                        <li>1111 次阅读</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="article-thumb">

                            </div>
                        </div>
                    </a>
                </li>
                                <li class="item">
                    <a href="">
                        <div class="content-box">
                            <div class="info-box">
                                <div class="info-row title-row">
                                    OkHttp、rxJava、Retrofit联合网络请求（一）
                                </div>
                                <div class="info-row meta-row">
                                    <ul class="meta-list">
                                        <li class="tags"><span>标签1</span></li>
                                        <li>4天前</li>
                                        <li>1111 次阅读</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="article-thumb">

                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{

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
            .category{
                display: flex;
                align-items: baseline;
                li{
                    margin-right: 20px;
                    cursor: pointer;
                    span{
                        font-size: 14px;
                        color: #90979c;
                    }
                }
                li.active{
                    span{
                        color: #007fff
                    }
                }
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
                                    margin: 5px 0 8px;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                                .meta-row{
                                    font-size: 12px;
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

