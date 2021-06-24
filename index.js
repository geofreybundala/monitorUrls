const express = require('express');
const path = require('path')
const app = express();
require('dotenv').config()

const hostname = process.env.HOST;
const port = process.env.PORT;

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
})


app.listen(port,hostname,()=>{
 console.log(`Server running at http://${hostname}:${port}`)
})
