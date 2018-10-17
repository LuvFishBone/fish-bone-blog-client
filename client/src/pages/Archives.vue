<template>
    <base-layout>
        <content-layout>
          <div class="archives-page">
            <div v-for="(val, key, index) in list" :key="index" class="archive-item">
              <div class="circle">
                <div class="year-num">{{key}}</div>
                <div class="year-name">Year</div>
              </div>
              <ul class="list">
                <li v-for="item in val" :key="item.uniqueMark">
                  <div class="left">
                    <span><b>{{item.publishTime}}</b></span>
                  </div>
                  <div class="point">
                    <span><b></b></span>
                  </div>
                  <div class="right">
                    <router-link :to="{name: 'article', params: {uniqueMark: item.uniqueMark}}">
                      <span>{{item.title}}</span>
                    </router-link>
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
  import moment from 'moment'

  export default{
    data() {
      return {
        list:{}
      }
    },
    components: {
      BaseLayout,
      ContentLayout
    },
    beforeMount() {
      axios.get('/api/v1/archives').then((res)=>{
        this.createList(res.data)
      })
    },
    methods: {
      createList(data) {
        let result= {}
        for(let i = 0, l = data.length; i < l; i++) {
          let _year = moment(data[i].publishTime).year()
          data[i].publishTime = moment(data[i].publishTime).format('MM月DD日'); 
          if(!result[_year]){
            result[_year] = [];
          }
          result[_year].push(data[i])
        }
        this.list = result
      }
    }
  }
</script>

<style scoped lang="less">
    .transitions{
      -webkit-transition: all .3s linear;
      -moz-transition: all .3s linear;
      -o-transition: all .3s linear;
      transition: all .3s linear;
    }
    .archives-page{
      position: relative;
      width: 100%;
      min-height: 250px;
      &:before{
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        z-index: 9;
        width: 2px; /*no*/
        margin-left: -1px; /*no*/
        content: '';
        background-color: #ccd1d9;
      }
      .archive-item{
        position: relative;
        &:not(:first-child){
          margin-top: 35px;
        }
        .circle{
          width: 83px;
          height: 83px;
          position: relative;
          top: 0;
          left: 50%;
          margin-left: -41px;
          border: 6px solid rgba(0,0,0,.15);
          border-radius: 95px;
          text-indent: 0;
          text-align: center;
          display: flex;
          flex-flow: column;
          justify-content: center;
          background: #fff;
          z-index: 10;
          .transitions;
          .year-num{
            font-size: 20px;
            font-weight: bold;
            color: #007fff;
          }
          .year-name{
            font-size: 16px;
            color: #8f969c;
          }
        }
        .list{
          position: relative;
          width: 100%;
          li{
            display: flex;
            .left,.right{
              flex: 1;
            }
            .point{
              width: 55px;
              height: 55px;
              display: flex;
              justify-content: center;
              align-content: center;
              align-items: center;
              span{
                position: relative;
                z-index: 20;
                height: 16px; /*no*/
                width: 16px; /*no*/
                background: #fff;
                display: block;
                border-radius: 16px; /*no*/
                border: 2px solid #007fff; /*no*/
                .transitions;
                b{
                  position: absolute;
                  left: -22px;
                  top: 50%;
                  width: 20px;
                  height: 1px; /*no*/
                  background-color: #ccd1d9;
                  z-index: 10;
                }
              }
            }
            .left{
              text-align: right;
              font-size: 14px;
              color: #8f969c;
              position: relative;
              span{
                display: inline-block;
                height: 16px;
                position: absolute;
                right: 5px;
                top: 50%;
                margin-top: -8px;
              }
            }
            .right{
              font-size: 15px;
              color: #8f969c;
              a{
                display: flex;
                height: 100%;
                justify-content: flex-start;
                align-items: center;
                .transitions;
                &:hover{
                  color: #007fff;
                }
              }
            }
          }
        }
      }
    }
</style>
