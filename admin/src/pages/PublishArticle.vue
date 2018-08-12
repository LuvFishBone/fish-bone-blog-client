<template>
    <Layout>
        <Form class="article-box" :label-width="80" ref="formData" :model="formData">
            <FormItem label="文章标题" prop="title">
                <Row>
                    <Col span="8">
                        <Input v-model="formData.title" placeholder="文章标题" clearable></Input>
                    </Col>
                </Row>
            </FormItem>
            <FormItem label="添加标签">
                <Row :gutter="10">
                    <Col span="8">
                        <Input v-model="formData.tag" @on-enter="addTags" placeholder="添加标签,按Enter结束" clearable></Input>
                    </Col>
                    <Col span="10">
                        <span v-for="(item, index) in formData.tags" :key="index">
                            <Tag type="dot" closable color="default" @on-close="removeTag(index)">{{item}}</Tag>
                        </span>
                    </Col>
                </Row>
            </FormItem>
            <FormItem>
                <Row>
                    <Col span="24">
                        <Edit></Edit>
                    </Col>
                </Row>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit()"><Icon type="ios-paper-plane" size="16" /> 发布</Button>
                <Button style="margin-left: 8px"><Icon type="ios-copy-outline" size="16" /> 保存(草稿)</Button>
            </FormItem>
        </Form>
    </Layout>
</template>

<script>

    import Layout from '@/components/Layout'
    import Edit from '@/components/Edit'

    export default{
        data() {
            return {
                formData: {
                    inputNow: false,
                    title: '',
                    tag:'',
                    tags: [],
                    simplemde: '',
                    isPublished: ''
                }
            }
        },
        components: {
            Layout,
            Edit
        },
        computed: {

        },
        methods: {
            // randomTagColor: () => {
            //     const colors = ['default', 'primary', 'success', 'error', 'warning', 'magenta', 'red', 'volcano', 'orange', 'gold', 'yellow', 'lime', 'green', 'cyan', 'blue']
            //     return colors[Math.floor(Math.random()*15)]
            // },
            addTags(event) {
                const tagname = event.target.value
                if(!tagname) return
                this.formData.tags.push(tagname)
                event.target.value = ''
            },
            removeTag(index){
                this.formData.tags.splice(index, 1)
            },
            handleSubmit() {
                const formdata = this.formData;
                if(!formdata.title){
                    this.$Message.error('请填写标题!')
                    return
                }
                if(!formdata.tags.length){
                    this.$Message.error('请添加Tag!')
                    return
                }
                console.log(this.formData)
            }
        }
    }
</script>

<style scoped lang="less">
    .article-box{
        padding: 10px;
    }
</style>
