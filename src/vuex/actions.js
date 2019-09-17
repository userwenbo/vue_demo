/* 包含n个用于间接更新数据的方法的对象 */
import axios from 'axios'

import { REQUESTING,REQ_SUCCESS,REQ_ERROR} from './mutation-types'

export default {
  async searchUsers({
      commit
    }, searchName) {
      commit(REQUESTING)  //当成参数使用
      const url = `https://api.github.com/search/users?q=${searchName}`
      //发ajax请求获取user列表
      try {
        const response = await axios.get(url, {
          params: {
            user_name: searchName
          }
        })
        const users = response.data.items.map(item => ({
          name: item.login,
          url: item.html_url,
          avatar_url: item.avatar_url
        }))
        commit(REQ_SUCCESS,{users})
      } catch (error) {
        commit(REQ_ERROR,'请求错误：'+error.message)
      }
  }
}