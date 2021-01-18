const client =require('./cos.js')
const express = require('express')
const router = express.Router()
  
  router.get('/header', (req, res) => {
    let urlheadone = client.signatureUrl('/qiushibaike/static/demo/userpic/19.jpg');
    let urlheadtwo = client.signatureUrl('/qiushibaike/static/demo/userpic/4.jpg');
    let urlheadthree = client.signatureUrl('/qiushibaike/static/demo/userpic/5.jpg');
    let urlheadfour = client.signatureUrl('/qiushibaike/static/demo/userpic/14.jpg');
let objHead=[urlheadone,urlheadtwo,urlheadthree,urlheadfour]
    res.json({
        objHead,
        message:'请求成功'
    })
})
  router.get('/chat', (req, res) => {
    let urlheadmy = client.signatureUrl('/qiushibaike/static/demo/userpic/20.jpg');
    let urlheadother = client.signatureUrl('/qiushibaike/static/demo/userpic/6.jpg');
    let urlpic = client.signatureUrl('/qiushibaike/static/demo/datapic/29.jpg');
    let objHead=[urlheadmy,urlheadother,urlpic]
      res.json({
        objHead,
        message:'请求成功'
    })
})
  router.get('/chatlist', (req, res) => {
    let urlhead = client.signatureUrl('/qiushibaike/static/demo/userpic/19.jpg');
    
    res.json({
        urlhead,
        message:'请求成功'
    })
})

// 把定义好的路由暴露出去
module.exports = router;