const signup = require('./signup')
const signin = require('./signin')
const signout = require('./signout')
const comments = require('./comments')
const posts = require('./comments')

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.get('/', (req, res) => {
    res.redirect('/posts')
  })
  app.use(signup)
  app.use(signin)
  app.use(signout)
  app.use(comments)
  app.use(posts)
}
