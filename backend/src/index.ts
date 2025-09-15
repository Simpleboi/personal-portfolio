import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 8080);

// middlewares
app.use(cors());
app.use(express.json());

// --- API routes ---
app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// --- serve the Vite build ---
const distPath = path.join(__dirname, "..", "..", "frontend", "dist");

// static assets (css/js/img)
app.use(express.static(distPath));

// SPA fallback (for React Router). Do NOT catch /api paths.
app.get("*", (req, res) => {
  if (req.path.startsWith("/api")) return res.sendStatus(404);
  res.sendFile(path.join(distPath, "index.html"));
});

// single listen
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
