const http = require('http');
const https = require('https');
 
 const checkWebsite =(url, callback)=> {
  https
    .get(url, function(res) {
      //console.log(url, res.statusCode);
      return callback(res.statusCode === 200);
    })
    .on("error", function(e) {
      return callback(false);
    });
}

exports.checkWebsite = checkWebsite