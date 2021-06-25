/**
 * function for printing simple report
 * @param {*} url 
 * @param {*} timestamp 
 */

const simpleReport = (url,timestamp)=>{
    console.log('*********** Oops! ************');
    console.log('*********** WEBSITE IS DOWN 3 TIMES************');
    console.log(`url : ${url}`);
    console.log(`last failure: ${timestamp}`)
    console.log('***********************');
}

exports.simpleReport = simpleReport;