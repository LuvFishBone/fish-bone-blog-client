<template>
    <Layout>
        <div class="types-box m10">
            <Button type="primary" size="small" @click="addTypeHandle">
                <Icon type="md-add" /> 增加
            </Button>
            <div class="list">
                <Tag 
                    type="border" 
                    closable color="primary" 
                    @on-close="remove"
                    v-for="item in list"
                    :key="item.id" 
                    :name="item.name"
                    @click.native="typeClick(item)">
                    {{item.name}}
                  </Tag>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from '@/components/Layout'
    import { mapGetters, mapMutations, mapActions } from 'vuex'
    import { SET_TYPE_LIST } from '../store/mutation-types'
    export default {
        data () {
            return {
                id:'',
                name:'',
                list:[]
            }
        },
        mounted () {
            this.getTypes()
        },
        computed: {
            ...mapGetters([
                'getAllTypes'
            ])
        },
        components: {
            Layout
        },
        methods:{
            ...mapMutations({
                'setTypeList': SET_TYPE_LIST
            }),
            ...mapActions([
                'getTypeByName',
                'addType',
                'getTypeList',
                'deleteTypeById',
                'updateTypeById'
            ]),
            async addRequest () {
                let isExists = await this.getTypeByName(this.name)
                if(isExists.data.length > 0){
                    this.$Message.error('该类型已经存在！')
                    return
                }
                this.addType({name: this.name}).then(res => {
                    if(res.status === 200) {
                        this.$Message.success('文章类型增加成功！')
                        this.name = ''
                        this.getTypes()
                    }
                })
            },
            getTypes () {
                this.getTypeList().then(res => {
                    this.setTypeList(res.data)
                    this.list = this.getAllTypes
                })
            },
            addTypeHandle () {
                this.$Modal.confirm({
                    title: '增加文章类型',
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.name,
                                autofocus: true,
                                placeholder: 'Please enter article type name...'
                            },
                            on: {
                                input: (val) => {
                                    this.name = val;
                                }
                            }
                        })
                    },
                    onOk: () => {
                        if(this.name === ''){
                            this.$Message.error('名称不能为空！')
                            return
                        }
                        this.addRequest()
                    },
                    onCancel: () => {
                        this.name = ''
                    } 
                })
            },
            remove (event, name) {
                this.deleteTypeById(name).then(res => {
                    if(res.status === 200){
                        this.$Message.success('删除成功！')
                        this.getTypes()
                    }
                })
            },
            typeClick (item) {
                this.name = item.name
                this.id = item.id
                this.$Modal.confirm({
                    title: '更新文章类型',
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.name,
                                autofocus: true,
                                placeholder: 'Please enter article type name...'
                            },
                            on: {
                                input: (val) => {
                                    this.name = val;
                                }
                            }
                        })
                    },
                    onOk: () => {
                        if(this.name === ''){
                            this.$Message.error('名称不能为空！')
                            return
                        }
                        this.updateTypeById({ id: this.id, name: this.name }).then(res => {
                            if(res.status === 200) {
                                this.$Message.success('更新成功！')
                                this.getTypes()
                            }
                        })
                    },
                    onCancel: () => {
                        this.name = ''
                    } 
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .types-box{
        .list{
            padding: 20px 0 0
        }
    }
</style>
