<template>
  <div>
    <h2 v-if="firstView">请输入关键字搜索</h2>
    <h2 v-else-if="loading">请求中...</h2>
    <h2 v-else-if="errorMsg">{{errorMsg}}</h2>
    <div class='row' v-else>
        <div class="card" v-for="user in users" :key="user.name">        
            <a :href="user.url" target="_blank">
            <img :src="user.avatar_url" style="width:100px">
            </a>
            <p class="card-text">{{user.name}}</p>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import { async } from 'q'
  export default {
    data() {
      return {
        firstView:true,   //是否显示初始页面
        loading:false,    //是否正在请求中
        users:[],    //需要显示的用户列表
        errorMsg:''   //请求错误信息
      }
    },
    mounted() {
      this.$eventBus.$on('search',async (searchName)=>{
         //更新状态数据
         this.firstView=false
         this.loading=true
         const url=`https://api.github.com/search/users?q=${searchName}`
         //发ajax请求获取user列表
         try{
            const response=await axios.get(url,{
              params:{
                user_name:searchName
              }
            })
            const users=response.data.items.map(item=>({
                name:item.login,
                url:item.html_url,
                avatar_url:item.avatar_url
            }))
            this.loading=false
            this.users=users 
         }catch(error){
            this.loading=false
            this.errorMsg=error.message
         }
      })
    },
  }
</script>

<style scoped>
  .card {
      float: left;
      width: 33.333%;
      padding: .75rem;
      margin-bottom: 2rem;
      border: 1px solid #efefef;
      text-align: center;
  }

  .card > img {
      margin-bottom: .75rem;
      border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

 
</style>
