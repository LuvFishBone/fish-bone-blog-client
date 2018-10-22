<template>
    <div class="avatar-box">
        <div class="avatar"></div>
        <div class="nickname">FishBone</div>
        <div class="motto">叩首问路，码梦为生</div>
        <div class="social">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/fishbone-yu-b4b98747/" target="_blank">
                        <i class="icon ion-logo-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/LuvFishBone" target="_blank">
                        <i class="icon ion-logo-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/FishBon59667636" target="_blank">
                        <i class="icon ion-logo-twitter"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="totals">
            <span><i class="icon ion-ios-list"></i> {{total}}</span>
            <span><i class="icon ion-ios-pricetags"></i> {{tags}}</span>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
        data() {
            return {
                tags: 0,
                total: 0,
            }
        },
        computed: {
            ...mapGetters([
                'getArticleTags'
            ]),
        },
        methods: {
            getArticleTotal() {
                axios.get('/api/v1/articles/allPublishedTotal/').then(res => {
                    if(res.status === 200) {
                        this.total = res.data[0].total
                    }
                })
            }
        },
        mounted() {
            this.getArticleTotal()
        },
        watch: {
            getArticleTags: function(newVal, oldVal){
                this.tags = newVal.length
            }
        }
    }
</script>

<style scoped lang="less">
    .avatar-box{
        background-color: #fff;
        border-radius: 2px;
        padding: 15px 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        .avatar{
            display: none;
            width: 115px;
            height: 115px;
            border: 1px solid rgba(178, 186, 194, 0.15);
            border-radius: 100%;
            background: url('../assets/img/fishbone_128px.png') center center no-repeat;
            background-size: 100px;
            margin-bottom: 5px;
        }
        .nickname{
            margin-bottom: 15px;
            font-size: 24px;
            font-weight: bold;
        }
        .motto{
            font-size: 14px;
            color: #8f969c;
        }
        .social{
            margin: 10px 0;
            width: 100%;
            height: 50px;
            border-top: 1px solid rgba(178, 186, 194, 0.15);
            border-bottom: 1px solid rgba(178, 186, 194, 0.15);
            ul{
                height: 100%;
                display: flex;
                
                justify-content: center;
                align-items: center;
                li{
                    padding: 0 8px;
                    a{
                        .icon{
                            font-size: 30px;
                            transition: all .3s;
                        }
                        &:hover{
                            color: #007fff;
                        }
                    }
                }
            }
        }
        .totals{
            display: flex;
            align-items: center;
            width: 100%;
            font-size: 14px;
            span{
                flex:1;
                text-align: center;
            }
        }
    }
</style>

