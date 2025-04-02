import axios from "axios";


const api = axios.create({
    baseURL: 'https://nc-news-1spl.onrender.com/',
})

const getAllArticles = (params) => {
    return api.get('/api/articles', { params }).then(({ data: { articles } }) => {
        return articles
    })
}

const getArticleById = (article_id) => {
    return api.get(`/api/articles/${article_id}`).then(({ data: { article } }) => {
        return article
    })
}

export { getAllArticles, getArticleById }