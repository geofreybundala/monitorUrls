const {checkWebsite} = require('./checkWebsite');
const {mySites} = require('../data/mySites');
const {resetTracker} = require('../utils/resetTracker');
const {updateTracker} = require('../utils/updateTracker')

/**
 * Handle all urls
 */
const checkEvent= ()=>{

    mySites.forEach(function (url, index) {
        checkWebsite(url,async (isValid)=>{
            isValid ? resetTracker(url) : updateTracker(url);
        })
    });
}

exports.checkEvent = checkEvent;