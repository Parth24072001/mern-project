import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";
import expenceRouter from "./routes/expense.routes.js";

//routes declaration

app.use("/api/v1/users", userRouter);
app.use("/api/v1/expence", expenceRouter);

// http://localhost:8000/api/v1/users/register

export { app };
