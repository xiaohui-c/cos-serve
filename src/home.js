const client =require('./cos.js')
const express = require('express')
const router = express.Router()
  
  router.get('/header', (req, res) => {
    let urlhead = client.signatureUrl('/qiushibaike/static/demo/userpic/20.jpg');
    let urlads = client.signatureUrl('/qiushibaike/static/demo/demo20.jpg');
    res.json({
        urlhead,
        urlads,
        message:'请求成功'
    })
})
  router.get('/person', (req, res) => {
    let urlhead = client.signatureUrl('/qiushibaike/static/demo/userpic/20.jpg');
    let urlgb = client.signatureUrl('/qiushibaike/static/demo/datapic/41.jpg');
    res.json({
        urlhead,
        urlgb,
        message:'请求成功'
    })
})

// 把定义好的路由暴露出去
module.exports = router;