const router = require("express").Router();
const User = require("../models").user;

router.use((req, res, next) => {
  console.log("This is the homepage......");
  next();
});

router.get("/testAPI", (req, res) => {
  try {
    const msgObj = {
      msg: "TestAPI is working...",
    };
    return res.json(msgObj);
  } catch (e) {
    res.send("ERROR");
  }
});

// show all informations
router.get("/", async (req, res) => {
  const profile = await User.findOne({ username: "user1" });
  res.send(profile);
});

// add new subject
router.post("/", (req, res) => {
  User.findOneAndUpdate(
    { username: "user2" },
    { $push: { lists: { subject: "Operating System" } } }
  )
    .then(() => {
      res.send("Success");
    })
    .catch((e) => {
      res.send(e);
    });
});

// delete a specified subject
router.delete("/", (req, res) => {
  User.findOneAndUpdate(
    { username: "user1" },
    { $pull: { lists: { subject: "Algorithm" } } }
  )
    .then(() => {
      res.send("Success");
    })
    .catch((e) => {
      res.send(e);
    });
});

module.exports = router;
