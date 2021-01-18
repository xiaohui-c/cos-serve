const client =require('./cos.js')
const express = require('express')
const router = express.Router()
  
  router.get('/main', (req, res) => {
    let urlhead = client.signatureUrl('/qiushibaike/static/demo/userpic/12.jpg');
    let urlTopImg = client.signatureUrl('/qiushibaike/static/demo/datapic/11.jpg');
    res.json({
      urlhead,
      urlTopImg,
        message:'请求成功'
    })
})
  router.get('/maindetail', (req, res) => {
    let viewPicOne = client.signatureUrl('/qiushibaike/static/demo/datapic/13.jpg');
    let viewPicTwo = client.signatureUrl('/qiushibaike/static/demo/datapic/14.jpg');
    let viewPicThree = client.signatureUrl('/qiushibaike/static/demo/datapic/15.jpg');
let viewPicArr=[viewPicOne,viewPicTwo,viewPicThree]
    res.json({
      viewPicArr,
        message:'请求成功'
    })
})
 
// 把定义好的路由暴露出去
module.exports = router;