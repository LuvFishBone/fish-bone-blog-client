<template>
    <Layout>
        <Form ref="tagsForm" class="tags-box" :model="tagsForm" :label-width="80">
            <FormItem label="标签颜色">
                <TagColorBar />
            </FormItem>
            <FormItem label="添加标签">
                <TagAddInput :width="315" />
            </FormItem>
            <FormItem label="所有标签">
                <Row>
                    <Col span="24">
                        <TagList :closable="true"  />
                    </Col>
                </Row>
            </FormItem>
        </Form>
    </Layout>
</template>

<script>
    
    import Layout from '@/components/Layout'
    import TagColorBar from '@/components/TagColorBar'
    import TagAddInput from '@/components/TagAddInput'
    import TagList from '@/components/TagList'
    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
        
        data() {
            return {
                tagsForm: { 

                }
            }
        },
        components:{
            Layout,
            TagColorBar,
            TagAddInput,
            TagList
        },
        methods: {
            ...mapActions([
                'getTagList'
            ])
        },
        mounted(){
            this.getTagList()
        } 

    }
</script>

<style scoped lang="less">
    .tags-box{ 
        padding: 10px;
    }
</style>
