const client =require('./cos.js')
const express = require('express')
const router = express.Router()
  
  router.get('/follow', (req, res) => {
    let urlhead = client.signatureUrl('/qiushibaike/static/demo/userpic/12.jpg');
    let urlheadbg = client.signatureUrl('/qiushibaike/static/demo/datapic/13.jpg');
    let headbg = client.signatureUrl('/qiushibaike/static/demo/topicpic/13.jpeg');
    let banner1 = client.signatureUrl('/qiushibaike/static/demo/banner1.jpg');
    let banner2 = client.signatureUrl('/qiushibaike/static/demo/banner2.jpg');
    let banner3 = client.signatureUrl('/qiushibaike/static/demo/banner3.jpg');
    let nearlyObjImg = client.signatureUrl('/qiushibaike/static/demo/datapic/44.jpg');
      let objHead = [urlhead, urlheadbg]
      let hotClassfyImage=[{img:banner1},{img:banner2},{img:banner3}]
    res.json({
        objHead,
        hotClassfyImage,
      nearlyObjImg,
      headbg,
        message:'请求成功'
    })
})
 
// 把定义好的路由暴露出去
module.exports = router;