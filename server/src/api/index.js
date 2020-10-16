const express = require("express");
const fetch = require("node-fetch")

const router = express.Router();

const { hasToken } = require("../middlewares");

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

router.post("/myList", hasToken, async (req, res, next) => {
  try {
    let { page, size } = req.params;
    let token = req.headers.token;
    console.log(1)
    // default sizes
    if (typeof page === "undefined") page = 0;
    if (typeof size === "undefined") size = 5;

    console.log(2)
    
    const response = await fetch(`https://devakademi.sahibinden.com/api//classified/myList?page=${page}&size=${size}`,
      {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token,
        },
      });
    const json = await response.json();
    res.json(json)
    console.log(3)

  } catch (err) {
    next(err);
  }
});

module.exports = router;
