const express = require("express");
const fetch = require("node-fetch")

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "My Proxy API"
  });
});

router.post("/token", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(username, password)
    const response = await fetch("https://devakademi.sahibinden.com/api/authorization/token",
      {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
    const json = await response.json();
    res.json(json)

  } catch (err) {
    next(err)
  }
})

module.exports = router;
