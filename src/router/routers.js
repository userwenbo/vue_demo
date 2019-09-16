/* 所有路由的数组 */

import About from '../pages/about.vue'
import Home  from '../pages/home.vue'
import News  from '../pages/news.vue'
import Message  from '../pages/message.vue'

export default [
   {
     path: '/about',
     component: About
   }, {
     path: '/home',
     component: Home,
     children:[
       {
         path:'/home/news',
         component: News
       },
       {
         path:'message',  //和/home/message等同的
         component: Message
       }
     ]
   }, {
     path: '/',
     redirect: '/about'
   },

]