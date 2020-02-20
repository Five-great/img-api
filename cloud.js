const AV = require('leanengine');
const request = require('request');
AV.Cloud.define('self_wake', function(req) {
    request(process.env.ADMIN_URL, function (error, response, body) {
        console.log('自唤醒任务执行成功，响应状态码为:', response && response.statusCode);
    });
})
