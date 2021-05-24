const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 4000;
const dotenv = require("dotenv");
const route = require("./routes/route");
const cors = require("cors");

dotenv.config();
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb://localhost:27017/lovecalc",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);

app.use("/api", route);

app.listen(port, () => {
  console.log("Server started on port ", port);
});
