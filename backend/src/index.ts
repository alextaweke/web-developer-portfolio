import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pg from "pg"; // PostgreSQL
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL pool
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// SendGrid setup
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Simple admin auth
const ADMIN_PASSWORD = "mypassword"; // change this for production
const checkAdminAuth = (req: Request, res: Response, next: any) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "Unauthorized" });

  const token = authHeader.split(" ")[1];
  if (token !== ADMIN_PASSWORD)
    return res.status(403).json({ error: "Forbidden" });

  next();
};

// Health check
app.get("/", (req: Request, res: Response) => {
  res.send("Portfolio backend is running 🚀");
});

// Contact form route
app.post("/api/contact", async (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Save to PostgreSQL
    await pool.query(
      "INSERT INTO contacts (name, email, message, created_at) VALUES ($1, $2, $3, NOW())",
      [name, email, message]
    );

    // Optional: send email via SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: process.env.SMTP_USER, // your email
        from: "Portfolio <no-reply@yourdomain.com>", // verified sender
        subject: `📩 New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`,
      });
    }

    res.status(200).json({ success: true, message: "Message saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save message" });
  }
});

// Admin route to fetch messages
app.get(
  "/api/messages",
  checkAdminAuth,
  async (req: Request, res: Response) => {
    try {
      const result = await pool.query(
        "SELECT * FROM contacts ORDER BY created_at DESC"
      );
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  }
);

app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
