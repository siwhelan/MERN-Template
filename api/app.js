require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // if needed for parsing POST requests

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define routes
app.get("/", (req, res) => res.send("API Running"));

// Here you can import and use other routes, for example:
// const usersRoutes = require('./routes/api/users');
// app.use('/api/users', usersRoutes);

module.exports = app;
