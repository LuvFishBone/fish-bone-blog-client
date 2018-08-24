<template>
    <div class="tags-box">
        <Tag v-for="item in list" :key="item.id" :color="item.color"> {{item.name}} </Tag>
    </div>
</template>

<script>

    import { mapGetters, mapMutations, mapActions } from 'vuex'

    export default{
        data() {
            return {
                list: []
            }
        },
        computed: {

        }
    }
</script>

<style scoped lang="less">
    .tags-box{
        white-space: pre-line;
        width: 350px;
        height: 300px;
        overflow-y: auto;
    }
</style>

