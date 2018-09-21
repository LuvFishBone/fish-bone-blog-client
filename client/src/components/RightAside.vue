<template>
    <div>
        <side-panel>
            <blogIntro />
        </side-panel>
        <side-panel v-bind:titleInfo="{name:'标签', more:{pathName:'tags'}}">
            <tag-list />
        </side-panel>
    </div>
</template>

<script>

    import SidePanel from '@/components/SiderPanel'
    import TagList from '@/components/TagList'
    import BlogIntro from '@/components/BlogIntro'
    
    export default {
        components: {
            SidePanel,
            BlogIntro,
            TagList,
        }
    }
</script>


