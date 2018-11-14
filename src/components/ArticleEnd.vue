<template>
    <div class="article-end">
        <div class="line"></div>
        <div class="note">
            <p>原创是写作的动力,</p>
            <p>转载请注明文章原始出处 !</p>
        </div>
        <div class="qrcode">
            <div><img :src="qrcodeUrl" alt="扫描二维码,在手机阅读！" /></div>
            <div>扫描二维码,在手机阅读！</div>
        </div>
    </div>
</template>

<script>
    import QRCode from 'qrcode'
    export default {
        data() {
            return {
                qrcodeUrl:''
            }
        },
        mounted() {
            const url = window.location.href;
            QRCode.toDataURL(url)
            .then(url => {
                this.qrcodeUrl = url
            })
            .catch(err => {
                console.error(err)
            })
        }
    }
</script>

<style scoped lang="less">
    .article-end{
        margin: 40px 0 10px;
        .line{
            position: relative;
            height: 30px;
            font-size: 16px;
            color: #007fff;
            border-top: 1Px solid #8f969c;
            &:after{
                content: "文章结束了哦";
                position: absolute;
                display: inline-block;
                width: 100px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                left: 50%;
                top: -50%;
                margin-left: -50px;
                background-color: #fff;
            }
        }
        .note{
            background-color: #f6f6f6;
            padding: 10px;
            margin-bottom: 10px;
            text-overflow: nowrap;
        }
        .qrcode{
            text-align: center;
            img{
                display: inline-block;
                width: 160px;
                height: 160px;
            }
        }
    }
</style>

