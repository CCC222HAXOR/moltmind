export default function handler(req, res) {
  res.status(200).json({
    name: "MOLT MIND ($MMIND)",
    status: "online",
    endpoint: "/api/market-analyst"
  });
}
