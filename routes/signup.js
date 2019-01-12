const express = require('express')

const router = express.Router()

const { checkNotLogin } = require('../middlewares/check')

router.get('/', checkNotLogin, (req, res, next) => {
  res.send('注册页')
  next()
})

router.post('/', checkNotLogin, (req, res, next) => {
  res.send('注册')
  next()
})

module.exports = router
