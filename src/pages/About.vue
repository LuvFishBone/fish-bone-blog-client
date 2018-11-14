<template>
    <base-layout>
        <content-layout>
            <div v-html="data"></div>
        </content-layout>
    </base-layout>
</template>

<script>

  import BaseLayout from '@/components/BaseLayout'
  import ContentLayout from '@/components/ContentLayout'
  import parseMarkdown from '@/utils/parseMarkdown'

  export default{
    data() {
      return {
        data: ''
      }
    },
    components: {
      BaseLayout,
      ContentLayout
    },
    methods: {
      parseMarkdown
    },
    mounted() {
      axios.get('/api/v1/about/')
      .then(res => {
        this.data = this.parseMarkdown(res.data[0].content)
      })
    }
  }  
</script>

<style scoped lang="less">

</style>
