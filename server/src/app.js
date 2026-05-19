import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import branchRoutes from "./routes/branch.routes.js";
import subbranchRoutes from "./routes/subbranch.routes.js";
import colorTokenRoutes from "./routes/colorToken.routes.js";
import publicBranchRoutes from "./routes/publicBranch.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "adechen-api",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/branches", publicBranchRoutes);
app.use("/api/me/branches", branchRoutes);
app.use("/api/me/", subbranchRoutes);
app.use("/api/me/", colorTokenRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.use(errorHandler);

export default app;
