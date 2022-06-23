const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//Please add .env file in .gitignore

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Example app");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
