const express = require("express");
const cors = require("cors");

const lol = require("./routes/lol");
const lor = require("./routes/lor");
const tft = require("./routes/tft");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

app.use("/lol", lol);
app.use("/lor", lor);
app.use("/tft", tft);

app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
