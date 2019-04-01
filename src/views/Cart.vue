<template lang="pug">
    div
        .goods(v-for='(item,index) in cartarr' :key='index')
            | {{item.title}}
            .goodsright
                i.cubeic-remove(@click='removeCart(index)')
                span {{item.cartCount}}
                i.cubeic-add(@click='addCart(index)')
        cube-button(style='margin:10px 0') 下单
        cube-button(style='margin:10px 0') 清空购物车
</template>

<script>
import {mapState} from 'vuex'

export default {
    data(){
        return {
            // cartarr: [
            //     {
            //         title: '小米手机',
            //         cartCount: 5,
            //     },
            //     {
            //         title: '华为手机',
            //         cartCount: 5,
            //     },
            // ]
        }
    },
    computed:{
        ...mapState({
           cartarr: state => state.cartarray
        })
    },
    methods:{
        // 减少商品
        removeCart(index){

        },
        // 增加商品
        addCart(index){
            
        },
    },
}
</script>

<style lang="stylus" scoped>
    .goods
        padding 10px
        text-align left 
        .goodsright
            float right
        i
            font-size 18px
</style>
