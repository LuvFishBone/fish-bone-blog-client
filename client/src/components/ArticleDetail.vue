<template>
    <div class="article-details">
        <div class="title">
            <h1>文章标题</h1>
        </div>
        <div class="date-info">
            <span class="datetime"><i class="icon ion-ios-time"></i> 2018年09月06日</span>
            <span class="readers"><i class="icon ion-ios-eye"></i> 200</span>
            <div class="tags-box">
                <span class="i-tag red"><i class="icon ion-ios-pricetags"></i> 标签</span>
                <span class="i-tag blue"><i class="icon ion-ios-pricetags"></i> 标签</span>
            </div>
        </div>
        <div class="content">
            这里是主体内容
        </div>
    </div>
</template>

<script>
    
</script>

<style scoped lang="less">
    .article-details{
        background: #fff;
        padding: 20px 15px;
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

        }
    }
</style>
