import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    getData(){
      axios.get("https://newsapi.org/v2/everything?q=tesla&from=2021-09-13&sortBy=publishedAt&apiKey=API_KEY")
      .then(data => console.log(data.articles))
    }
  },
  modules: {
  }
})
