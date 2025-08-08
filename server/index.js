// server/index.js
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// =================== API Routes ===================

// Payment callback endpoint
app.post("/api/payment/callback", (req, res) => {
  console.log("✅ Payment callback received:", req.body);
  res.status(200).send("Callback received");
});

// Test API route
app.get("/api", (req, res) => {
  res.json({ message: "API is working" });
});

// =================== Serve React Frontend ===================
// React build folder path (Vite = dist, CRA = build)
// इथे "../client/dist" मध्ये तुझं React build येईल
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

// =================== Start Server ===================
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
