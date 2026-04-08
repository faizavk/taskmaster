import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks.js";

const app = express();

app.use(cors());
app.use(express.json());

// health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});
app.get("/", (req, res) => {
  res.send("TaskMaster API is running 🚀");
});

app.use("/api/tasks", tasksRouter);

export default app;