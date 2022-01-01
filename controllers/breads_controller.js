const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')
const breadSeedData = require('../models/seed')

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

//SHOW
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
    .then(foundBread => {
        res.render('Show', {
            bread: foundBread
        })
    }) 
    .catch(err => {
        console.log(err)
        res.send("404")
    })
  })


//EDIT  
breads.get('/:id/edit', (req, res) => {
    Bread.findById(req.params.id)
    .then(foundBread => {
        res.render('Edit', {
            bread: foundBread
        })
    })
})


//UPDATE
breads.put('/:id', (req, res) => {
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    //req.body is the entire object, we need it for this
    //{new: true} is telling us the presented document is the updated one
    Bread.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedBread => {
        console.log(updatedBread)
        res.redirect(`/breads/${req.params.id}`)
    })
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
    Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread => {
        res.status(303).redirect('/breads')
    })
    // Bread.splice(req.params.id, 1)
    // res.status(303).redirect('/breads')
})

//SEED ROUTE
breads.get('/data/seed', (req, res) => {
    Bread.insertMany(breadSeedData)
        .then(createdBreads => {
            res.redirect('/breads')
        })
})

module.exports = breads