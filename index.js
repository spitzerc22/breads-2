//DEPENDENCIES
const express = require('express')
require('dotenv').config()
const app = express()

const breadsRouter = require('./controllers/breads_controller')

//MIDDLEWARE
app.use('/breads', breadsRouter)

//ROUTES
app.get('/', (req, res) => {
    res.send('I am the Index Page')
})

app.get('/two', (req, res) => {
    res.send('This is page 2 ')
})

app.get('/research/:animal', (req, res) => {
    const animal = req.params.animal;
    res.send(`Researching ${animal}`)
})

//LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})