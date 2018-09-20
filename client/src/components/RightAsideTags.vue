<template>
    <div class="right-aside-tags">
        <div class="title">
            <span class="tag">标签</span>
            <router-link class="more" :to="{name: 'tags'}">更多</router-link>
        </div>
        <div class="content">
            <div class="taglist">
                <a href="/" class="tag">前端开发</a>
            </div>
        </div>
    </div>
</template>

<script>

    import { SET_ARTICLE_TAGS } from '@/store/mutation-types'
    import { mapGetters, mapMutations } from 'vuex'

    export default{
        beforeMount () {
            if(this.getArticleTags().length) return
            axios.get('/api/v1/tags').then(res => {
                this.SET_ARTICLE_TAGS(res.data)
            })   
        },
        mounted () {
            console.log(this.getArticleTags())
        },
        methods: {
            ...mapGetters([
                'getArticleTags'
            ]),
            ...mapMutations([
                SET_ARTICLE_TAGS
            ])
        },
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
            border-bottom: 1px solid #f6f6f6; /*no*/
            .tag{
                font-size: 16px;
            }
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
                    border:1px solid #f3f6f3;
                    cursor: pointer;
                    height: 30px;
                    color: inherit;
                    line-height: 30px;
                    padding-left: 22px;
                    padding-right: 22px;
                    border-radius: 30px;
                    font-size: 12px;
                    transition: all .3s ease-in-out;
                    &:hover{
                        color: #007fff;
                        border-color: #007fff;
                        background: none;
                    }
                }
            }
        }
    }
</style>
