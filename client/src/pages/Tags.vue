<template>
    <base-layout>
        <content-layout>
            <div>tags page</div>
        </content-layout>
    </base-layout>
</template>

<script>

  import BaseLayout from '@/components/BaseLayout'
  import ContentLayout from '@/components/ContentLayout'

  import { mapGetters } from 'vuex'

  export default {
    components: {
      BaseLayout,
      ContentLayout
    },
    computed: {
      ...mapGetters([
        'getArticleTags'
      ])
    },
    mounted() {
      console.log(this.getArticleTags, 'tags data')
    }
  }
</script>

<style scoped lang="less">

</style>
