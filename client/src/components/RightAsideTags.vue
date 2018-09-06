<template>
    <div class="right-aside-tags">
        <div class="title">
            <span>标签</span>
            <a class="more" href="/">更多</a>
        </div>
        <div class="content">
            <div class="taglist">
                <a href="/" class="tag">JAVA</a>
                <a href="/" class="tag">H5</a>
                <a href="/" class="tag">JAVA</a>
                <a href="/" class="tag">JAVA</a>
                <a href="/" class="tag">JAVA</a>
                <a href="/" class="tag">JAVA</a>
                <a href="/" class="tag">前端开发的重</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        
    }
</script>

<style scoped lang="less">
    .right-aside-tags{
        background-color: #fff;
        border-radius: 2px;
        margin-bottom: 15px;
        overflow: hidden;
        .title{
            height: 45px;
            line-height: 45px;
            padding-left: 15px;
            padding-right: 15px;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            border-bottom: 1px solid #f6f6f6;
            .more{
                color: #007fff;
                font-size: 12px;
            }
        }
        .content{
            .taglist{
                padding: 15px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: start;
                -ms-flex-pack: start;
                justify-content: flex-start;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                .tag{
                    margin-right: 12px;
                    margin-bottom: 12px;
                    background-color: #f3f6f3;
                    cursor: pointer;
                    height: 30px;
                    color: inherit;
                    line-height: 30px;
                    padding-left: 22px;
                    padding-right: 22px;
                    border-radius: 30px;
                    font-size: 13px;
                    transition: all .3s ease-in-out;
                    &:hover{
                        background: #307fffab;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>
