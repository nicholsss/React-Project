const recipesRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const Recipe = require("../models/recipe");
const User = require("../models/user");

recipesRouter.get("/", async (request, response) => {
  const recipes = await Recipe.find({})
  .populate("user", { username: 1 });
  response.json(recipes.map(r => r.toJSON()));
});

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

recipesRouter.post("/", async (request, response) => {

  const body = request.body

  const token = getTokenFrom(request)
  
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)

    const recipe = new Recipe({
      title: body.title,
      category: body.category,
      ingredient: body.ingredients,
      instruction: body.instruction,
      user: user._id,
      likes: 0
    })
/*
    if(recipe.likes){
      recipe.likes= 0
    }
    */
    const savedRecipe = await recipe.save()
    user.recipes = user.recipes.concat(savedRecipe._id)
    await user.save()
    response.json(savedRecipe.toJSON())
  } catch(exception) {
    next(exception)
  }
})

recipesRouter.put('/:id', async(request,response) => {
  const { title, category, ingredient,instruction,likes } = request.body

  const recipe = {
    title, category, ingredient,instruction,likes
  }
  const updatedRecipe = await Recipe
    .findByIdAndUpdate(request.params.id, recipe, { new: true })
    .populate('user', { username: 1 })
    .populate('comments', { text:1} )
    
  response.json(updatedRecipe.toJSON())
})


recipesRouter.delete('/:id', async (request, response) => {
  const token = getTokenFrom(request)

  if(!token){
    return response.status(401).json({ error: 'token missing' })
  }
  
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if(!decodedToken.id){
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const recipe = await Recipe.findById(request.params.id)
  //console.log("user",recipe.user.toString())
  //console.log("token", token)
  if(recipe.user.toString() === decodedToken.id){
    await Recipe.findByIdAndRemove(request.params.id)
    response.status(204).end()
  }else{
    response.status(404).end()

  }
})

  /*
  const recipe = new Recipe(request.body);

  if (!request.token) {
    return response.status(401).json({ error: "token missing or invalid" });
  }
  const decodedToken = jwt.verify(request.token, process.env.SECRET);

  if (!decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }

  const user = await User.findById(decodedToken.id);

  recipe.user = user;

  const result = await recipe.save();
  user.recipes = user.recipes.concat(recipe);
  await user.save();

  reponse.status(201).json(result);
});
*/

module.exports = recipesRouter;
