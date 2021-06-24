const express = require('express');
const path = require('path')
const app = express();
require('dotenv').config();
// const {job} = require('./Controllers/urlTest');

const mongoose = require('mongoose');
console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error',(error)=>console.log(error))
db.once('open',()=>console.log('Connected to Database'))

const hostname = process.env.HOST;
const port = process.env.PORT;

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
})


app.listen(port,hostname,()=>{
    //job;
 console.log(`Server running at http://${hostname}:${port}`)
})
