const Shortlink = require("../models/shortlinkModel");
const asyncHandler = require("express-async-handler");

exports.createShortlink = asyncHandler(async (req, res) => {
  const { realLink } = req.body;

  if (!realLink) {
    return res.status(400).json({
      status: "error",
      message: "please provide a real link",
    });
  }

  let newShortLink = await Shortlink.create({ realLink });

  newShortLink.shortLink = `${req.protocol}://${req.headers.host}/${
    newShortLink._id
  }/${Date.now()}`;

  await newShortLink.save();

  res.status(201).json({
    status: "success",
    data: newShortLink,
  });
});

exports.getRealLink = asyncHandler(async (req, res) => {
  const { shortLink } = req.body;

  if (!shortLink) {
    return res.status(400).json({
      status: "error",
      message: "please provide a short link",
    });
  }

  const realLink = await Shortlink.findOne({ shortLink }).select("realLink");

  if (!realLink) {
    return res.status(404).json({
      status: "error",
      message: `Short link not found: ${shortLink}`,
    });
  }

  res.status(200).json({
    status: "success",
    data: realLink,
  });
});
