const express = require("express");
const forgotPassword = require("../../controllers/forgot_password/forgotPasswordController");
const forgotreset = require("../../controllers/reset_forgot_password/reset_forgot_password_controller");
const router = express.Router();

router.post("/", forgotPassword);
router.put("/forgotpasswordreset", forgotreset);

module.exports = router;
