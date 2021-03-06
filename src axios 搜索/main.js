import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App.vue'

Vue.use(VueResource)
//创建一个vm对象，作为全局事件总线（对象）保存到Vue原型对象上，所有组件能直接可见
Vue.prototype.$eventBus=new Vue()
 new Vue({
   el:'#app',
   components:{
     App
   },
   template:'<App/>'
 })