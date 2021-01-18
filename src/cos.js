
// COS请求公用方法
const OSS = require('ali-oss');

const client = new OSS({
    accessKeyId: 'LTAI4G5f6ywRo6jgVoVVZVQ2',
    accessKeySecret: '05DaHXCL5VaYwST9IRFnDG5pGaX8ei',
    bucket: 'mycos',
    region: 'oss-cn-shenzhen',
     secure: true
})
  
module.exports=client
