const client =require('./cos.js')
const express = require('express')
const router = express.Router()
  
  router.get('/about', (req, res) => {
    let url = client.signatureUrl('/qiushibaike/static/common/logo.png');
    res.json({
        url,
        message:'请求成功'
    })
})

// 把定义好的路由暴露出去
module.exports = router;