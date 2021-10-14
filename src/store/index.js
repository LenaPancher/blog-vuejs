import { createStore } from 'vuex'
import axios from 'axios'
import { Article } from '../classes/Article.js'

export default createStore({
  state: {
    
  },
  mutations: {
  },
  actions: {
    getData(){
      axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-09-13&sortBy=publishedAt&apiKey=45199ce3ce71493c9d8e7b304898433a&pageSize${this.}`)
      .then(data => console.log(data.articles))
    }
  },
  modules: {
  }
})
