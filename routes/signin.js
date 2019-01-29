const express = require('express')

const router = express.Router()

const { checkNotLogin } = require('../middlewares/check')

router.get('/', checkNotLogin, (req, res, next) => {
  res.send('登录页')
  next()
})

router.post('/', checkNotLogin, (req, res, next) => {
  res.send('登录')
  next()
  console.log('测试')
})

module.exports = router
