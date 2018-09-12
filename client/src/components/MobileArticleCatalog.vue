<template>
    <div>
        <div id="catalog-icon" class="catalog-icon">
            <i class="icon ion-md-list"></i>
        </div>
        <div id="mobile-article-catalog" class="mobile-article-catalog">
            <ul class="catalog-list">
                <li v-for="item in catalogs" :key="item.href" :class="'catalog-'+item.tagName">
                    <a :href="item.href">{{item.text}}</a>   
                </li> 
            </ul>
        </div>
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
    .catalog-icon{
        position: fixed;
        z-index: 275;
        bottom: 40px;
        right: 40px;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        color: #fff;
        text-align: center;
        background: rgba(0, 0, 0, 0.6);
        .icon{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 26px;
        }
    }
    .mobile-article-catalog{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 270;
        background: rgba(0, 0, 0, 0.6);
        .catalog-list{
            position: absolute;
            right: 0;
            bottom: 90px;
            width: 100%;
            height: 80%;
            overflow-y: auto;
            border-top: 1px solid #cecece; /*no*/
            border-bottom: 1px solid #cecece; /*no*/
            padding: 20px;
            li{
                position: relative;
                color: #fff;
                font-size: 16px;
                height: 30px;
                line-height: 30px;
                padding-left: 10px;
                a{
                    position: relative;
                    display: inline-block;
                    color: #fff;
                    padding-left: 10px;
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
