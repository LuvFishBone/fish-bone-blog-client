<template>
    <Layout>
        <template>
            <Table :columns="columns" :data="data"></Table>
        </template>
        <Page class-name="paging" :total="100" prev-text="Previous" next-text="Next" />
    </Layout>
</template>

<script>
    import Layout from '@/components/Layout'
    export default{
        data () {
            return {
                columns: [
                    {
                        title: 'Title',
                        key: 'title'
                    },
                    {
                        title: 'Tags',
                        key: 'tags'
                    },
                    {
                        title: 'Content',
                        key: 'content'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        title: 'John Brown',
                        tags: 18,
                        content: 'New York No. 1 Lake Park'
                    }
                ]
            }
        },
       components:{
           Layout
       } 
    }
</script>

<style scoped lang="less">
    .paging{
        padding: 10px;
    }
</style>
