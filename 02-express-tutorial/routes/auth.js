const router = require("express").Router();
const express = require("express");
let {people} = require("../data");

router.post("/", (req, res) => {
    const { name } = req.body;
    if (name) {
      return res.status(200).send(`Welcome ${name}`);
    }
  
    res.status(401).send("Please Provide Credentials");
  });
module.exports = router;