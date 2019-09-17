//入口js

import Vue from 'vue'

import App from './App.vue'
import store from './vuex/store'


 new Vue({
   el:'#app',
   render: h=>h(App),
   store   //配置vuex的store对象  ==>所有组件对象都多了一个属性$store
 })