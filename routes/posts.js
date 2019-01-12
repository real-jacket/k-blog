const express = require('express')

const router = express.Router()

const { checkLogin } = require('../middlewares/check')

// GET /posts 所有用户或特定用户的文章页
//  eg: GET  /post?author = xxx
router.get('/', (req, res, next) => {
  res.send('主页')
  next()
})

// POST /posts/create
// 创建一片文章
router.post('/create', checkLogin, (req, res, next) => {
  res.send('发表一篇文章')
  next()
})

// GET /posts/create
// 发表文章页
router.get('/create', checkLogin, (req, res, next) => {
  res.send('发表文章页')
  next()
})

// GET /posts/:postID 查看一篇文章
// eg：posts/12583
router.get('/:postId', (req, res, next) => {
  res.send('查看一篇文章（包含留言）')
  next()
})

// GET /posts/:postId/edit 跳转到修改文章页
// eg: /posts/12583/edit
router.get('/:postId/edit', checkLogin, (req, res, next) => {
  res.send('修改文章页')
  next()
})

// POST /posts/:postId/edit 发送文章修改请求
// eg: /posts/12853/edit
router.post('/:postId/edit', checkLogin, (req, res, next) => {
  res.send('修改文章')
  next()
})

// GET /posts/:postId/remove 删除指定文章
// eg: /posts/12853/remove
router.get('/:postID/remove', checkLogin, (req, res, next) => {
  res.send('删除文章')
  next()
})

module.exports = router
