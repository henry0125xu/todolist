const router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const registerValidator = require("../validation").registerValidator;
const loginValidator = require("../validation").loginValidator;
const User = require("../models").user;

const HOME_URL = "http://localhost:3000/home";
const LOGIN_URL = "http://localhost:3000/login";

router.use((req, res, next) => {
  console.log("A request is coming in......");
  next();
});

router.post("/register", async (req, res) => {
  // check the validation of data
  const { error } = registerValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if the user exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email has been registered...");

  // register the user
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    await newUser.save();
    res.status(200).send({
      msg: "success",
      saveObject: newUser,
    });
  } catch (e) {
    res.status(400).send("User not saved...");
  }
});

router.post("/login", (req, res) => {
  // check the validation of data
  const { error } = loginValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) res.status(400).send(err);

    if (!user) {
      res.status(401).send("User not found...");
    } else {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) return res.status(400).send(err);
        if (isMatch) {
          // generate jwt
          const tokenObj = { _id: user._id, email: user.email };
          const token = jwt.sign(tokenObj, process.env.PASSPORT_SECRET);
          res.send({ success: true, token: "JWT " + token, user });
        } else {
          res.status(401).send("Wrong password...");
        }
      });
    }
  });
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: LOGIN_URL }),
  (req, res) => {
    res.redirect(HOME_URL);
  }
);

router.get("/testAPI", (req, res) => {
  const msgObj = {
    msg: "TestAPI is working...",
  };
  return res.json(msgObj);
});

module.exports = router;
