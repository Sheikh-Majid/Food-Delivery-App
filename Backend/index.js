const express = require("express");
const app = express();
const connectDB = require("./Database/db");
const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute")
var cors = require("cors");

const port = 4000;
app.use(express.json());
app.use(cors());
connectDB();
app.get("/", (req, res) => {
  res.send("Hello World! This is Sheikh Majid");
});

app.use("/api/user", userRoute);
app.use("/api/category", categoryRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
