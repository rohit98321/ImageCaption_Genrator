require('dotenv').config()
const cookieParsel = require('cookie-parser')
const express = require('express');
const authRoutes = require('./routes/auth.routes')
const authPostRoutes=require("./routes/post.routs")
const cors=require("cors")


const app = express()


const origins=[
    "http://localhost:5173",
    "https://imagecaption-genrator-1.onrender.com"
]

app.use(cors(
    {
        origin: origins,
        credentials: true
    }
))    
app.use(cookieParsel())
app.use(express.json())
app.use('/auth',authRoutes)

app.use('/auth/posts',authPostRoutes)


module.exports = app;

