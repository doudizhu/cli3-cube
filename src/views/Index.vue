<template lang="pug">
    #index
        cube-slide(ref='slide' :data='items' @change='changePage')
            cube-slide-item(v-for='(item, index) in items' :key='index' @click.native='clickHandler(item, index)')
                a(:href='item.url')
                    img(:src='item.image').banner

</template>

<script>
export default {
    data() {
        return {
            items: []
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
</style>

