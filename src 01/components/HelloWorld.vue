<template>
  <div>
    <h2>{{title}}</h2>
  </div>
</template>
<script>
export default {
   name:'Helloworld',
   data() {
     return {
       title:'HellWorld Vue'
     }
   },
}
</script>
<style scoped>
    h2{
      color: pink;
    }
</style>