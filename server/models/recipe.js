const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: {type:String, required:true},
    category: {type:String, required:true},
   //time:Number,
    ingredient:{type:[String], required:true},
    instruction:{type:String, required:true},
    likes:{type:Number},
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