const express = require("express");
const fetch = require("node-fetch")

const router = express.Router();

const { hasToken } = require("../middlewares");

router.get("/", (req, res) => {
  res.json({
    message: "My Proxy API"
  });
});

router.get("/list", async (req, res, next) => {
  try {
    let { page, size } = req.query;

    // default sizes
    if (typeof page === "undefined") page = 0;
    if (typeof size === "undefined") size = 5;

    const response = await fetch(`https://devakademi.sahibinden.com/api/classified/list?page=${page}&size=${size}`,
      {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    const json = await response.json();
    res.json(json)

  } catch (err) {
    next(err);
  }
});

router.get("/load", async (req, res, next) => {
  try {
    let id = req.query.id;
    let requestUrl = `https://devakademi.sahibinden.com/api/classified/load?id=${id}`;
    const response = await fetch(requestUrl,
      {
        mode: 'cors',
        method: 'GET',
      });
    const json = await response.json();
    res.json(json)

  } catch (err) {
    next(err);
  }
});

router.post("/token", async (req, res, next) => {
  try {
    const { username, password } = req.body;
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
    let { page, size } = req.query;
    let token = req.headers.token;

    console.log("token: ", token)

    // default sizes
    if (typeof page === "undefined") page = 0;
    if (typeof size === "undefined") size = 5;

    const response = await fetch(`https://devakademi.sahibinden.com/api/classified/myList?page=${page}&size=${size}`,
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

  } catch (err) {
    next(err);
  }
});

module.exports = router;
