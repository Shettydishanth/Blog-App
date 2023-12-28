const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')

dotenv.config();

const app = express()


app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.status(200).send({
        "message":"Node Server"
    })
})

const PORT =process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server  is Running on ${DEV_MODE} port no ${PORT}`)
})