# Vue
## 组件
实现所有功能界面所有代码的集合

## todeList
不能用对象 多个函数共用一个对象
```
    放到哪里面  看有哪几个组件共用  
    props  标签属性  :的问题
    onmouseover  onmouseout    onmmouseleave onmouseenter
    标识      不能直接修改父组件传递的数据   
```
## 组件通信
### props
用于父组件向子组件传递数据
一般/非函数  父-->子
通信函数  是为了反向传数据  子组件-->父组件
### vue自定义事件
给子组件标签绑定事件监听
子向父通信
### 全局事件总线
   分发事件 发送数据  回调函数     组件继承vm的方法   vm可以用vue的原型对象的方法
### slot 
父向子
### vuex
    多组件共享状态
    组件间的关系也没有限制  
    同一个事件可以对应对个容器 
#### 原型对象
this.__proto__.__proto__就是Vue的原型对象
this._proto_就是Vue的实例对象vm
每个组件都有自己的vm对象
显示原型 --->原型对象 
隐式原型 --->原型对象
利用隐式原型链查找变量
````
export default {
  name: 'App',
  components: {  //注册组件
    HelloWorld     // 左边是标识名称
   }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'   //模版: 标签格式的字符串
})
````
在子组件绑定监听,在父组件中分发
mouted  绑定事件监听  接受数据
       分发事件  数据
vue的自定义事件       
事件总线: 
创建一个vm对象,作为全局事件总线(对象)保存到vue原型对象上,
Vue.prototype.$bus=new Vue      
$gobalEventBus    $bus
### slot
传递标签结构

## vue-ajax
  声明使用vue插件
   response.data=result  
## UI组件库
   按需打包
   基本语法认识:
   引入:  import ....
   注册:  
   ````
   Vue.component(Button.name,Button)
   ````
   默认暴露可以随便写

   传递数据

![1568269047121](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1568269047121.png)

data里面   反向代理
路由导航   路由跳转
声明式 和 编程式导航  写代码去跳转 history lication

缓存路由组件
<keep-alive></keep-alive> 


npm install -g typescript
tsc-v

'outDir' 
转换数值失败NAN