import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8787;
const API_KEY = process.env.ALTAVARAH_API_KEY || "changeme";

app.use(cors());
app.use(express.json());

// API key check
app.use((req, res, next) => {
  const key = req.header("X-API-Key");
  if (key !== API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});

// Health check
app.get("/", (req, res) => res.json({ ok: true, service: "altavarah-middleware" }));

// Example endpoints (stubs for now)
app.post("/crm/leads", (req, res) => res.json({ ok: true, lead: req.body }));
app.post("/calendar/meetings", (req, res) => res.json({ ok: true, booking_url: "https://calendly.com/altavarah/30min" }));
app.post("/payments/checkout", (req, res) => res.json({ ok: true, checkout_url: "https://checkout.stripe.com/pay/fake" }));
app.post("/support/tickets", (req, res) => res.json({ ok: true, ticket: req.body }));
app.post("/email/push", (req, res) => res.json({ ok: true, queued: req.body }));
app.post("/social/post", (req, res) => res.json({ ok: true, posted: req.body }));
app.post("/analytics/kpi", (req, res) => res.json({ ok: true, logged: req.body }));

app.listen(PORT, () => console.log(`ALTAVARAH middleware listening on :${PORT}`));
