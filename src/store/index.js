import {createStore} from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        nbArticles: 10,
        infosArticles: []
    },
    mutations: {
        updateInfosArticles(state, article) {
            state.infosArticles.push(article)
        }
    },
    actions: {
        getData(context) {
            axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-09-13&sortBy=publishedAt&apiKey=45199ce3ce71493c9d8e7b304898433a&pageSize=${this.nbArticles}&language=en`)
                .then(result => {
                        for (let i = 0; i <= context.state.nbArticles; i++) {
                            let article = {
                                "title": result.data.articles[i].title,
                                "publishedAt": new Date(result.data.articles[i].publishedAt).toLocaleDateString(),
                                "author": result.data.articles[i].author,
                                "description": result.data.articles[i].description,
                                "urlToImage": result.data.articles[i].urlToImage,
                                "content": result.data.articles[i].content,
                            }
                            context.commit('updateInfosArticles', article);
                        }
                    }
                )
        }
    },
    modules: {}
})
