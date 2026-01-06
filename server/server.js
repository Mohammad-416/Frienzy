import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./lib/db.js";
import userRouter from "./Router/userRouter.js";
import messageRouter from "./Router/messageRouter.js";

const app = express();

// middlewares
app.use(express.json({ limit: "4mb" }));
app.use(cors());

// routes
app.get("/api/status", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

// DB connection (allowed)
await connectDB();

// ❗ DO NOT listen
export default app;
