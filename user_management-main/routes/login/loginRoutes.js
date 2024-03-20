// const express = require('express');
// const {login} = require('../../controllers/login/loginController');

// const router = express.Router();

// router.post('/', login);

// module.exports = router;

const express = require("express");
const {
  login,
  loginwithrole,
} = require("../../controllers/login/loginController");

const router = express.Router();

router.post("/", login);
router.post("/loginwithrole", loginwithrole);
module.exports = router;
