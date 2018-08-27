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
            <FormItem label="文章缩略图" prop="title">
                <Row>
                    <Col span="8">
                        <Upload action="/api/v1/uploadfiles/" :headers="uploadHeader" :on-remove="removeFile">
                            <Button icon="ios-cloud-upload-outline">Upload files</Button>
                        </Upload>
                    </Col>
                </Row>
            </FormItem>
            <FormItem label="文章状态" prop="isPublished">
                <Row>
                    <Col span="8">
                        <Tag :color="this.formData.isPublished ? 'primary': 'warning'">
                            {{this.formData.isPublished ? '已发布': '未发布'}}
                        </Tag>
                    </Col>
                </Row>
            </FormItem>
            <FormItem label="标签颜色">
                <TagColorBar />
            </FormItem>
            <FormItem label="添加标签">
                <Row :gutter="5">
                    <Col span="3">
                        <!-- <Input v-model="formData.tag" @on-enter="addTags" placeholder="添加标签,按Enter结束" clearable></Input> -->
                        <TagAddInput :addTagCallBack="addTagCallBack" :width="135" />
                    </Col>
                    <Col span="2">
                         <Poptip title="请选择标签" placement="bottom">
                             <div class="tags-box" slot="content">
                                <!-- <Tag v-for="item in existTags" :key="item.id" :color="item.color" @click.native="selectTagsFromExist(item)"> {{item.name}} </Tag> -->
                                <TagList :closable="false" :tagSelected="selectTagsFromExist" />
                             </div>
                            <Button><Icon type="ios-pricetags-outline" size="14" /> 选择标签</Button>
                        </Poptip>
                    </Col>
                    <Col span="15">
                        <span v-for="(item, index) in formData.tags" :key="index">
                            <Tag type="dot" closable :color="item.color" @on-close="removeTag(index)">{{item.name}}</Tag>
                        </span>
                    </Col>
                </Row>
            </FormItem>
            <FormItem>
                <Row>
                    <Col span="24">
                        <Edit :content="formData.content"></Edit>
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
    import TagColorBar from '@/components/TagColorBar'
    import TagAddInput from '@/components/TagAddInput'
    import TagList from '@/components/TagList'
    import { mapGetters, mapMutations, mapActions } from 'vuex'
    import { 
        ADD_ARTICLE, 
        SET_ARTICLE_TITLE, 
        SET_ARTICLE_TAGS, 
        SET_ARTICLE_ISPUBLISHED, 
        CLEAR_ARTICLE, 
        SET_ARTICLE 
    } from '../store/mutation-types'
    export default{
        data() {
            return {
                existTags: [],
                formData: {
                    id :'',
                    title : '',
                    tags : [],
                    content : '',
                    isPublished : 0
                },
                uploadHeader: {
                    AuthToken: `Bearer ${localStorage.AuthToken}`
                }
            }
        },
        components: {
            Layout,
            Edit,
            TagColorBar,
            TagAddInput,
            TagList,
        },
        created() {
            this.articleId = this.$route.query.id
        },
        computed: {
            ...mapGetters([
                'getArticle',
                'getTagColor'
            ])
        },
        mounted() {
            if(this.articleId){
                this.getArticleById(this.articleId).then(res => {
                    if(res.status === 200){
                        this.setArticle(res.data[0])
                        this.formData.id = this.getArticle.id
                        this.formData.title = this.getArticle.title
                        this.formData.tags = JSON.parse(`[${this.getArticle.tags}]`)
                        this.formData.content = this.getArticle.content
                        this.formData.isPublished = this.getArticle.isPublished
                    }
                })
            }
        },
        methods: {
            removeFile (file, fileList) {
                console.log(file)
            },
            ...mapMutations({
                'setArticle' : SET_ARTICLE,
                'setArticleTitle': SET_ARTICLE_TITLE,
                'setArticleTags': SET_ARTICLE_TAGS,
                'setArticleIsPublished': SET_ARTICLE_ISPUBLISHED,
                'clearArticle': CLEAR_ARTICLE
            }),
            ...mapActions([
                'addArticle',
                'getArticleById',
                'updateArticleById'
            ]),
            addTitle(event) {
                const title = event.target.value
                this.setArticleTitle(title)
            },
            selectTagsFromExist(item) {
                const articleTagsStr = this.formatArticleTags(item.name, item.color)
                this.setArticleTags(articleTagsStr)
            },
            formatArticleTags(tagname, color) {
                let articleTagsStr = ''
                if(tagname && color){
                    this.formData.tags.push({ name:tagname, color: color })
                }
                let tags = this.formData.tags;
                if(tags.length){
                    tags.map( (res, index) => {
                        const tagObjStr = `{"name":"${res.name}","color":"${res.color}"}`
                        articleTagsStr += (index != tags.length-1) ? `${tagObjStr},` : `${tagObjStr}`
                    })
                }
                return articleTagsStr;
            },
            removeTag(index) {
                this.formData.tags.splice(index, 1)
                const articleTagsStr = this.formatArticleTags()
                this.setArticleTags(articleTagsStr)
            },
            saveSuccess(){
                this.$Notice.success({
                    title: '提示',
                    desc: '保存成功'
                })
                this.clearArticle()
                this.$refs['formData'].resetFields();
                this.formData.tags = []
                this.$router.push({name: 'articlelist'})
            },
            addArticleRequest() {
                this.addArticle().then(res =>{
                    if(res.status === 200){
                        this.saveSuccess()
                    }
                })
            },
            updateArticleRequest() {
                this.updateArticleById().then(res => {
                    console.log(res)
                    if(res.status === 200){
                        this.saveSuccess()
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
                this.articleId ? this.updateArticleRequest() : this.addArticleRequest()
            },
            saveArticleAsDraft() {
                this.setArticleIsPublished(0)
                this.articleId ? this.updateArticleRequest() : this.addArticleRequest()
            },
            addTagCallBack(tagname){
                const articleTagsStr = this.formatArticleTags(tagname, this.getTagColor)
                this.setArticleTags(articleTagsStr)
            }
        }
    }
</script>

<style scoped lang="less">
    .article-box{
        padding: 10px;
    }
    .tags-box{
        white-space: pre-line;
        width: 350px;
        height: 300px;
        overflow-y: auto;
    }
</style>
