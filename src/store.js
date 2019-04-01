import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    cartarray: [], // 存储购物车商品的数组
  },
  mutations: {
    // 设置vuex的token
    settoken(state,token){
      state.token = token
    },
    // 添加商品到购物车
    tocart(state,tag){
      let goods = state.cartarray.find(v=>v.title==tag.label)
      if(goods){
        goods.cartCount += 1
      }else{
        state.cartarray.push({title:tag.label,cartCount:1})
      }
    },
    // 购物车数量加一
    cartadd(state,index){
      state.cartarray[index].cartCount++
    },
    // 购物车数量减一
    cartremove(state,index){
      if(state.cartarray[index].cartCount>1){
        state.cartarray[index].cartCount--
      }else{
        if(window.confirm('确定从购物车移除商品吗？')){
          state.cartarray.splice(index,1)
        }
      }
    },
    // 清空购物车
    clearcart(state){
      state.cartarray = []
    },
  },
  actions: {

  },
  // 相当于vue的计算属性computed
  getters: {
    countsum: state => {
      let num = 0
      state.cartarray.forEach(v=>{
        num += v.cartCount
      })
      return num
    }
  },
})
