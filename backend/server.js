const express = require('express')
const dotenv = requier('dotenv')
const app = express();

dotenv.config()


app.get('/',(req,res)=>{
    res.send('api is running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log("server started"))