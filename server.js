
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { generateFate } = require("./utils/fate");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/fate", (req, res) => {
  const { name, gender, birth } = req.body;
  const result = generateFate(name, gender, birth);
  res.json(result);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on http://localhost:process.env.PORT || 3000");
});
