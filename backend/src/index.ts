import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 8080);

app.use(cors());
app.use(express.json());

// API
app.get("/api/hello", (_req, res) => res.json({ message: "Hello from the backend!" }));

// Static assets from Vite build
const distPath = path.join(__dirname, "..", "..", "frontend", "dist");
app.use(express.static(distPath));

// SPA fallback for everything NOT starting with /api
app.get(/^(?!\/api).*/, (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// One listen only
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
