const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "MiniPost API server is running",
  });
});

app.post("/api/request", (req, res) => {
  console.log("Received request configuration:");
  console.log(req.body);

  res.json({
    message: "Request received successfully",
    request: req.body,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});