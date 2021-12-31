//DEPENDENCIES
const express = require('express')
require('dotenv').config()
const app = express()
const breadsRouter = require('./controllers/breads_controller')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static("public"))
app.use('/breads', breadsRouter)
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//CONNECTING DB 
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => { console.log('connected to DB')
})

//ROUTES
app.get('/', (req, res) => {
    res.send('I am the Index Page')
})


app.get('*', (req, res) => {
    res.status(404).send('Error!')
})

//LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})