const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();
const {job} = require('./Controllers/urlTest');


mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log('Connected to Database'))

const hostname = process.env.HOST;
const port = process.env.PORT;



app.listen(port,hostname,()=>{
 console.log(`Server running at http://${hostname}:${port}`)
})
