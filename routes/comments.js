const express = require('express')

const router = express.Router()

const { checkLogin } = require('../middlewares/check')

router.post('/', checkLogin, (req, res, next) => {
  res.send('创建留言')
  next()
})

router.get('/:commentId/remove', checkLogin, (req, res, next) => {
  res.send('删除留言')
  next()
})

module.exports = router
