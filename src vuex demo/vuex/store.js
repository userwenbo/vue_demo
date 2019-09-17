import Vue from 'vue'
import Vuex from 'vuex'

//声明使用插件
Vue.use(Vuex)
//包含状态数据的对象  相当于data对象
const state={
  count:0
}
//包含n个用于直接更新状态数据方法的对象
//直接更新状态数据
const mutations = {
   INCREMENT(state){
      state.count++
   },
   DECREMENT(state) {
    state.count--
  }
}
//包含n个用于间接更新状态数据方法的对象
//间接更新状态数据   有几个操作更新状态
const actions= {
  //context.cmmmit
  //  incerment({commit}){
  //     commit('INCREMENT') //传触发调用的函数的名字
  //  },
  //  decrement({commit}){
  //      commit('DECREMENT')
  //  },
   incrementIfOdd({commit,state}){
      if(state.count%2===1){
          commit('INCREMENT')    
      }
   },
   incrementAsync({commit}){
       setTimeout(() => {
         commit('INCREMENT')
       }, 1000);
   }
}

//包含n个基于state数据的getter计算属性的方法的对象
const getters= {
   eventOrOdd(state){
     return state.count%2===1?'奇数':'偶数'
   }
}

export default new Vuex.Store({
   state,
   mutations,
   actions,
   getters
})
