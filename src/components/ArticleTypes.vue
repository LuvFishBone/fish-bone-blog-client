<template>
    <ul class="category">
        <li 
            v-for="item in this.getArticleTypes()" 
            :key="item.id" 
            :class="{active: getCurrentArticleType() === item.id}" 
            @click="typeClick(item.id)">
            <span>{{item.name}}</span>
        </li>
    </ul>
</template>

<script>

    import { mapGetters, mapMutations, mapActions } from 'vuex'
    import { SET_ARTICLE_TYPES, SET_CURRENT_ARTICLE_TYPE, RESET_PAGE_NUM } from '../store/mutation-types'

    export default {
        data () {
            return {
                defaultType: { id: 'recommend', name: '推荐' },
                list: []
            }
        },
        mounted () {
            if(this.getArticleTypes().length) return
            axios.get('/api/v1/types/').then(res => {
                this.list = res.data;
                this.list.unshift(this.defaultType);
                this.SET_CURRENT_ARTICLE_TYPE(this.list[0].id)
                this.SET_ARTICLE_TYPES(this.list)
            })
        },
        methods: {
            ...mapGetters([
                'getCurrentArticleType',
                'getArticleTypes'
            ]),
            ...mapMutations([
                SET_CURRENT_ARTICLE_TYPE,
                SET_ARTICLE_TYPES,
                RESET_PAGE_NUM
            ]),
            typeClick (name) {
                if(name != this.getCurrentArticleType() ) this.RESET_PAGE_NUM()
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
            list-style: none;
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
