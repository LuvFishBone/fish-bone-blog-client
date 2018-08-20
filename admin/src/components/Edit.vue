<template>
    <textarea id="articleEdit"></textarea>
</template>

<script>

    import 'font-awesome/css/font-awesome.min.css'
    import 'simplemde/dist/simplemde.min.css'
    import SimpleMDE from 'simplemde'
    import { mapGetters, mapMutations } from 'vuex'
    import { SET_ARTICLE_CONTENT } from '@/store/mutation-types'

    export default{
        props: ['content'],
        mounted(){
            console.log('mounted')
            this.simplemde = new SimpleMDE({
                element: document.getElementById("articleEdit"),
                autoDownloadFontAwesome: false,
                placeholder: '叩首问路，码梦为生！',
                spellChecker: false
            })
            this.simplemde.value(this.getArticle.content)
            this.simplemde.codemirror.on("change", () => {
                this.setArticleContent(this.simplemde.value())
            });
        },
        watch:{ 
            content:function(newv, oldv){
                this.simplemde.value(this.getArticle.content)
            }
        },
        computed: {
            ...mapGetters([
                'getArticle'
            ])
        },
        methods: {
            ...mapMutations({
                setArticleContent: SET_ARTICLE_CONTENT
            }),
        }

    }
</script>

<style scoped lang="less">
    .CodeMirror {
        height: 300px;
    }
</style>
