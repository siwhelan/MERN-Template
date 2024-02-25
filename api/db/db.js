const mongoose = require("mongoose");
const dbURI =
  process.env.NODE_ENV === "test"
    ? process.env.MONGODB_URI
    : process.env.MONGODB_URI_PROD;

mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
