//DEPENDENCIES
const express = require('express')
require('dotenv').config()
const app = express()

const breadsRouter = require('./controllers/breads_controller')

//MIDDLEWARE

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

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

app.use('/breads', breadsRouter)

//LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})