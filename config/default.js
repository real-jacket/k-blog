module.exports = {
    port: 3000,
    session: {
      secret: 'k-blog',
      key: 'k-blog',
      maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/k-blog'
}
