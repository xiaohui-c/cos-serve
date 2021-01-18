const express = require('express')
const app = express()
const port = 3002
const cors = require('cors')
// 解决跨域问题
app.use(cors({
    origin: "*",
    credentials:true
}))

// 注册路由
const logoRouter = require('./logo')
const homeRouter = require('./home')
const paperRouter = require('./paper')
const newsRouter = require('./news')
const indexRouter = require('./index')

app.use('/api/logo',logoRouter)//通过/spi/logo/about来进行访问
app.use('/api/home',homeRouter)
app.use('/api/paper',paperRouter)
app.use('/api/news',newsRouter)
app.use('/api/index',indexRouter)

app.listen(port, () => {
    console.log('服务器启动成功');
    
})

