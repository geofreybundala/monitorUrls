const {checkWebsite} = require('./checkWebsite')
const {mySites} = require('../data/mySites')

const checkEvent= ()=>{
    for (let i=0; i < mySites.length; i++) {
        checkWebsite(mySites[i], (check)=>{
            console.log(check); 
        })
      }

}

exports.checkEvent = checkEvent;