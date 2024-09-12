const app = require("./app");
const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(console.log("DB has been connected successfuly"))
  .catch((err) =>
    console.error("there was an error connecting to the database", err)
  );

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The app is listening on port: ${port}`);
});
