<template>
    <div class="taglist">
        <a href="#" v-for="item in list" :class="[{tag: true}, tagAttr[item.color]]"  :key="item.id">{{item.name}}</a>
    </div>
</template>

<script>

    import { SET_ARTICLE_TAGS } from '@/store/mutation-types'
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        data() {
            return {
                list: [],
                tagAttr: {
                    '#ed4014': 'red',
                    '#ff9900': 'orange',
                    '#e6ba00': 'yellow',
                    '#19be6b': 'green',
                    '#00d6e6': 'lightGreen',
                    '#2d8cf0': 'blue',
                    '#b300e6': 'purple',
                }
            }
        },
        beforeMount () {
            if(this.getArticleTags.length) return
            axios.get('/api/v1/tags').then(res => {
                this.SET_ARTICLE_TAGS(res.data)
            })   
        },
        mounted() {
            this.list = this.getArticleTags;
        },
        computed: {
            ...mapGetters([
                'getArticleTags'
            ]),
        },
        methods: {
            ...mapMutations([
                SET_ARTICLE_TAGS
            ])
        },
        watch: {
            getArticleTags: function(newVal, oldVal){
                this.list = newVal
            }
        }
    }
</script>

<style scoped lang="less">
    .taglist{
        .tag{
            display: inline-block;
            padding-right: 5px;
            transition: color .5s ease-in-out;
        }
        .tag.red{
            font-size: 30px;
            color: #ed4014;
        }
        .tag.orange{
            font-size: 25px;
            color: #ff9900;
        }
        .tag.yellow{
            font-size: 22px;
            color: #e6ba00;
        }
        .tag.green{
            font-size: 18px;
            color: #19be6b;
        }
        .tag.lightGreen{
            font-size: 15px;
            color: #00d6e6;
        }
        .tag.blue{
            font-size: 16px;
            color: #2d8cf0;
        }
        .tag.purple{
            font-size: 12px;
            color: #b300e6;
        }
        .tag:hover{
            color: #34495e;
        }
    }
</style>
