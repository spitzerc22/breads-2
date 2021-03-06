const mongoose = require('mongoose')
//creating shorthand for the Schema constructor
const { Schema } = mongoose


//Mongoose Schema that needs a  model
const breadSchema = new Schema({
  name: {type: String, required: true},
  hasGluten: Boolean,
  image: {type: String, default: 'https://placekitten.com/200/300'},
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Phoebe', 'Chandler', 'Ross', 'Joey']
  }
})

//'Bread' is the name of the collection(singular and capitalized), pass in our Schema
const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread