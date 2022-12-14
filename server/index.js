const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const auth = require("./routes").auth;
const home = require("./routes").home;
require("dotenv").config();
require("./config/passport")(passport);

// connect to DB
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Connected to MongoDB Altas......");
  })
  .catch((e) => {
    console.log(e);
  });

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/auth", auth);
app.use("/api/home", passport.authenticate("jwt", { session: false }), home);

app.listen(8080, () => {
  console.log("Back-end server is running on port 8080......");
});
