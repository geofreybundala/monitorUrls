const Report = require('../Models/report');


/**
 * 
 * @param {*} url 
 */
const resetTracker = (url)=>{
    Report.findOne({'url':url},async function(err, data) { 
        if(err) {
            console.log(err);
        } else {
            if(data){
                //reset tracker
                data.tracker = 0;
                data.save();                           
            }
        }
    });
}

exports.resetTracker = resetTracker;