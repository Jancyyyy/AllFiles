const express = require("express");

const {
  addInterview,
  getAllScheduledinterviews,
  Search,
} = require("../controllers/listInterview");

const router = express.Router();

router.post("/addInterview", addInterview);
router.post("/getallinterviews", getAllScheduledinterviews);
router.get("/searchinterviews", Search);

module.exports = router;
