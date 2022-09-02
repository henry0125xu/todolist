const router = require("express").Router();
const User = require("../models").user;

router.use((req, res, next) => {
  console.log("This is the homepage......");
  next();
});

// add new subject
router.post("/", (req, res) => {
  User.findOneAndUpdate(
    { email: req.body.email },
    { $push: { lists: { subject: req.body.subject } } },
    { new: true },
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    }
  );
});

// delete specified subject
router.delete("/", (req, res) => {
  User.findOneAndUpdate(
    { email: req.body.email },
    { $pull: { lists: { _id: req.body._id } } },
    { new: true },
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    }
  );
});

router.get("/testAPI", (req, res) => {
  const msgObj = {
    msg: "TestAPI is working...",
  };
  return res.json(msgObj);
});

module.exports = router;
