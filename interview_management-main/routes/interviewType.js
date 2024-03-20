const express = require("express");
const {
  getAllInterviewType,
  postInterviewStatus,
  updatedInterviewStatus,
} = require("../controllers/interviewTypeController");

const router = express.Router();

router.get("/", getAllInterviewType);
router.post("/", postInterviewStatus);
router.put("/:id", updatedInterviewStatus);

module.exports = router;
