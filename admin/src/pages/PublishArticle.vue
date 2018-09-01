<template>
    <Layout>
        <Form class="article-box" :label-width="80" ref="formData" :model="formData">
            <Row>
                <Col span="8">
                    <FormItem label="文章状态" prop="isPublished">
                        <Tag :color="this.formData.isPublished ? 'primary': 'warning'">
                            {{this.formData.isPublished ? '已发布': '未发布'}}
                        </Tag>
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="10">
                    <FormItem label="文章类型">
                        <Select v-model="formData.type" @on-change="typeChange">
                            <Option 
                                v-for="item in typeList" 
                                :value="item.id" 
                                :key="item.id">
                                {{item.name}}
                            </Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="文章标题" prop="title">
                        <Input v-model="formData.title" @on-change="addTitle" placeholder="文章标题" clearable></Input>
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="10">
                    <FormItem label="标签颜色">
                        <TagColorBar />
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="添加标签">
                        <Row :gutter="5">
                            <Col span="10">
                                <TagAddInput :addTagCallBack="addTagCallBack" />
                            </Col>
                            <Col span="10">
                                <Poptip title="请选择标签" placement="bottom">
                                    <div class="tags-box" slot="content">
                                        <TagList :closable="false" :tagSelected="selectTagsFromExist" />
                                    </div>
                                    <Button><Icon type="ios-pricetags-outline" size="14" /> 选择标签</Button>
                                </Poptip>
                            </Col>
                        </Row>
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <FormItem label="已选标签">
                        <span v-for="(item, index) in formData.tags" :key="index">
                            <Tag type="dot" closable :color="item.color" @on-close="removeTag(index)">{{item.name}}</Tag>
                        </span>
                    </FormItem>
                </Col>
            </Row>    
            <Row>
                <Col span="24">
                    <FormItem>
                        <Edit :content="formData.content"></Edit>
                    </FormItem>
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <FormItem>
                        <Button type="primary" @click="saveArticle()"><Icon type="ios-paper-plane" size="16" /> 发布</Button>
                        <Button @click="saveArticleAsDraft()" style="margin-left: 8px"><Icon type="ios-copy-outline" size="16" /> 保存(草稿)</Button>
                    </FormItem>
                </Col>
            </Row>
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
        SET_ARTICLE,
        SET_ARTICLE_THUMBNAIL,
        SET_ARTICLE_TYPE
    } from '../store/mutation-types'
    export default{
        data () {
            return {
                typeList: [],
                formData: {
                    id: '',
                    type: '',
                    title : '',
                    tags : [],
                    content : '',
                    isPublished : 0
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
        created () {
            this.articleId = this.$route.query.id
        },
        computed: {
            ...mapGetters([
                'getArticle',
                'getTagColor',
                'getAllTypes'
            ])
        },
        mounted () {
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
            this.getTypeList()
        },
        methods: {
            ...mapMutations({
                'setArticle': SET_ARTICLE,
                'setArticleType': SET_ARTICLE_TYPE,
                'setArticleTitle': SET_ARTICLE_TITLE,
                'setArticleTags': SET_ARTICLE_TAGS,
                'setArticleIsPublished': SET_ARTICLE_ISPUBLISHED,
                'clearArticle': CLEAR_ARTICLE,
                'setArticleThumbnail': SET_ARTICLE_THUMBNAIL
            }),
            ...mapActions([
                'addArticle',
                'getArticleById',
                'updateArticleById',
                'getTypeList'
            ]),
            addTitle (event) {
                const title = event.target.value
                this.setArticleTitle(title)
            },
            selectTagsFromExist (item) {
                const articleTagsStr = this.formatArticleTags(item.name, item.color)
                this.setArticleTags(articleTagsStr)
            },
            formatArticleTags (tagname, color) {
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
            removeTag (index) {
                this.formData.tags.splice(index, 1)
                const articleTagsStr = this.formatArticleTags()
                this.setArticleTags(articleTagsStr)
            },
            saveSuccess () {
                this.$Notice.success({
                    title: '提示',
                    desc: '保存成功'
                })
                this.clearArticle()
                this.$refs['formData'].resetFields();
                this.formData.tags = []
                this.$router.push({name: 'articlelist'})
            },
            addArticleRequest () {
                this.addArticle().then(res =>{
                    if(res.status === 200){
                        this.saveSuccess()
                    }
                })
            },
            updateArticleRequest () {
                this.updateArticleById().then(res => {
                    console.log(res)
                    if(res.status === 200){
                        this.saveSuccess()
                    }
                })
            },
            saveArticle () {
                const formdata = this.formData;
                if(!formdata.type){
                    this.$Message.error('请选择类型!')
                    return
                }
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
            saveArticleAsDraft () {
                this.setArticleIsPublished(0)
                this.articleId ? this.updateArticleRequest() : this.addArticleRequest()
            },
            addTagCallBack (tagname) {
                const articleTagsStr = this.formatArticleTags(tagname, this.getTagColor)
                this.setArticleTags(articleTagsStr)
            },
            typeChange (){
                this.setArticleType(this.formData.type);
            }
        },
        watch: {
            getAllTypes: function(newVal, oldVal){
                this.typeList = this.getAllTypes
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
