<template>
    <div class="todo-container">
    <div class="todo-wrap">
        <!-- <Header @addTodo="addTodo"/> -->
        <Header ref="header"/>
        <List :todos="todos" :completeTodo="completeTodo"/>
        <Footer :todos="todos" :selectAll="selectAll" :clearAllComplete="clearAllComplete"/>
    </div>
    </div>
</template> 

<script type="text/ecmascript-6">
import  Header  from './components/Header.vue'
import  List  from './components/List.vue'
import  Footer  from './components/Footer.vue'
  export default {
     data() {
       return {
         todos:[]
       }
     },
     mounted(){
       //模拟异步读取todos数据
       setTimeout(()=>{
        const todos= JSON.parse(localStorage.getItem('todos_key')||'[]')       //json格式的数组
        this.todos=todos
       },1000),
       this.$refs.header.$on('addTodo',this.addTodo)
       //绑定事件监听(removeTodo)
       this.$bus.$on('removeTodo',this.removeTodo)
     },
     watch:{
         todos:{
           deep:true,   //深度监视
           handler (val) { 
             localStorage.setItem('todos_key',JSON.stringify(val))           
          }
         }
      },
     methods: {
       addTodo(todo){
         this.todos.unshift(todo)
       },
       removeTodo(index){
         this.todos.splice(index,1)
       },
       selectAll(check){
          this.todos.forEach(todo=>todo.complete=check)
       }, //清除已完成的
        clearAllComplete(){  //返回所有通过测试的元素
           this.todos=this.todos.filter(todo=>!todo.complete)
        },
        completeTodo(check,todo){   //check当前选中的
           todo.complete=check
        }
     },
     components:{
       Header,
       List,
       Footer
     }
  }
</script>

<style scoped>
    .todo-container {
        width: 600px;
        margin: 0 auto;
      }
    .todo-container .todo-wrap {
        padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
 
</style>
