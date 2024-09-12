const mongoose = require("mongoose");

const shortlinkSchema = new mongoose.Schema({
  realLink: {
    type: String,
    required: true,
  },
  shortLink: {
    type: String,
  },
});

const Shortlink = mongoose.model("Shortlink", shortlinkSchema);

module.exports = Shortlink;
