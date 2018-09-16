<template>
    <ul class="category">
        <li v-for="item in list" :key="item.id" :class="{active: getCurrentArticleType() === item.name}" @click="typeClick(item.name)">
            <span>{{item.name}}</span>
        </li>
    </ul>
</template>

<script>

    import { mapGetters, mapMutations, mapActions } from 'vuex'
    import { SET_ARTICLE_TYPES, SET_CURRENT_ARTICLE_TYPE } from '../store/mutation-types'

    export default {
        data () {
            return {
                defaultType: { id: 'recommend', name: '推荐' },
                list: []
            }
        },
        mounted () {
            axios.get('/api/v1/types/').then(res => {
                this.list = res.data;
                this.list.unshift(this.defaultType);
                this.SET_CURRENT_ARTICLE_TYPE(this.list[0].name)
            })
        },
        methods: {
            ...mapGetters([
                'getCurrentArticleType'
            ]),
            ...mapMutations([
                SET_CURRENT_ARTICLE_TYPE
            ]),
            typeClick (name) {
                this.SET_CURRENT_ARTICLE_TYPE(name)
            },
        }
    }
</script>

<style scoped lang="less">
    .category{
        display: flex;
        align-items: baseline;
        li{
            margin-right: 20px;
            cursor: pointer;
            span{
                font-size: 14px;
                color: #90979c;
            }
        }
        li.active{
            span{
                color: #007fff
            }
        }
    }
</style>
