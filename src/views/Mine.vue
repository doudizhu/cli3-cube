<template lang="pug">
    div
        img.headerimg(src='https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png')
        ul
            li.mineitem(
                v-for='item in minearray' :key='item.label'
                @click='itemclick(item)'
            )
                span.minetitle {{item.label}}
                i.cubeic-arrow
</template>

<script>
export default {
    data(){
        return {
            minearray:[
                {
                    label:'商品收藏',
                },
                {
                    label:'我的足迹',
                },
                {
                    label:'店铺收藏',
                },
                {
                    label:'我的订单',
                },
                {
                    label:'退出',
                    type:'exit',
                },
            ]
        }
    },
    methods:{
        itemclick(item){
            if(item.type=='exit'){
                this.$store.commit('settoken','')
                localStorage.removeItem('token')
                this.$router.push({path:'/login'})
            }
        },
    },
}
</script>

<style lang="stylus" scoped>
    .headerimg
        width 100%
    .mineitem
        font-size 14px
        text-align left 
        height 50px
        line-height 50px
        padding-left 5%
        border-bottom 1px solid #eee
        .minetitle
            display inline-block
            width 90%
</style>
