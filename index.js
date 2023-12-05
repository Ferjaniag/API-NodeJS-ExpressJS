const express = require("express")
const bodyParser = require("body-parser") 
const dotenv = require('dotenv')
const mongoose=require('mongoose')
const book=require('./routes/book.route') 

var app=express() ; 
app.use(bodyParser.json()) 
app.use(express.json());


dotenv.config()

mongoose.connect(process.env.DB_URL).then(() => {

    console.log("Connceted to database")

}).catch((err) => {

    console.log(err)
})


const server=app.listen(process.env.PORT,(err)=>{
    if (err) {console.log(err) }
    else {
        console.log(`Listen en port : ${process.env.PORT}`)
    }
    
    })




app.use(book)
