const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')
//INDEX
breads.get('/', (req, res) => {
    res.send(Bread)
})

breads.get('/:id', (req, res) =>{
    res.send(Bread[req.params.id])
})
module.exports = breads