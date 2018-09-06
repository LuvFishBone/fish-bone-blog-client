<template>
    <div class="avatar-box">
        <div class="avatar"></div>
        <div class="nickname">FishBone</div>
        <div class="motto">叩首问路，码梦为生</div>
        <div class="social">

        </div>
        <div class="totals">
            <span>100 Articles</span>
            <span>6 Tags</span>
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped lang="less">
    .avatar-box{
        background-color: #fff;
        border-radius: 2px;
        margin-bottom: 15px;
        padding: 15px 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        .avatar{
            width: 115px;
            height: 115px;
            border: 1px solid rgba(178, 186, 194, 0.15);
            border-radius: 100%;
            background: url('../assets/img/fishbone_128px.png') center center no-repeat;
            background-size: 100px;
            margin-bottom: 1rem;
            
        }
        .nickname{
            margin-bottom: .5rem;
        }
        .motto{
            font-size: 14px;
            color: #8f969c;
        }
        .social{
            display: flex;
            margin: 10px 0;
            width: 100%;
            height: 50px;
            border-top: 1px solid rgba(178, 186, 194, 0.15);
            border-bottom: 1px solid rgba(178, 186, 194, 0.15);
        }
        .totals{
            display: flex;
            align-items: center;
            width: 100%;
            span{
                flex:1;
                text-align: center;
            }
        }
    }
</style>

