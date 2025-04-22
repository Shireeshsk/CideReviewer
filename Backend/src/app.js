const express = require('express')
const airoutes= require('./routes/ai.routes')
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())
app.use('/ai',airoutes);
app.get('/',(req,res)=>{
    res.send("hello world");
})
module.exports = app