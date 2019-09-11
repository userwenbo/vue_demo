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