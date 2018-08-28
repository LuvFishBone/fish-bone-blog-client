<template>
    <Input v-model="name"  placeholder="失去焦点完成TAG添加" :style="{width:width + 'px'}" @on-blur="addTags" clearable />
</template>

<script>

    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
        props: {
           width: Number,
           addTagCallBack: {}
        },
        data() {
            return {
                name: ''
            }
        },
        computed: {
            ...mapGetters([
                'getTagColor'
            ])
        },
        methods: {
            ...mapActions([
                'isTagExist',
                'addOneTag',
                'getTagList'
            ]),
            addTags(event){
                const tagname = event.target.value
                if(!tagname) return
                this.isTagExist(tagname).then(res => {
                    if(res.status === 200){
                        if(res.data.length > 0){
                            this.$Notice.error({
                                title: '提示',
                                desc: '此Tag已经存在！'
                            })
                        }
                        if(res.data.length === 0){
                            this.addOneTag({name: tagname, color: this.getTagColor}).then(res =>{
                                this.$Notice.success({
                                    title: '提示',
                                    desc: 'Tag添加成功！'
                                })
                                this.getTagList()
                                this.addTagCallBack && (typeof this.addTagCallBack) === 'function' && this.addTagCallBack(tagname)
                            })
                        }
                    }
                })
                event.target.value = ''
            }
        }
    }
</script>

<style scoped lang="less">

</style>
