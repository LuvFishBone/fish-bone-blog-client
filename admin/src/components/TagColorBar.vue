<template>
    <Row>
        <Col span="24">
            <RadioGroup v-model="currentTagColor" type="button">
                <Radio v-for="item in tagColors" :key="item.name" :label="item.label" >
                    <span :style="{color: item.label}">{{item.name}}</span>
                </Radio>
            </RadioGroup>
        </Col>
    </Row>
</template>

<script>

    import { mapGetters, mapMutations, mapActions } from 'vuex'
    import * as mType from '../store/mutation-types'
    import { tagColors } from '@/utils/static-data'

    export default {
        data() {
            return {
                tagColors,
            }
        },
        methods: {
            ...mapGetters([
                'getTagColor'
            ]),
            ...mapMutations({
                'setTagColor': mType.SET_TAG_COLORT
            })
        },
        computed: {
            //...mapGetters(['getTagColor'])
            currentTagColor:{
                get: function() {
                    return this.getTagColor()
                },
                set: function(newColor){
                    this.setTagColor(newColor)
                }
            }
        }
    }
</script>