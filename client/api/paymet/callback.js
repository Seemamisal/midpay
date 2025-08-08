export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("✅ Payment callback received:", req.body);
    return res.status(200).send("Callback received");
  }
  res.status(405).json({ message: "Method Not Allowed" });
}
