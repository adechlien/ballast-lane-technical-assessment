import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "adechen-api",
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

export default app;
