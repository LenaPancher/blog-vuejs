import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        infosArticles: [],
        adminArticles: []

    },
    mutations: {
        updateInfosArticles(state, articles) {
            state.infosArticles.push(articles);
        },
        addAdminArticle(state, article) {
            state.adminArticles.unshift(article);
        },
        deleteAdmin(state, index) {
            state.infosArticles.splice(index, 1);
        }
    },
    actions: {
        getData(context) {
            axios.get(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=45199ce3ce71493c9d8e7b304898433a&pageSize=100&language=fr`)
                .then(result => {
                    result.data.articles.forEach(element => {
                        let articles = {
                            "title": element.title,
                            "publishedAt": new Date(element.publishedAt).toLocaleDateString(),
                            "author": element.author,
                            "description": element.description,
                            "urlToImage": element.urlToImage,
                            "content": element.content,
                        }
                        context.commit('updateInfosArticles', articles);            
                    });
                }
                )
        }
    },
    getters: {
    },
    modules: {}
})
