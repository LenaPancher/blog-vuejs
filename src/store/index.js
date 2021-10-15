import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        infosArticles: [],
        newItems: [],
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
            const getLocalData = JSON.parse(localStorage.getItem('CartAdmin'));
            if (index) {
                getLocalData.splice(index, 1);
                localStorage.setItem('CartAdmin', JSON.stringify(getLocalData))
            }
        },
        updateAdmin(state, index) {
            const getLocalData = JSON.parse(localStorage.getItem('CartAdmin'));
            if (index) {
                console.log(getLocalData[index])
            }
        },
        addNewsItems(state, articles) {
            state.newItems.push(articles)
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
        },
        getNewData(context) {
            axios.get(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=45199ce3ce71493c9d8e7b304898433a&pageSize=10&language=fr`)
                .then((results) => {
                    results.data.articles.forEach(element => {
                        let articles = {
                            "title": element.title,
                            "publishedAt": new Date(element.publishedAt).toLocaleDateString(),
                            "author": element.author,
                            "description": element.description,
                            "urlToImage": element.urlToImage,
                            "content": element.content,
                        }
                        context.commit('addNewsItems', articles);
                    });
                })
        },
    },
    getters: {
        getNewItems(state) {
            return state.newItems;
        }
    },
    modules: {}
})
