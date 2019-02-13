const config = require('./config')

// 用于做相应的合并处理
const merge = require('webpack-merge')

//根据环境判断使用哪份配置
const cfg = process.env.NODE_ENV === 'production' ? config.build.env:config.dev.env

// 访问 env 的环境变量
console.log(process.env)

module.exports = {
  lintOnSave: undefined,

  // 基本路由
  publicPath:'vue',

  // 打包目录
  outputDir: undefined,

  // 为生产环境构建生成source map， 快速定位错误信息
  productionSourceMap: undefined,

  // 支持链式修改
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options =>
          merge(options,{
            limit:5120,
          })
        )


    config.config('define')

  },

  // 倾向整体替换与修改
  // config参数为已经解析好的 webpack 配置
  configureWebpack: config =>{
    //config.plugins = [] // 这样会直接将 plugins 置空

    // 使用return 一个对象会通过 webpack-merge 进行合并，plugins 不会置空
    return {
      plugins: []
    }
  },

  // 对本地服务器进行配置
  devServer:{

    open: true, // 是否自动打开浏览器
    host:'0.0.0.0', // 指定使用一个host。默认为 localhost
    port:8585, // 端口地址
    https: false, // 使用 https 提供服务
    proxy: null, // string | Object 代理设置

    // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
    before: app =>{
      // app 是一个 express 实例
    }

  },
}
