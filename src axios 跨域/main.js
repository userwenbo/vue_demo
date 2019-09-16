import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'


//声明使用vue插件
Vue.use(VueResource)  //他内部调用install()给组件对象添加一个$http属性对象

 new Vue({
   el:'#app',
   components:{
     App
   },
   template:'<App/>'
 })