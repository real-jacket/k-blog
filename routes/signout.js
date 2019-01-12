const express = require('express')

const router = express.Router()

const { checkLogin } = require('../middlewares/check')

router.get('/', checkLogin, (req, res, next) => {
  res.send('登出')
  next()
})

module.exports = router
