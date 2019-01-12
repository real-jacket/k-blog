const path = require('path')
const express = require('express')

// session 会话中间件
const session = require('express-session')

// 将session 储存在mongodb中
const MongoStore = require('connect-mongo')(session)

// 基于session实现的 通知 中间件
const flash = require('connect-flash')

const config = require('config-lite')(__dirname)

const routes = require('./routes')
const pkg = require('./package')

const app = express()

// 设置模板目录
app.set('views', path.join(__dirname, 'views'))
// 设置模板引擎为 ejs
app.set('view engine', 'ejs')

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')))

// session中间件
app.use(session({
  name: config.session.key, // 设置cookie 中保存session id 的字段名称
  secret: config.session.secret, // 通过设置 secret 来计算 hash 值 并放在 cookie 中，使产生的signedCookie 防篡改
  resave: true, // 强制更新 session
  saveUninitialized: false, // 设置为false ，强制创建一个 session ，即使用户未登录
  cookie: {
    maxAge: config.session.maxAge, // 过期时间，过期后 cookie 中的session id 自动删除
  },
  store: new MongoStore({ // 将session 储存到mongodb
    url: config.mongodb, // mongodb 地址
  }),
}))

// flash中间件，用来显示通知
app.use(flash())

// 路由
routes(app)

// 监听端口 启动程序
app.listen(config.port, () => {
  console.log(`${pkg.name} listening on port ${config.port}`)
})
