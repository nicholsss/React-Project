const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: String,
    category: String,
   //time:Number,
    ingredient:[String],
    instruction:String,

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    
})

recipeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Recipe', recipeSchema)