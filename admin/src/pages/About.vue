<template>
    <Layout>
        <div class="about-box">
            <textarea id="aboutMe"></textarea>
            <Button type="primary" @click="saveAbout"><Icon type="ios-paper-plane" size="16" /> 保存</Button>
        </div>
    </Layout>
</template>

<script>

    import Layout from '@/components/Layout'
    import 'font-awesome/css/font-awesome.min.css'
    import 'simplemde/dist/simplemde.min.css'
    import SimpleMDE from 'simplemde'

    export default{
        data () {
            return {
                apiUrl: '/api/v1/about/',
                content: ''
            }
        },
       components:{
           Layout
       },
       methods: {
           getAbout () {
                axios.get(this.apiUrl).then( res => {
                    this.content = res.data[0].content
                    this.createSMDE()
                })
           },
           createSMDE () {
                this.simplemde = new SimpleMDE({
                    element: document.getElementById("aboutMe"),
                    autoDownloadFontAwesome: false,
                    placeholder: '叩首问路，码梦为生！',
                    spellChecker: false
                })
                this.simplemde.value(this.content)
           },
           saveAbout () {
               const content = this.simplemde.value()
               axios.put(this.apiUrl, {content}).then( res => {
                    this.$Notice.success({
                        title: '提示',
                        desc: '保存成功'
                    })
               })
           }
       },
       mounted () {

        this.getAbout()

       }
    }

</script>

<style scoped lang="less">
    .about-box{
        padding: 10px;
    }
</style>
