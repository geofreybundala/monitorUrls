const {checkWebsite} = require('./checkWebsite');
const {mySites} = require('../data/mySites');
const Report = require('../Models/report')

const checkEvent= ()=>{
    for (let i=0; i < mySites.length; i++) {
        checkWebsite(mySites[i],async (isValid)=>{
            if(!isValid){
                const ReportObj = new Report({
                    url:mySites[i],
                    failureCounter:1
                })
    
                try{
                    const newReport = await ReportObj.save()
                    console.log(newReport);
                }catch(err){
                    console.log(err.message)
                }
            }
        })
      }

}

exports.checkEvent = checkEvent;