<template>
    <Layout>
        <Form class="article-box" :label-width="80" ref="formData" :model="formData">
            <FormItem label="文章标题" prop="title">
                <Row>
                    <Col span="8">
                        <Input v-model="formData.title" @on-change="addTitle" placeholder="文章标题" clearable></Input>
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
                <Button type="primary" @click="saveArticle()"><Icon type="ios-paper-plane" size="16" /> 发布</Button>
                <Button @click="saveArticleAsDraft()" style="margin-left: 8px"><Icon type="ios-copy-outline" size="16" /> 保存(草稿)</Button>
            </FormItem>
        </Form>
    </Layout>
</template>

<script>

    import Layout from '@/components/Layout'
    import Edit from '@/components/Edit'
    import { mapGetters, mapMutations, mapActions } from 'vuex'
    import { ADD_ARTICLE, SET_ARTICLE_TITLE, SET_ARTICLE_TAGS, SET_ARTICLE_ISPUBLISHED, CLEAR_ARTICLE } from '../store/mutation-types'

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
            ...mapGetters([
                'getArticle'
            ])
        },
        methods: {
            // randomTagColor: () => {
            //     const colors = ['default', 'primary', 'success', 'error', 'warning', 'magenta', 'red', 'volcano', 'orange', 'gold', 'yellow', 'lime', 'green', 'cyan', 'blue']
            //     return colors[Math.floor(Math.random()*15)]
            // },
            ...mapMutations({
                'setArticleTitle': SET_ARTICLE_TITLE,
                'setArticleTags': SET_ARTICLE_TAGS,
                'setArticleIsPublished': SET_ARTICLE_ISPUBLISHED,
                'clearArticle': CLEAR_ARTICLE
            }),
            ...mapActions([
                'addArticle'
            ]),
            addTitle(event) {
                const title = event.target.value
                this.setArticleTitle(title)
            },
            addTags(event) {
                const tagname = event.target.value
                if(!tagname) return
                this.formData.tags.push(tagname)
                const tags = this.formData.tags.join(',')
                this.setArticleTags(tags)
                event.target.value = ''
            },
            removeTag(index){
                this.formData.tags.splice(index, 1)
            },
            addArticleRequest(type) {
                this.addArticle().then(res =>{
                    if(res.status === 200){
                        this.$Notice.success({
                            title: '提示',
                            desc: '保存成功'
                        })
                        this.clearArticle()
                        this.$refs['formData'].resetFields();
                    }
                })
            },
            saveArticle() {
                const formdata = this.formData;
                if(!formdata.title){
                    this.$Message.error('请填写标题!')
                    return
                }
                if(!formdata.tags.length){
                    this.$Message.error('请添加Tag!')
                    return
                }
                if(!this.getArticle.content){
                    this.$Message.error('请添加博客内容!')
                    return
                }
                this.setArticleIsPublished(1)
                this.addArticleRequest();
            },
            saveArticleAsDraft() {
                this.setArticleIsPublished(0)
                this.addArticleRequest()
            }
        }
    }
</script>

<style scoped lang="less">
    .article-box{
        padding: 10px;
    }
</style>
