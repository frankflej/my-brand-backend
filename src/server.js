import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import router from './routes/allroute.js'

const app=express()

dotenv.config()
app.use(cors())
app.use(bodyParser.json({ limit: '30mb' }))
const port=process.env.port
const host=process.env.host
const conn=process.env.con

try {
    mongoose.set('strictQuery',false)
    mongoose.connect(conn,{ useNewUrlParser: true },()=>{console.log("DB connected")})
    app.use('/myapi', router)
    app.listen(port,()=>{
        console.log(`Hellooo its connected on port ${port}`)
    })
}catch (error) {
    console.log(error)
}

