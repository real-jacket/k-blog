module.exports = function(app){
  app.get('/',function(req,res){
    res.redirect('/posts')
  })
  app.use('/singup',require('./singup'))
  app.use('/singin',require('./singout'))
  app.use('/singout',require('./singout'))
  app.use('/comments',require('./comments'))
  app.use('/posts',require('./posts'))
}
