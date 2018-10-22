<template>
    <div>
        <Tag v-for="item in list" :key="item.id" :color="item.color" :name="item.name"  type="dot" @on-close="remove" @click.native="tagClick(item)" :closable="closable">{{item.name}}</Tag>
        <Tag v-if="!list.length" type="border">暂无数据</Tag>
    </div>
</template>

<script>

    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default{
        props: {
            closable: Boolean,
            tagSelected: Function
        },
        data () {
            return {
                list: []
            }
        },
        methods: {
            ...mapActions([
                'removeTagByName',
                'getTagList'
            ]),
            remove: function(event, name) {
                this.removeTagByName(name).then((res) => {
                    this.$Notice.success({
                        title: '提示',
                        desc: 'Tag删除成功！'
                    })
                    this.getTagList()
                } )
            },
            tagClick: function(item) {
                this.tagSelected && this.tagSelected(item)
            }
        },
        computed: {
            ...mapGetters([
                'getAllTags'
            ])
        },
        mounted(){
            this.getTagList()
        },
        watch:{
            getAllTags: function(newVal, oldVal){
                this.list = this.getAllTags
            }
        }
    }
</script>

<style scoped lang="less">

</style>

