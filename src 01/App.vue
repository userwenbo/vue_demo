<template>
  <div>
     <h2>App  Components</h2>
     <img class="logo" src="./assets/logo.png" alt="logo">
     <HelloWorld/>
  </div>
</template>
 <script>
 import HelloWorld  from './components/HelloWorld'
 export default {
     components:{
       HelloWorld
     }
 }
 </script>
 <style>
    .logo{
       width: 100px;
       height: 100px;
    }
 </style>