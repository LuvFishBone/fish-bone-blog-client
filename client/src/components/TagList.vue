<template>
    <div class="taglist">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"/></svg>
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
