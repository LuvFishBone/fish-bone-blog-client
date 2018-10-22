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
                <ul class="article-list">
                  <li v-for="item in list" :key="item.id">
                    <div class="date">
                      <i class="icon ion-md-time" v-date-interval="item.publishTime"></i>
                    </div>
                    <router-link :to="{name: 'article', params: {uniqueMark: item.uniqueMark}}">
                      {{item.title}}
                    </router-link>
                    <div class="meta-row">
                      <span><i class="icon ion-md-eye"></i> {{item.views}}</span>
                      <span><i class="icon ion-md-heart"></i> {{item.likes}}</span>
                    </div>
                  </li>
                </ul>
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
    data () {
      return {
        list: []
      }
    },
    components: {
      BaseLayout,
      ContentLayout,
      TagList
    },
    mounted () {
      if(this.$route.params.tag) {
        this.getArticlesByTag()
      } 
    },
    methods: {
      getArticlesByTag() {
        axios.get(`/api/v1/articles/articleListByTag/${this.$route.params.tag}`).then((res) => {
          this.list = res.data
        })
      }
    },
    watch: {
      $route: function(){
        this.getArticlesByTag()
      }
    }
  }
</script>

<style scoped lang="less">
  .tags-page{
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
      .article-list{
        margin-top: 20px;
        li{
          text-align: left;
          .date{
            font-size: 13px;
            color: #8f969c;
          }
          a{
            display: block;
            padding: 5px 0;
            font-size: 16px;
            color: #2d8cf0;
          }
          .meta-row{
            margin: 0 .4em;
            font-size: 13px;
            color: #8f969c;
          }
          padding-bottom: 10px;
          margin-bottom: 10px;
          border-bottom: 1Px dashed #d9d9d9;
        }
      }
    }
  }
</style>
