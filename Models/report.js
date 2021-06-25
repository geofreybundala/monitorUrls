const mongoose =require('mongoose')

 const reportSchema = new mongoose.Schema({
     url:{
        type:String,
        required:true
     },
     tracker:{
      type:Number,
      required:true
     },
     timestamp:{
      type:Date,
      required:true,
      default: Date.now
      }
 })

 module.exports = mongoose.model('Reports',reportSchema)