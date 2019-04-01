<template lang="pug">
    div.panelsbox
        cube-scroll.leftpanels
            ul
                li(
                    v-for='(list,index) in tabslabel' :key='index'
                    @click='selectlist(index)'
                    :class='list.active ? "active" : ""'
                ) {{list.label}}
        cube-scroll.rightpanels
            ul
                li(
                    v-for='(tag,index) in tags' :key='index'
                )
                    img(:src='tag.image')
                    p {{tag.label}}
</template>

<script>
export default {
    data(){
        return{
            tags:[],
            tabslabel:[
                {
                    label:'热门推荐',
                    active:true,
                },
                {
                    label:'手机数码',
                    active:false,
                },
                {
                    label:'家用电器',
                    active:false,
                },
                {
                    label:'家用空调',
                    active:false,
                },
                {
                    label:'电脑产品',
                    active:false,
                },
                {
                    label:'计生情趣',
                    active:false,
                },
                {
                    label:'美妆护肤',
                    active:false,
                },
                {
                    label:'口红',
                    active:false,
                },
                {
                    label:'手袋',
                    active:false,
                },
                {
                    label:'金银财宝',
                    active:false,
                },
                {
                    label:'手机数码',
                    active:false,
                },
                {
                    label:'手机数码',
                    active:false,
                },
                {
                    label:'手机数码',
                    active:false,
                },
                {
                    label:'手机数码',
                    active:false,
                },
            ],
            active:true,
        }
    },
    methods:{
        // 点击左侧分类
        selectlist(index){
            this.tabslabel.forEach((val,ind)=>{
                if(index == ind){
                    val.active = true
                }else{
                    val.active = false
                }
            })
            this.getclassify(index)
        },
        // 获取分类的方法
        async getclassify(index){
            const result = await this.$http.get('/api/classify',{params:{type:index}})
            this.tags = result.data
        },
    },
    created(){
        // 获取默认的分类数据
        this.getclassify(0)
    },
    mounted(){
        // 设置滚动盒子的高度
        const leftpanels = document.querySelector('.leftpanels')
        const rightpanels = document.querySelector('.rightpanels')
        // // 方式一：js计算
        // const bodyheight = document.documentElement.clientHeight
        // leftpanels.style.height = bodyheight - 57 + 'px'
        // rightpanels.style.height = bodyheight - 57 + 'px'
        // 方式二：纯css实现，height:-webkit-fill-available,
        // 缺点不兼容ie&edge 
        // 优点一：不需要计算
        // 优点二：可以放到最开始生命周期中执行，防止被编译style的默认代码覆盖（*待优化）
        leftpanels.style.height = '-webkit-fill-available'
        rightpanels.style.height = '-webkit-fill-available'
        const panelsbox = document.querySelector('.panelsbox')
        panelsbox.style.paddingBottom = '57px'

    },
}
</script>

<style lang="stylus" scoped>
    .panelsbox
        display flex
        .leftpanels
            width 30%
            li
                height 50px
                line-height 50px
                border-bottom 1px solid #fff
                color #333
                background #f8f8f8
                font-size 14px
            .active
                background #fff
                color #e93b3d
        .rightpanels
            width 70%
            ul
                display flex
                flex-wrap  wrap
                li
                    width 50%
                    justify-content center
                    align-items center
                    font-size 15px
                    img 
                        width 80px
                        height  80px
</style>
