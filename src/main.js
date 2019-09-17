//入口js

import Vue from 'vue'

import App from './App.vue'
import store from './vuex/store'
//创建一个vm对象，作为全局事件总线（对象）保存到Vue原型对象上，所有组件能直接可见
Vue.prototype.$eventBus = new Vue()
 new Vue({
   el:'#app',
   render: h=>h(App),  
   //配置vuex的store对象  ==>所有组件对象都多了一个属性$store
   store
 })