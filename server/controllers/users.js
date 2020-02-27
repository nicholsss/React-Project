const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("recipes", {
    title: 1,
    category: 1,
    ingredients: 1,
    instruction: 1
  });
  response.json(users.map(u => u.toJSON()));
});

usersRouter.get("/:id", async (request, response, next) => {
  try {
    const user = await User.findById(request.params.id).populate("recipes");
    if (user) {
      response.json(user.toJSON());
    } else {
      response.status(404).end();
    }
  } catch (exception) {
    next(exception);
  }
});

usersRouter.post("/", async (request, response, next) => {
  try {
    const body = request.body;

    if (
      body.password === undefined ||
      body.username === undefined ||
      body.password.length < 3 ||
      body.username.length < 3
    ) {
      return response.sendStatus(400);
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const user = new User({
      username: body.username,
      passwordHash
    });

    const savedUser = await user.save();

    response.json(savedUser);
  } catch (exception) {
    next(exception);
  }
});

module.exports = usersRouter;
