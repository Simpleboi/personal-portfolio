import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.json({message: "Hello from the backend!"});
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})


