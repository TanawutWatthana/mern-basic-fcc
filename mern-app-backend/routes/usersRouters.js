const express = require("express");
const router = express.Router();
let user = require("../models/user.model");

router.route("/").get((req, res) => {
  user
    .find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((res, req) => {
  const username = req.body.username;
  const newUser = new USER({ username });
  newUser
    .save()
    .then(() => res.json("user added"))
    .catch(() => res.status(400).json("Error: " + err));
});

module.exports = router;
