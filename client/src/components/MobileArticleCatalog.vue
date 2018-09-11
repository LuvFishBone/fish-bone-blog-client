<template>
   <div id="mobile-article-catalog" class="mobile-article-catalog">
       <ul>
           <li>这里是测试标题</li>
       </ul>
   </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="less">
    .mobile-article-catalog{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 270;
        background: rgba(0, 0, 0, 0.6);
        li{
            color: #fff;
            font-size: 20px;
        }
    }
</style>
