<template>
    <base-layout>
        <content-layout>
            <div class="tags-page">
              <div class="title">
                <h1>所有标签</h1>
                <!-- <span class="total">
                  50+
                </span> -->
              </div>
              <div class="tags-box">
                <tag-list />
              </div>
            </div>
        </content-layout>
    </base-layout>
</template>

<script>

  import BaseLayout from '@/components/BaseLayout'
  import ContentLayout from '@/components/ContentLayout'
  import TagList from '@/components/TagList'

  import { mapGetters } from 'vuex'

  export default {
    components: {
      BaseLayout,
      ContentLayout,
      TagList
    }
  }
</script>

<style scoped lang="less">
  .tags-page{
    padding: 15px 20px;
    .title{
      text-align: center;
      h1{
        display: inline-block;
        font-size: 24px;
      }
      // .total{
      //   padding: 0 20px;
      //   font-size: 16px;
      // }
    }
    .tags-box{
      text-align: center;
      padding-top: 20px;
    }
  }
</style>
