import { createStore } from 'vuex'
import axios from 'axios'
import { Article } from '../classes/Article.js'

export default createStore({
    state: {
        nbArticles: 10,
        infosArticles: []
    },
    mutations: {
        updateInfosArticles(state, articles) {
            state.infosArticles.push(articles)
        }
    },
    actions: {
        getData(context) {
            axios.get(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=45199ce3ce71493c9d8e7b304898433a&pageSize=${this.nbArticles}&language=fr`)
                .then(result => {
                    for (let i = 0; i <= context.state.nbArticles; i++) {
                        let articles = {
                            "title": result.data.articles[i].title,
                            "publishedAt": new Date(result.data.articles[i].publishedAt).toLocaleDateString(),
                            "author": result.data.articles[i].author,
                            "description": result.data.articles[i].description,
                            "urlToImage": result.data.articles[i].urlToImage,
                            "content": result.data.articles[i].content,
                        }
                        context.commit('updateInfosArticles', articles);
                    }
                }
                )
        }
    },
    modules: {}
})
