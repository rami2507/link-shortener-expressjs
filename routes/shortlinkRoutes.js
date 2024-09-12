const express = require("express");
const {
  createShortlink,
  getRealLink,
} = require("./../controllers/shortlinkController");

const router = express.Router();

router.get("/getRealLink", getRealLink);

router.post("/create-shortlink", createShortlink);

module.exports = router;
