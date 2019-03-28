<template lang="pug">
    #index
        // 轮播图
        cube-slide(ref='slide' :data='items' @change='changePage')
            cube-slide-item(v-for='(item, index) in items' :key='index' @click.native='clickHandler(item, index)')
                a(:href='item.url')
                    img(:src='item.image').banner
        // 滚动分类
        cube-slide(ref='slide' :data='lists' :auto-play='false')
            cube-slide-item(v-for='(item, index) in lists' :key='index' @click.native='clickHandler(item, index)')
                ul.listul
                    li(v-for="(cItem,cIndex) in item" :key='cIndex').listli
                        a(:href='cItem.url')
                            img(:src='cItem.image')
                            p {{cItem.label}}
</template>

<script>
export default {
    data() {
        return {
            items: [],// 轮播图数组
            lists: [],// 滚动分类数组
        }
    },
    methods:{
        changePage(current){
            // console.log('当前轮播图序号为：'+current)
        },
        clickHandler(item,index){
            // console.log(item,index)  
        },
    },
    async created(){
        try {
            // 获取轮播图数据
            const items = await this.$http.get('/api/banner')
            this.items = items
            // 获取轮播图数据
            const lists = await this.$http.get('/api/rollinglist')
            this.lists = lists.data
        }catch(err){
            console.log(err)
        }
    },
}
</script>

<style lang="stylus" scoped>
    #index
        a
            .banner
                display block
                width 100%
        .listul
            display flex
            flex-wrap wrap
        .listli
            width 20%
            img
                width 35px
                height 35px
                border-radius 50%
                padding 5px 0
            p
                font-size 14px
                padding-bottom 10px
</style>

