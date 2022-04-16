require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors');
const app = express()
app.use(cors());


// ___________________
// Port (set up for hosting w. heroku)
// ___________________
const PORT = process.env.PORT || 3001

// ___________________
// Database
// ___________________
const mongoURI = process.env.MONGO_URI

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true},
  () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
const db = mongoose.connection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected', mongoURI))

// ___________________
// Controllers
// ___________________
// Step 1/3 require the controller to be able to use the products routes
// ___________________
const statusRouter = require('./controllers/statusController')

// Middleware
// ___________________

// use morgan
app.use(morgan('dev'))


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/', statusRouter)


app.listen(PORT, ()=>{
    console.log(`Port : ${PORT}  server runing`)
})