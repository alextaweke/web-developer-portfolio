import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2/promise";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 3306,
});

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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
    // Save to MySQL
    await pool.query(
      "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    // Send email notification
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER, // You receive messages here
      subject: `📩 New message from ${name}`,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Message sent & saved!" });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Admin route to view messages
app.get("/api/messages", async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM contacts ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error("❌ DB Error:", err);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
// Simple middleware for admin auth
const ADMIN_PASSWORD = "mypassword"; // change this

const checkAdminAuth = (req: Request, res: Response, next: any) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "Unauthorized" });

  const token = authHeader.split(" ")[1];
  if (token !== ADMIN_PASSWORD) {
    return res.status(403).json({ error: "Forbidden" });
  }

  next();
};

// Protected route
app.get(
  "/api/messages",
  checkAdminAuth,
  async (req: Request, res: Response) => {
    try {
      const [rows] = await pool.query(
        "SELECT * FROM contacts ORDER BY created_at DESC"
      );
      res.json(rows);
    } catch (err) {
      console.error("❌ DB Error:", err);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  }
);
