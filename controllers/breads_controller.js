const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')

//INDEX
breads.get('/', (req, res) => {
    Bread.find() 
        .then(foundBreads => {
            res.render('Index', {
                breads: foundBreads,
                title: 'Index Page'
            })
        })
    
    
})

//NEW FORM
breads.get('/new', (req, res) => {
    res.render('New')
})



//EDIT  
breads.get('/:id/edit', (req, res) => {
    res.render('Edit', {
        bread: Bread[req.params.id],
        index: req.params.id
    })
})

//SHOW
breads.get('/:id', (req, res) =>{
  Bread.findById(req.params.id)
  .then()
})



//UPDATE
breads.put('/:id', (req, res) => {
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread[req.params.id] = req.body
    res.redirect(`/breads/${req.params.id}`)
})

//CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) { 
        req.body.image = undefined
}
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    console.log(req.body)
    Bread.create(req.body)
    res.redirect('/breads')
})

//DELETE
breads.delete('/:id', (req, res) => {
    Bread.splice(req.params.id, 1)
    res.status(303).redirect('/breads')
})


module.exports = breads