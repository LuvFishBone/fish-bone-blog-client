<template>
    <base-layout>
        <content-layout>
            <div class="tags-page">
              <div class="title">
                <h1>所有标签</h1>
                <span class="total">
                  50+
                </span>
              </div>
              <div class="tags-box">
                <a class="tag" href="#" :style="{fontSize:'30px'}">css</a>
                <a class="tag" href="#" :style="{fontSize:'18px'}">JAVASCRIPT</a>
                <a class="tag" href="#" :style="{fontSize:'14px'}">NODE</a>
                <a class="tag" href="#" :style="{fontSize:'25px'}">工具</a>
                <a class="tag" href="#" :style="{fontSize:'30px'}">LINUX</a>
              </div>
            </div>
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
  .tags-page{
    padding: 15px 20px;
    .title{
      text-align: center;
      h1{
        display: inline-block;
        font-size: 24px;
      }
      .total{
        padding: 0 20px;
        font-size: 16px;
      }
    }
    .tags-box{
      text-align: center;
      padding-top: 20px;
      .tag{
        color: #898989;
        &:hover{
          color: #007fff;
        }
      }
    }
  }
</style>
