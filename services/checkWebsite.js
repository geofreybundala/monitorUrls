const http = require('http');
const https = require('https');
 
/**
 * test url is active
 * @param {*} url 
 * @param {*} callback 
 */
 const checkWebsite =(url, callback)=> {
  https.get(url, function(res) {
      return callback(res.statusCode === 200);
    })
    .on("error", function(e) {
      return callback(false);
    });
}

exports.checkWebsite = checkWebsite