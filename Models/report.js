const mongoose =require('mongoose')

 const reportSchema = new mongoose.Schema({
     url:{
        type:String,
        required:true
     },
     failureCounter:{
        type:Double,
        required:true
     },
 })

 module.exports = mongoose.model('Subscriber',reportSchema)