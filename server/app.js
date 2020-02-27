const config = require("./utils/config");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const recipeRouter = require("./controllers/recipes");
app.use(cors());
app.use(express.static("build"));
app.use(bodyParser.json());

app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/recipes", recipeRouter);

mongoose
  .connect(config.MONGODB_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch(error => {
    console.log("error connection to MongoDB:");
  });
module.exports = app;
