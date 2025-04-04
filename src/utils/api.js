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

const getCommentsByArticleId = (article_id) => {
    return api.get(`/api/articles/${article_id}/comments`).then(({ data: { comments } }) => {
        comments.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
        });
        return comments
    })
}
const getAllUsers = () => {
    return api.get('/api/users').then(({ data: { users } }) => {
        return users
    })
}
const patchArticleVotesById = (article_id, inc_votes) => {
    return api.patch(`api/articles/${article_id}`, { inc_votes }).then(({ data: { article } }) => {
        return article
    })
}
const postCommentByArticleId = (article_id, body) => {
    return api.post(`api/articles/${article_id}/comments`, body).then(({ data: { comment } }) => {
        return comment
    })
}
const deleteCommentById = (comment_id) => {
    return api.delete(`api/comments/${comment_id}`)
}

export { getAllArticles, getArticleById, getCommentsByArticleId, getAllUsers, patchArticleVotesById, postCommentByArticleId, deleteCommentById }