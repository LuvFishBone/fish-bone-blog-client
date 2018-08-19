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
            <formItem label="标签颜色">
                <Row>
                    <Col span="24">
                        <RadioGroup v-model="currentTagColor" type="button">
                            <Radio v-for="item in tagColors" :key="item.name" :label="item.label" >
                                <span :style="{color: item.label}">{{item.name}}</span>
                            </Radio>
                        </RadioGroup>
                    </Col>
                </Row>
            </formItem>
            <FormItem label="添加标签">
                <Row :gutter="5">
                    <Col span="3">
                        <Input v-model="formData.tag" @on-enter="addTags" placeholder="添加标签,按Enter结束" clearable></Input>
                    </Col>
                    <Col span="2">
                         <Poptip title="请选择标签" placement="bottom" @on-popper-show="getAllTags">
                             <div class="tags-box" slot="content">
                                <Tag v-for="item in existTags" :key="item.id" :color="item.color" @click.native="selectTagsFromExist(item)"> {{item.name}} </Tag>
                             </div>
                            <Button><Icon type="ios-pricetags-outline" size="14" /> 标签</Button>
                        </Poptip>
                    </Col>
                    <Col span="10">
                        <span v-for="(item, index) in formData.tags" :key="index">
                            <Tag type="dot" closable :color="item.color" @on-close="removeTag(index)">{{item.name}}</Tag>
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
    import { tagColors } from '@/utils/static-data'
    export default{
        created() {
            //console.log(tagColors);
        },
        data() {
            return {
                tagColors,
                existTags: [],
                currentTagColor: tagColors[0].label,
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
        mounted() {
            this.getAllTags()
        },
        methods: {
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
            selectTagsFromExist(item) {
                //this.formData.tags.push({name: item.name, color: item.color})
                const articleTagsStr = this.formatArticleTags(item.name, item.color)
                this.setArticleTags(articleTagsStr)
            },
            getAllTags() {
                axios.get('/api/v1/tags/')
                .then(res =>{
                    if(res.status === 200){
                        this.existTags = res.data
                    }
                })
            },
            addTagRequest(name, color) {
                axios.post('/api/v1/tags/', { name: name, color: color})
                .then(res => {
                    if(res.status === 200){
                        this.$Notice.success({
                            title: '成功',
                            desc: 'TAG添加成功！'
                        })
                    }
                    else{
                        console.log(res);
                    }
                })
            },
            async isTagExist(name) {
                return await axios.get(`/api/v1/tags/${name}`)
            },
            formatArticleTags(tagname, color) {
                let articleTagsStr = ''
                this.formData.tags.push({ name:tagname, color: color })
                let tags = this.formData.tags;
                if(tags.length){
                    tags.map( (res, index) => {
                        const tagObjStr = `{"name":"${res.name}","color":"${res.color}"}`
                        articleTagsStr += (index != tags.length-1) ? `${tagObjStr},` : `${tagObjStr}`
                    })
                }
                return articleTagsStr;
            },
            addTags(event) {
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
                            this.addTagRequest(tagname, this.currentTagColor)
                            const articleTagsStr = this.formatArticleTags(tagname, this.currentTagColor)
                            this.setArticleTags(articleTagsStr)
                        }
                    }
                })
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
                        this.formData.tags = []
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
    .tags-box{
        white-space: pre-line;
        width: 350px;
        height: 300px;
        overflow-y: auto;
    }
</style>
