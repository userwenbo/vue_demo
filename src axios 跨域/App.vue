<template>
  <div>
       <h2 v-if="!repoName">loading.....</h2>
       <div v-else>most star repo is<a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
  export default {
     data() {
       return {
         repoName:'',
         repoUrl:''
       }
     },
     mounted(){
        const url=`/api/search/repositories?q=v&sort=stars`

     axios.get(url).then(response=>{
          const result=response.data
          const {name,html_url}=result.items[0]
          this.repoName=name
          this.repoUrl=html_url
       },error=>{
         alert('请求错误'+error.message)
       })

  }
} 
</script>

<style scoped>

 
</style>

