const express = require("express");
const app = express();
const shortlinkRoutes = require("./routes/shortlinkRoutes");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

app.use(express.json());

// ROUTES
app.use("/api/v1/shortlink", shortlinkRoutes);

module.exports = app;
