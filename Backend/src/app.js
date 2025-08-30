require('dotenv').config()
const cookieParsel = require('cookie-parser')
const express = require('express');
const authRoutes = require('./routes/auth.routes')
const authPostRoutes=require("./routes/post.routs")
const cors=require("cors")


const app = express()

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
))    
app.use(cookieParsel())
app.use(express.json())
app.use('/auth',authRoutes)

app.use('/auth/posts',authPostRoutes)


module.exports = app;

