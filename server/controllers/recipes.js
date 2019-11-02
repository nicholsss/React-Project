  
const recipesRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Recipe = require('../models/recipe')
const User = require('../models/user')

recipesRouter.get('/',async (request, response ) => {
    const recipes = await Recipe.find({}).populate('user', {username:1})
response.json(recipes.map(r => r.toJSON()))
})

recipesRouter.post('/',async(request,reponse) =>{
    const recipe = new Recipe(request.body)

    if(!request.token) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
      }

      const user = await User.findById(decodedToken.id)

      recipe.user = user
      
      const result = await recipe.save()
      user.recipes=user.recipes.concat(recipe)
      await user.save()

      reponse.status(201).json(result)
})


module.exports = recipesRouter
