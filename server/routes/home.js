const router = require("express").Router();

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

router.post("/testPOST", (req, res) => {
  res.send("Posted");
});

module.exports = router;
