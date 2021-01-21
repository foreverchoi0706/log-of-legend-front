const express = require("express");
const cors = require("cors");
const navigation = require("./routes/navigations");
const search = require("./routes/search");


const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());


app.use("/navigation", navigation);
app.use("/search", search);

app.get("/", (_, res) => res.send("hellow heroku!"));

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
