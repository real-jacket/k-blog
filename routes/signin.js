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
})

module.exports = router
