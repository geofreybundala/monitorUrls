const schedule = require('node-schedule');
const {checkEvent}  = require('../services/urls.service')

 const timer = schedule.scheduleJob('*/2 * * * * *', () => {
  checkEvent();
  });


  exports.timer = timer;