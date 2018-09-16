<template>
    <Layout>
        <Form class="article-box" :label-width="80" ref="formData" :model="formData">
            <Row>
                <Col span="10">
                    <FormItem label="文章状态" prop="isPublished">
                        <Tag :color="this.formData.isPublished ? 'primary': 'warning'">
                            {{this.formData.isPublished ? '已发布': '未发布'}}
                        </Tag>
                    </FormItem>
                </Col>
                <Col span="10">
                    <FormItem label="是否推荐" prop="isRecommend">
                        <Switch v-model="formData.isRecommend" @on-change="isRecommendSwitch">
                            <span slot="open">是</span>
                            <span slot="close">否</span>
                        </Switch>
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
                    <FormItem label="文章阅读数" prop="views">
                        <Input v-model="formData.views" @on-change="addViews" placeholder="文章阅读数" clearable></Input>
                    </FormItem>
                </Col>
                <Col span="12">
                    <FormItem label="文章喜欢数" prop="likes">
                        <Input v-model="formData.likes" @on-change="addLikes" placeholder="文章喜欢数" clearable></Input>
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
                        <span v-for="(item, index) in selectedTagObjArr" :key="index">
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

    import md5 from 'md5'
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
        SET_ARTICLE_VIEWS,
        SET_ARTICLE_LIKES,
        SET_ARTICLE_ISPUBLISHED, 
        CLEAR_ARTICLE, 
        SET_ARTICLE,
        SET_TYPE_LIST,
        SET_ARTICLE_TYPE,
        SET_ARTICLE_ISRECOMMEND,
        SET_ARTICLE_THUMBURL,
        SET_ARTICLE_UNIQUEMARK
    } from '../store/mutation-types'
    import utils from '@/utils'

    export default{
        data () {
            return {
                typeList: [],
                selectedTagObjArr: [],
                formData: {
                    id: '',
                    type: '',
                    title : '',
                    tags : [],
                    views: 0,
                    likes: 0,
                    content : '',
                    isPublished : 0,
                    isRecommend : 1,
                    thumbUrl: '',
                    uniqueMark: ''
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
                        this.formData = { ...this.getArticle }
                        this.formData.isRecommend = this.formData.isRecommend ? true : false
                        this.formData.tags = this.formData.tags.split(',')
                        const tagArr = this.formData.tags
                        const allTags = this.getAllTags()
                        this.selectedTagObjArr = utils.createTagObjs(tagArr, allTags)
                    }
                })
            }else{
                this.setArticleUniqueMark(md5((new Date()).getTime()))
            }
            this.getTypes()
            this.getTagList()
        },
        methods: {
            ...mapGetters([
                'getAllTags'
            ]),
            ...mapMutations({
                'setArticle': SET_ARTICLE,
                'setArticleType': SET_ARTICLE_TYPE,
                'setArticleTitle': SET_ARTICLE_TITLE,
                'setArticleTags': SET_ARTICLE_TAGS,
                'setArticleViews': SET_ARTICLE_VIEWS,
                'setArticleLikes': SET_ARTICLE_LIKES,
                'setArticleIsPublished': SET_ARTICLE_ISPUBLISHED,
                'setTypeList': SET_TYPE_LIST,
                'clearArticle': CLEAR_ARTICLE,
                'setArticleIsRecommend': SET_ARTICLE_ISRECOMMEND,
                'setArticleUniqueMark': SET_ARTICLE_UNIQUEMARK
            }),
            ...mapActions([
                'addArticle',
                'getArticleById',
                'updateArticleById',
                'getTypeList',
                'getTagList'
            ]),
            isRecommendConvert (val) {
                return val ? true : false;
            },
            addTitle (event) {
                const title = event.target.value
                this.setArticleTitle(title)
            },
            addViews (event) {
                const views = event.target.value || 0
                this.setArticleViews(parseInt(views))
            },
            addLikes (event) {
                const likes = event.target.value || 0
                this.setArticleLikes(parseInt(likes))
            },
            selectTagsFromExist (item) {
                const articleTagsStr = this.formatArticleTags(item)
                this.setArticleTags(articleTagsStr)
            },
            formatArticleTags (tagObj) {
                let tagStr = ''
                if(tagObj && tagObj.name){
                    this.formData.tags.push(tagObj.name)
                    this.selectedTagObjArr.push({ name: tagObj.name, color: tagObj.color })
                }
                let tags = this.formData.tags;
                if(tags.length){
                    tags.map( (res, index) => {
                        tagStr += (index != tags.length-1) ? `${res},` : res
                    })
                }
                return tagStr
            },
            removeTag (index) {
                this.selectedTagObjArr.splice(index, 1)
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
            addTagCallBack (tagObj) {
                const articleTagsStr = this.formatArticleTags(tagObj)
                this.setArticleTags(articleTagsStr)
            },
            typeChange () {
                this.setArticleType(this.formData.type)
            },
            isRecommendSwitch (status) {
                const val = status ? 1 : 0
                this.setArticleIsRecommend(val)
            },
            getTypes () {
                this.getTypeList().then(res => {
                    this.setTypeList(res.data)
                    this.typeList = this.getAllTypes
                })
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
