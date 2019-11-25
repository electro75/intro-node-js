const { users, posts } = require('./data');



const getUserById = (id, cb) => {
    setTimeout(() => {
        const user = users.find(user => user.id === id)
        cb(user)
    }, 150)
}

const getPostsForUser = (userId, cb) => {
    setTimeout(() => {
        const post = posts.filter(post => post.createdBy === userId)
        cb(post)
    }, 150)
}

module.exports = {
    getUserById,
    getPostsForUser
}