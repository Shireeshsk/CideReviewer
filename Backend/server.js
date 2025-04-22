const app = require('./src/app')
require('dotenv').config()
app.listen(3000,()=>{
    console.log(`server is runnning on http://localhost:3000`);
})