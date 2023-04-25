const express = require('express')
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const userRoutes =  require('./routes/userRoutes');
const chatRoutes =  require('./routes/chatRoutes');
const cors = require('cors')
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const app = express();
app.use(express.json())
dotenv.config()
connectDB()
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.get('/',(req,res)=>{
    res.send('api is running')
})

app.use('/api/user', userRoutes)
app.use('/api/chat',chatRoutes)

app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log("server started"))