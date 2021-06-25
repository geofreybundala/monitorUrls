const {checkWebsite} = require('./checkWebsite');
const {mySites} = require('../data/mySites');
const {resetTracker} = require('../utils/resetTracker');
const {updateTracker} = require('../utils/updateTracker')


const checkEvent= ()=>{
    for (let i=0; i < mySites.length; i++) {
        checkWebsite(mySites[i],async (isValid)=>{
            isValid ? resetTracker(mySites[i]) : updateTracker(mySites[i]);
        })
      }
}

exports.checkEvent = checkEvent;