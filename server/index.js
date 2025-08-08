// server/index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Payment callback endpoint
app.post("/api/payment/callback", (req, res) => {
  console.log("✅ Payment callback received:", req.body);
  res.status(200).send("Callback received");
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
