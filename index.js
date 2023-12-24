const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')

const app = express()

// 11.20

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.status(200).send({
        "message":"Node server"
    })
})

app.listen(3000,()=>{
    console.log(`server Running on port 3000`)
})