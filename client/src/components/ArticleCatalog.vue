
<template>
    <div id="article-catalog" class="article-catalog">
        <div class="title">文章目录</div>
        <ul class="catalog-list">
            <li class="catalog-h1">
                <a href="/">支持评论</a>   
            </li> 
            <li class="catalog-h2">
                <a href="/">服务端渲染动态标题（SEO)</a>   
            </li>
            <li class="catalog-h3">
                <a href="/">支持评论</a>   
            </li> 
            <li class="catalog-h1">
                <a href="/">disqus接入单页应用</a>   
            </li>
            <li class="catalog-h2">
                <a href="/">支持评论</a>   
            </li> 
            <li class="catalog-h3">
                <a href="/">升级http2</a>   
            </li>  
            <li class="catalog-h1">
                <a href="/">支持评论</a>   
            </li> 
            <li class="catalog-h2">
                <a href="/">服务端渲染动态标题（SEO)</a>   
            </li>
            <li class="catalog-h3">
                <a href="/">支持评论</a>   
            </li> 
            <li class="catalog-h1">
                <a href="/">disqus接入单页应用</a>   
            </li>
            <li class="catalog-h2">
                <a href="/">支持评论</a>   
            </li> 
            <li class="catalog-h3">
                <a href="/">升级http2</a>   
            </li> 
        </ul>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped lang="less">
    .article-catalog{
        background: #fff;
        padding: 15px;
        .title{
            margin-top: 15px;
            margin-bottom: 10px;
            font-weight: 400;
            color: gray;
            font-size: 16px;
        }
        .catalog-list{
            li{
                text-align: left;
                margin-bottom: 5px;
                padding-left: 20px;
                word-wrap: break-word;
                word-break: all;
                a{
                    color: #bfbfbf;
                    text-decoration: none;
                    word-wrap: break-word;
                    word-break: break-all;
                    &:hover{
                        color: #2d8cf0;
                    }
                }
            }
            li.catalog-h1{
                padding-left: 10px;
            }
            li.catalog-h2{
                padding-left: 20px;
            }
            li.catalog-h3{
                padding-left: 30px;
            }
            li.catalog-h4{
                padding-left: 40px;
            }
            li.catalog-h5{
                padding-left: 50px;
            }
            li.catalog-h6{
                padding-left: 60px;
            }
        }
    }
</style>
