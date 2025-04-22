const express = require('express')
const airoutes= require('./routes/ai.routes')
const app = express();
app.use(express.json())
app.use('/ai',airoutes);
app.get('/',(req,res)=>{
    res.send("hello world");
})
module.exports = app