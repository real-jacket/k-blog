const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /posts 所有用户或特定用户的文章页
//  eg: GET  /post?author = xxx
router.get('/',function(req,res,next){
  res.send('主页')
})

// POST /posts/create
// 创建一片文章
router.post('/create',checkLogin,function(req,res,next){
  res.send('发表一篇文章')
})

// GET /posts/create
// 发表文章页
router.get('/create',checkLogin,function(req,res,next){
  res.send('发表文章页')
})

//GET /posts/:postID 查看一篇文章
// eg：posts/12583
router.get('/:postId',function(req,res,next){
  res.send('查看一篇文章（包含留言）')
})

// GET /posts/:postId/edit 跳转到修改文章页
// eg: /posts/12583/edit
router.get('/:postId/edit',checkLogin,function(req,res,next){
  res.send('修改文章页')
})

//POST /posts/:postId/edit 发送文章修改请求
//eg: /posts/12853/edit
router.post('/:postId/edit',checkLogin,function(req,res,next){
  res.send('修改文章')
})

// GET /posts/:postId/remove 删除指定文章
//eg: /posts/12853/remove
router.get('/:postID/remove',checkLogin,function(req,res,next){
  res.send('删除文章')
})

module.exports = router
