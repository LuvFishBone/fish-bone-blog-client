
<template>
    <div id="article-catalog" class="article-catalog">
        <div class="title">目录</div>
        <ul class="catalog-list">
            <li v-for="item in catalogs" :key="item.href" :class="'catalog-'+item.tagName">
                <a :href="item.href">{{item.text}}</a>   
            </li> 
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default{
        data () {
            return {
                catalogs: []
            }
        },
        computed: {
            ...mapGetters(['getArticleCatalog'])
        },
        watch: {
            getArticleCatalog: function (val, oldVal) {
                this.catalogs = val;
            }
        }
    }
</script>

<style scoped lang="less">
    .article-catalog{
        background: #fff;
        .title{
            height: 45px;
            line-height: 45px;
            padding-left: 15px;
            padding-right: 15px;
            font-size: 16px;
            border-bottom: 1px solid #f6f6f6; /*no*/
        }
        .catalog-list{
            padding: 15px;
            li{
                text-align: left;
                margin-bottom: 5px;
                padding-left: 20px;
                word-wrap: break-word;
                word-break: all;
                a{
                    display: block;
                    position: relative;
                    padding: 2px 0 2px 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: #34495e;
                    &:hover{
                        color: #2d8cf0;
                    }
                    &:before{
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 0;
                        margin-top: -2px;
                        width: 4px; /*no*/
                        height: 4px; /*no*/
                        background-color: currentColor;
                        border-radius: 50%;
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
