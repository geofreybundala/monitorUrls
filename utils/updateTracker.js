const Report = require('../Models/report');
const {simpleReport} = require('./errorReport');


/**
 * function handling failure
 * @param {*} url 
 */
const updateTracker = (url)=>{
    Report.findOne({'url':url},async function(err, data) { 
        if(err) {
            console.log(err);
        } else {
            if(data){
                //update failure Counter
                if(data.tracker == 3){
                    data.tracker = 1;
                    //print log report 
                    simpleReport(data.url, data.timestamp);

                }else{
                    data.tracker = data.tracker+1;
                }
                data.save();                           
            }else{
                //create Fail report 
                const ReportObj = new Report({
                    url:url,
                    tracker:1
                })
                try{
                 await ReportObj.save();
                }catch(err){
                    console.log(err.message);
                }
            } 
        }
        });
}

exports.updateTracker = updateTracker;