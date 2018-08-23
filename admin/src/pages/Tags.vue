<template>
    <Layout>
        <Form class="tags-box" :model="formData" :label-width="80">
            <FormItem label="标签颜色">
                <TagColorBar />
            </FormItem>
            <FormItem label="所有标签">
                <Row>
                    <Col span="12">
                        
                    </Col>
                </Row>
            </FormItem>
        </Form>
    </Layout>
</template>

<script>
    
    import Layout from '@/components/Layout'
    import TagColorBar from '@/components/TagColorBar'
    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
        
        data() {
            return {
                formData: { 

                }
            }
        },
        components:{
            Layout,
            TagColorBar
        },
        methods: {
            ...mapGetters([
                'getAllTags'
            ]),
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
