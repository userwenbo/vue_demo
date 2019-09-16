<template>
  <div class="container">
      <Search/>
      <Main/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Main from './components/main.vue'
  import Search from './components/search.vue'
  export default {
    components:{
      Search,
      Main
    }
  }
</script>
  
<style scoped>

 
</style>
